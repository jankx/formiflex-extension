import { __, sprintf } from '@wordpress/i18n';
import {
	Card,
	CardHeader,
	CardBody,
	CardMedia,
	CardFooter,
	Button,
	ToggleControl,
	Modal,
} from '@wordpress/components';
import { useState, Fragment, useContext } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { SettingsContext } from '../../context/settings-context';
import { useEntityRecord, store as coreStore } from '@wordpress/core-data';

export default function Addon( props ) {
	const { settings, updateSetting } = useContext( SettingsContext );
	const { addon } = props;

	const [ isOpen, setOpen ] = useState( false );

	const { saveEntityRecord } = useDispatch( coreStore );

	const popper = useEntityRecord( 'root', 'plugin', 'popper/popper' );
	const formiflexPro = useEntityRecord(
		'root',
		'plugin',
		'formiflex-pro/formiflex-pro'
	);

	const installPopper = () => {
		if ( popper.record ) {
			popper.edit( { status: 'active' } );
			popper.save();
		} else {
			saveEntityRecord( 'root', 'plugin', {
				slug: 'popper',
				status: 'active',
			} );
		}
	};

	const { isInstalling } = useSelect(
		( select ) => ( {
			isInstalling: select( coreStore ).isSavingEntityRecord(
				'root',
				'plugin',
				'popper/popper'
			),
		} ),
		[]
	);

	const toggleAddon = ( val, slug ) => {
		if ( ! formiflexPro.record || 'active' !== formiflexPro.record.status ) {
			return setOpen( true );
		}
		if ( val ) {
			updateSetting( 'enabled_addons', [
				...settings.enabled_addons,
				slug,
			] );
		} else {
			const enabledAddons = settings.enabled_addons.filter( ( item ) => {
				return item !== slug;
			} );
			updateSetting( 'enabled_addons', enabledAddons );
		}
	};

	return (
		<Fragment>
			<Card className="addon">
				<CardHeader>
					<h2>{ addon.title }</h2>
				</CardHeader>
				<CardBody>
					<CardMedia as="aside">
						<img
							src={ require(
								`../../../../assets/addons/${ addon.slug }.png`
							) }
							alt={ addon.title }
						/>
					</CardMedia>
					<p>{ addon.excerpt }</p>
				</CardBody>
				<CardFooter>
					{ 'popper' === addon.slug ? (
						<Button
							onClick={ () => installPopper() }
							variant="primary"
							size="small"
							isBusy={ popper.isResolving || isInstalling }
							disabled={
								popper.isResolving ||
								'active' === popper.editedRecord.status ||
								isInstalling
							}
							aria-disabled={ popper.isResolving }
						>
							{ 'active' === popper.editedRecord.status
								? __( 'Is Active' )
								: __( 'Activate' ) }
						</Button>
					) : (
						<ToggleControl
							checked={
								'active' === formiflexPro.record?.status || false
							}
							onChange={ ( checked ) =>
								toggleAddon( checked, addon.slug )
							}
							disabled={
								formiflexPro.isResolving ||
								'active' === formiflexPro.record?.status
							}
							__nextHasNoMarginBottom
						/>
					) }
				</CardFooter>
			</Card>
			{ isOpen && (
				<Modal
					onRequestClose={ () => setOpen( false ) }
					__experimentalHideHeader
				>
					<p>
						{ sprintf(
							/* translators: %s: Addon name */
							__(
								'To enable %s addon you need a Formiflex Pro license.',
								'formiflex'
							),
							addon.title
						) }
					</p>
					<Button
						variant="primary"
						href="https://formiflex.net"
						icon="download"
						iconPosition={ 'right' }
						target="_blank"
					>
						{ __( 'Download', 'formiflex-pro' ) }
					</Button>
				</Modal>
			) }
		</Fragment>
	);
}
