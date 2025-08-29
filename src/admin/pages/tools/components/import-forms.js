import { FormFileUpload } from '@wordpress/components';
import { useState, Fragment } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import UpdateSettings from '../../../components/update-settings';

export default function ImportForms() {
	const [ files, setFiles ] = useState( false );

	const req = () => {
		const data = new FormData();
		data.append( 'file', files[ 0 ] );

		return apiFetch( {
			path: '/formiflex/v1/forms/import',
			method: 'POST',
			body: data,
		} ).finally( () => setFiles( false ) );
	};

	return (
		<Fragment>
			<div className="setting-controls__save-settings">
				<FormFileUpload
					accept="application/json"
					onChange={ ( event ) => setFiles( event.target.files ) }
					variant="secondary"
					__next40pxDefaultSize
				>
					{ __( 'Choose file', 'formiflex' ) }
				</FormFileUpload>
				{ files && files[ 0 ]?.name }
			</div>

			<UpdateSettings
				req={ req }
				text={ __( 'Import forms', 'formiflex' ) }
				variant={ 'primary' }
				disabled={ ! files }
			/>
		</Fragment>
	);
}
