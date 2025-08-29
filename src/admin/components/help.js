import {
	Card,
	CardHeader,
	CardBody,
	ExternalLink,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { PromoSettings } from '../../components/promo';

export default function Help() {
	return (
		<div className="ads-container">
			<PromoSettings />
			<Card>
				<CardHeader>
					<h2>{ __( 'Need help?', 'formiflex' ) }</h2>
				</CardHeader>

				<CardBody>
					<p>
						{ __(
							'Detailed documentation is available on the plugin website.',
							'formiflex'
						) }
					</p>

					<ExternalLink href="https://docs.formiflex.net">
						{ __( 'Documentation', 'formiflex' ) }
					</ExternalLink>
					<p>
						{ __(
							'We would love to help you out if you need any help.',
							'formiflex'
						) }
					</p>

					<ExternalLink href="https://wordpress.org/support/plugin/formiflex/">
						{ __( 'Ask a question', 'formiflex' ) }
					</ExternalLink>
				</CardBody>
			</Card>
			<Card className="ads-container__reviews">
				<CardHeader>
					<h2>{ __( 'Do you like the plugin?', 'formiflex' ) }</h2>
				</CardHeader>

				<CardBody>
					<p>
						{ __(
							'If you like Formiflex plugin you can share a review to help us and spread some love!',
							'formiflex'
						) }
					</p>
					<ExternalLink href="https://wordpress.org/support/plugin/formiflex/reviews/#new-post">
						{ __( 'Rate 5 stars!', 'formiflex' ) }
					</ExternalLink>
				</CardBody>
			</Card>
		</div>
	);
}
