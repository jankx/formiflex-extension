import {
	Card,
	CardHeader,
	CardBody,
	ExternalLink,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import { dateI18n, getSettings } from '@wordpress/date';
import { useEntityRecord } from '@wordpress/core-data';

export function SubmissionData( props ) {
	const { data } = props;
	const { formats } = getSettings();

	const formUrl = addQueryArgs( 'post.php', {
		post: data.form_id,
		action: 'edit',
	} );

	const { record: form } = useEntityRecord(
		'postType',
		'formiflex_form',
		data.form_id
	);

	return (
		<Card>
			<CardHeader>
				<h2>{ __( 'Submission data', 'formiflex' ) }</h2>
			</CardHeader>

			<CardBody>
				<table>
					<tbody>
						<tr>
							<th>{ __( 'Submission ID', 'formiflex' ) }</th>
							<td>{ data.id }</td>
						</tr>
						<tr>
							<th>{ __( 'Form ID', 'formiflex' ) }</th>
							<td>
								<ExternalLink href={ formUrl }>
									{ form?.title.raw ||
										__( '(No title)', 'formiflex' ) }
								</ExternalLink>
							</td>
						</tr>
						<tr>
							<th>{ 'Timestamp' }</th>
							<td>
								{ dateI18n(
									formats.datetime,
									data.submitted_at
								) }
							</td>
						</tr>
						<tr>
							<th>{ 'Referrer URL' }</th>
							<td>
								<ExternalLink href={ data.referer_url }>
									{ data.referer_url }
								</ExternalLink>
							</td>
						</tr>
						<tr>
							<th>{ 'IP' }</th>
							<td>{ data.ip_address }</td>
						</tr>
						<tr>
							<th>{ 'User Agent' }</th>
							<td>{ data.user_agent }</td>
						</tr>
					</tbody>
				</table>
			</CardBody>
		</Card>
	);
}
