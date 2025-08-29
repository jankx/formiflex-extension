import Header from '../../components/masthead.js';
import { __ } from '@wordpress/i18n';
import { useState, Fragment, useContext } from '@wordpress/element';
import {
	TabPanel,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalUseNavigator as useNavigator,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalGrid as Grid,
	Notice,
} from '@wordpress/components';
import LoadingSpinner from '../../components/loading-spinner.js';
import Addon from './addon.js';
import { useEntityRecords } from '@wordpress/core-data';
import { SettingsContext } from '../../context/settings-context';

export default function Addons() {
	const { hasUpdates, saveSettings } = useContext( SettingsContext );

	const addonsTabs = [
		{
			name: 'general',
			title: __( 'All', 'formiflex' ),
		},
		{
			name: 'integrations',
			title: __( 'Integrations', 'formiflex' ),
		},
		{
			name: 'utility',
			title: __( 'Utility', 'formiflex' ),
		},
		{
			name: 'free',
			title: __( 'Free', 'formiflex' ),
		},
	];

	const [ filter, setFilter ] = useState( 'general' );

	const { params } = useNavigator();
	const initialTab = params.tab || 'general';

	const { records: addons, hasResolved } = useEntityRecords(
		'formiflex/v1',
		'addons',
		{ per_page: 100 }
	);

	const filterAddon = ( element ) => {
		if ( 'general' === filter ) {
			return addons;
		}
		return element.category === filter;
	};

	if ( ! hasResolved ) {
		return <LoadingSpinner text={ __( 'Loading addons', 'formiflex' ) } />;
	}

	return (
		<Fragment>
			<Header title={ __( 'Addons', 'formiflex' ) } />

			<div className="setting-tabs">
				{ hasUpdates && (
					<Notice
						status="warning"
						isDismissible={ false }
						actions={ [
							{
								label: 'Save',
								variant: 'primary',
								onClick: () =>
									saveSettings().then( () =>
										window.location.reload()
									),
							},
						] }
					>
						<p>
							{ __(
								'To make effective your choice, you must save it.',
								'formiflex'
							) }
						</p>
					</Notice>
				) }

				<TabPanel
					tabs={ addonsTabs }
					onSelect={ ( tabName ) => setFilter( tabName ) }
					initialTabName={ initialTab }
				>
					{ () => {
						return (
							<Fragment>
								<Grid columns={ 3 }>
									{ addons
										.filter( ( element ) => {
											return filterAddon( element );
										} )
										.map( ( addon ) => {
											return (
												<Addon
													addon={ addon }
													key={ addon.slug }
												/>
											);
										} ) }
								</Grid>
							</Fragment>
						);
					} }
				</TabPanel>
			</div>
		</Fragment>
	);
}
