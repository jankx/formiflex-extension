import { Fragment } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import UpdateSettings from '../../../components/update-settings';

export default function ReSync() {
	const reSync = () => {
		return apiFetch( {
			path: '/formiflex/v1/sync_template_library',
			method: 'POST',
			data: {
				type: 'formiflex',
				categories: 'form',
			},
		} );
	};

	return (
		<Fragment>
			<p>
				{ __( 'If you need to reset template library.', 'formiflex' ) }
			</p>
			<UpdateSettings
				req={ reSync }
				text={ __( 'Re-Sync template', 'formiflex' ) }
				variant={ 'primary' }
			/>
		</Fragment>
	);
}
