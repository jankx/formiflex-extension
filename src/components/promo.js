import { __ } from '@wordpress/i18n';
import {
	Card,
	CardHeader,
	CardBody,
	Button,
	withFilters,
} from '@wordpress/components';

export const Promo = withFilters( 'formiflex.modal.promo' )( () => {
	return (
		<div>
			<p>
				{ __(
					'This action is available only for pro users. You can try one month free.',
					'formiflex'
				) }
			</p>
			<Button
				variant="primary"
				href="https://formiflex.net"
				icon="download"
				iconPosition={ 'right' }
				target="_blank"
			>
				{ __( 'Try it now free!', 'formiflex' ) }
			</Button>
		</div>
	);
} );

export const PromoSettings = withFilters( 'formiflex.settings.promo' )( () => {
	return (
		<Card>
			<CardHeader>
				<h2>{ __( 'Go Pro', 'formiflex' ) }</h2>
			</CardHeader>
			<CardBody>
				<p>{ __( 'Empower your forms with our PRO extensions.' ) }</p>
				<ul>
					<li>{ __( 'Conditional fields', 'formiflex' ) }</li>
					<li>{ __( 'File upload', 'formiflex' ) }</li>
					<li>{ __( 'Frontend posting', 'formiflex' ) }</li>
					<li>{ __( 'Login form', 'formiflex' ) }</li>
					<li>{ __( 'Search autosuggest', 'formiflex' ) }</li>
					<li>{ __( 'Calculator formula', 'formiflex' ) }</li>
					<li>{ __( 'Web Hooks', 'formiflex' ) }</li>
					<li>{ __( 'Mail marketing integration', 'formiflex' ) }</li>
				</ul>
				<Button
					text={ __( 'Try now free', 'formiflex' ) }
					variant="primary"
				/>
			</CardBody>
		</Card>
	);
} );
