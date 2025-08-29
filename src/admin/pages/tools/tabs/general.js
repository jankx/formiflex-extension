import {
	Card,
	CardHeader,
	CardBody,
	Button,
	CardDivider,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';
import ResetSettings from '../components/reset-settings';

const DefaultCPTView = () => {
	const defaultUrl = addQueryArgs( 'edit.php', {
		post_type: 'formiflex',
	} );

	return (
		<Fragment>
			<p>
				{ __(
					'If for some reason you need to manage the popups with default custom post type table, please click on the link below.',
					'formiflex'
				) }
			</p>
			<Button
				text={ __( 'Default CPT view' ) }
				href={ defaultUrl }
				variant="primary"
			/>
		</Fragment>
	);
};

export default function General() {
	return (
		<div>
			<Card>
				<CardHeader>
					<h2>{ __( 'General', 'formiflex' ) }</h2>
				</CardHeader>

				<CardBody>
					<ResetSettings />
					<CardDivider />
				</CardBody>
			</Card>
		</div>
	);
}
