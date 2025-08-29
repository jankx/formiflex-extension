import {
	Card,
	CardHeader,
	CardBody,
	ExternalLink,
	Button,
	__experimentalInputControl as InputControl,
	__experimentalVStack as VStack,
	Notice,
	ToggleControl,
} from '@wordpress/components';

import {
	RawHTML,
	useContext,
	Fragment,
	useRef,
	useState,
} from '@wordpress/element';

import { __, sprintf } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { dateI18n } from '@wordpress/date';
import { SettingsContext } from '../../../context/settings-context';

export default function General() {
	const { settings, updateSetting } = useContext( SettingsContext );
	const { log, ipLogging, optionDelete } = settings;
	const licenseKey = useRef( settings.license?.license_key?.key ?? '' );

	const [ loading, setLoading ] = useState( false );
	const [ message, setMessage ] = useState( false );

	const updateLicense = ( endpoint = 'activate' ) => {
		setLoading( true );
		apiFetch( {
			path: '/formiflex/v1/license/' + endpoint,
			method: 'POST',
			data: {
				license: licenseKey.current,
			},
		} )
			.then( ( result ) => {
				if ( result.response?.success ) {
					updateSetting( 'license', result.response.license );
				}

				if ( ! result.success ) {
					setMessage( result.response );
				}
			} )
			.finally( () => setLoading( false ) );
	};

	return (
		<Fragment>
			<Card>
				<CardHeader>
					<h2>{ __( 'License', 'formiflex' ) }</h2>
				</CardHeader>

				<CardBody>
					<ExternalLink href="https://formiflex.net">
						{ __( 'Get a PRO License', 'formiflex' ) }
					</ExternalLink>
					<RawHTML>
						{ __(
							'<p>Your <strong>pro license</strong> key provides access to addons. You can still using Formiflex without a license key.</p>',
							'formiflex'
						) }
					</RawHTML>
					<InputControl
						type="text"
						autoComplete="new-password"
						label={ __( 'License Key', 'formiflex' ) }
						value={ licenseKey.current }
						onChange={ ( val ) => ( licenseKey.current = val ) }
						suffix={
							<Fragment>
								<Button
									isBusy={ loading }
									aria-disabled={ loading }
									disabled={ loading }
									text={ __( 'check', 'formiflex' ) }
									onClick={ () =>
										updateLicense( 'validate' )
									}
								/>
								<Button
									variant="primary"
									isBusy={ loading }
									aria-disabled={
										loading || '' === licenseKey
									}
									disabled={ loading || '' === licenseKey }
									text={ __( 'Activate', 'formiflex' ) }
									onClick={ () => updateLicense() }
								/>
							</Fragment>
						}
						__next40pxDefaultSize
					/>
					{ message && (
						<Notice
							isDismissible={ false }
							className={
								'active' ===
								settings.license?.license_key?.status
									? 'success'
									: 'warning'
							}
							status={
								'active' ===
								settings.license?.license_key?.status
									? 'success'
									: 'warning'
							}
						>
							<RawHTML>{ message }</RawHTML>
						</Notice>
					) }
					{ settings?.license?.license_key?.status && (
						<Notice
							isDismissible={ false }
							status={
								'active' ===
								settings.license?.license_key?.status
									? 'success'
									: 'warning'
							}
						>
							<RawHTML>
								{ sprintf(
									/* translators: %s: License status. */
									__(
										'<p>License status: <b>%1$s</b>. Expires: %2$s</p>',
										'formiflex'
									),
									settings.license.license_key.status,
									__( 'Never', 'tropical-juice' ) !==
										settings.license.license_key.expires_at
										? dateI18n(
												'd M, Y',
												settings.license.license_key
													.expires_at
										  )
										: __( 'Never', 'tropical-juice' )
								) }
							</RawHTML>
						</Notice>
					) }
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<h2>{ __( 'General settings', 'formiflex' ) }</h2>
				</CardHeader>

				<CardBody>
					<VStack spacing="4">
						<ToggleControl
							label={ __( 'Enable IP logging', 'formiflex' ) }
							checked={ ipLogging }
							onChange={ ( val ) =>
								updateSetting( 'ipLogging', val )
							}
							help={ __(
								"If this option is turned on, the user's IP address will be saved with the form data",
								'formiflex'
							) }
							__nextHasNoMarginBottom
						/>
						<hr />
						<ToggleControl
							label={ __(
								'Delete settings on uninstall',
								'formiflex'
							) }
							checked={ optionDelete }
							onChange={ ( val ) =>
								updateSetting( 'optionDelete', val )
							}
							help={ __(
								'If this option is turned on, all the settings of Formiflex will be deleted when it will be uninstalled.',
								'formiflex'
							) }
							__nextHasNoMarginBottom
						/>
						<ToggleControl
							label={ __( 'Enable debug log', 'formiflex' ) }
							help={ __(
								'Enable logging can hurt site performance. Please activate logging only for debug purpose.',
								'formiflex'
							) }
							checked={ log }
							onChange={ ( val ) => updateSetting( 'log', val ) }
							__nextHasNoMarginBottom
						/>
						{ log && (
							<p>
								<ExternalLink
									href={
										'/wp-content/uploads/formiflex/logs/' +
										settings.log_file
									}
								>
									{ __( 'View log', 'formiflex' ) }
								</ExternalLink>
							</p>
						) }
					</VStack>
				</CardBody>
			</Card>
		</Fragment>
	);
}
