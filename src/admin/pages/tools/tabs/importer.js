import { Card, CardHeader, CardBody, withFilters } from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import ImportForms from '../components/import-forms';

export const Importer = withFilters( 'formiflex.settings.importer' )( () => {
	return (
		<Card>
			<CardHeader>
				<h2>{ __( 'Import Forms', 'formiflex' ) }</h2>
			</CardHeader>

			<CardBody>
				<p>
					{ __(
						'Select the Formiflex export file(.json) you would like to import. When you click the import button below, Formiflex will import the forms.',
						'formiflex'
					) }
				</p>
				<ImportForms />
			</CardBody>
		</Card>
	);
} );
