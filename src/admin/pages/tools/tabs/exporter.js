import { Card, CardHeader, CardBody, withFilters } from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import ExportForms from '../components/export-forms';

const Exporter = () => {
	return (
		<Card>
			<CardHeader>
				<h2>{ __( 'Export Forms', 'formiflex' ) }</h2>
			</CardHeader>

			<CardBody>
				<p>
					{ __(
						"When you click the download button below, Formiflex will create a JSON file for you to save to your computer. Once you've saved the downloaded file, you can use the Import tool to import the forms.",
						'formiflex'
					) }
				</p>
				<ExportForms />
			</CardBody>
		</Card>
	);
};

export default withFilters( 'formiflex.settings.exporter' )( Exporter );
