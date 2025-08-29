import {
	Card,
	CardHeader,
	CardBody,
	TextControl,
	RadioControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { useContext, Fragment } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import { SettingsContext } from '../../../context/settings-context';

export default function Captcha() {
	const { settings, updateSetting } = useContext( SettingsContext );
	const reCaptcha = settings.reCaptcha;
	const hCaptcha = settings.hCaptcha;

	function setCaptcha( key, value, type ) {
		const newSettings = Object.assign( {}, settings[ type ] );
		newSettings[ key ] = value;
		updateSetting( type, newSettings );
	}

	return (
		<Fragment>
			<Card>
				<CardHeader>
					<h2>{ __( 'Google reCaptcha', 'formiflex' ) }</h2>
				</CardHeader>

				<CardBody>
					<VStack spacing="3">
						<RadioControl
							selected={ reCaptcha.version }
							options={ [
								{
									label: __( 'v2 checkbox', 'formiflex' ),
									value: 'checkbox',
								},
								{
									label: __( 'v3 invisible', 'formiflex' ),
									value: 'invisible',
								},
							] }
							onChange={ ( val ) => {
								setCaptcha( 'version', val, 'reCaptcha' );
							} }
						/>
						<TextControl
							label={ __( 'Site Key', 'formiflex' ) }
							value={ reCaptcha.site_key }
							onChange={ ( val ) => {
								setCaptcha( 'site_key', val, 'reCaptcha' );
							} }
							__nextHasNoMarginBottom
							__next40pxDefaultSize
						/>
						<TextControl
							label={ __( 'Secret Key', 'formiflex' ) }
							value={ reCaptcha.secret_key }
							onChange={ ( val ) => {
								setCaptcha( 'secret_key', val, 'reCaptcha' );
							} }
							__nextHasNoMarginBottom
							__next40pxDefaultSize
						/>
						{ 3 === Number( reCaptcha.version ) && (
							<TextControl
								label={ __( 'Threshold', 'formiflex' ) }
								value={ reCaptcha.threshold }
								onChange={ ( val ) => {
									setCaptcha( 'threshold', val, 'reCaptcha' );
								} }
								type="number"
								step={ '0.1' }
								min={ '0' }
								max={ '1' }
								__nextHasNoMarginBottom
								__next40pxDefaultSize
							/>
						) }
					</VStack>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<h2>{ __( 'hCaptcha', 'formiflex' ) }</h2>
				</CardHeader>

				<CardBody>
					<VStack spacing="3">
						<RadioControl
							selected={ hCaptcha?.version }
							options={ [
								{
									label: __( 'checkbox', 'formiflex' ),
									value: 'checkbox',
								},
								{
									label: __( 'invisible', 'formiflex' ),
									value: 'invisible',
								},
							] }
							onChange={ ( val ) => {
								setCaptcha( 'version', val, 'hCaptcha' );
							} }
						/>
						<TextControl
							label={ __( 'Site Key', 'formiflex' ) }
							value={ hCaptcha?.site_key }
							onChange={ ( val ) => {
								setCaptcha( 'site_key', val, 'hCaptcha' );
							} }
							__nextHasNoMarginBottom
							__next40pxDefaultSize
						/>
						<TextControl
							label={ __( 'Secret Key', 'formiflex' ) }
							value={ hCaptcha?.secret_key }
							onChange={ ( val ) => {
								setCaptcha( 'secret_key', val, 'hCaptcha' );
							} }
							__nextHasNoMarginBottom
							__next40pxDefaultSize
						/>
						<TextControl
							label={ __( 'Threshold', 'formiflex' ) }
							value={ reCaptcha.threshold }
							onChange={ ( val ) => {
								setCaptcha( 'threshold', val, 'hCaptcha' );
							} }
							type="number"
							step={ '0.1' }
							min={ '0' }
							max={ '1' }
							__nextHasNoMarginBottom
							__next40pxDefaultSize
						/>
					</VStack>
				</CardBody>
			</Card>
		</Fragment>
	);
}
