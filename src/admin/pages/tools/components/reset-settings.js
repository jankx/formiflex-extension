import { Fragment } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import UpdateSettings from '../../../components/update-settings';

export default function ResetSettings() {
	const resetSettings = () => {
		return apiFetch( {
			path: '/formiflex/v1/settings/reset',
			method: 'POST',
		} );
	};

	return (
		<Fragment>
			<p>{ __( 'If you need to reset settings.', 'formiflex' ) }</p>
			<UpdateSettings
				req={ resetSettings }
				text={ __( 'Reset settings', 'formiflex' ) }
				isDestructive
				variant="secondary"
				withConfirm={ true }
				confirmMessage={ __(
					'This will reset all your settings. Are you sure?',
					'formiflex'
				) }
			/>
		</Fragment>
	);
}
