import { __, sprintf } from '@wordpress/i18n';

import { RawHTML, Fragment } from '@wordpress/element';
import { useEntityProp } from '@wordpress/core-data';
import {
	SelectControl,
	ToggleControl,
	Notice,
	BaseControl,
	__experimentalDivider as Divider,
} from '@wordpress/components';
import { addQueryArgs } from '@wordpress/url';
import { useSelect } from '@wordpress/data';
import { URLInput } from '@wordpress/block-editor';

export function Settings() {
	const { postType, postId } = useSelect( ( select ) => {
		return {
			postType: select( 'core/editor' ).getCurrentPostType(),
			postId: select( 'core/editor' ).getCurrentPostId(),
		};
	}, [] );

	const [ formiflex ] = useEntityProp( 'root', 'site', 'formiflex' );
	const [ meta, setMeta ] = useEntityProp(
		'postType',
		postType,
		'meta',
		postId
	);

	if ( ! meta._formiflex_settings ) {
		return <></>;
	}

	const { storeSubmissions, captchaEnabled, captchaType, hide, redirectUrl } =
		meta._formiflex_settings;

	const settingsUrl = addQueryArgs( 'admin.php', {
		tab: 'captcha',
		page: 'formiflex-settings',
	} );

	const setOptions = ( key, val ) => {
		setMeta( {
			...meta,
			_formiflex_settings: {
				...meta._formiflex_settings,
				[ key ]: val,
			},
		} );
	};

	return (
		<Fragment>
			<ToggleControl
				label={ __( 'Store submissions', 'formiflex' ) }
				checked={ storeSubmissions }
				onChange={ ( val ) => {
					setOptions( 'storeSubmissions', val );
				} }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Enable Captcha', 'formiflex' ) }
				checked={ captchaEnabled }
				onChange={ ( val ) => {
					setOptions( 'captchaEnabled', val );
				} }
				__nextHasNoMarginBottom
			/>
			{ captchaEnabled && (
				<SelectControl
					label={ __( 'Captcha service', 'formiflex' ) }
					value={ captchaType }
					options={ [
						{ label: __( 'Select a captcha type' ) },
						{ label: 'reCaptcha', value: 'reCaptcha' },
						{ label: 'hCaptcha', value: 'hCaptcha' },
					] }
					onChange={ ( val ) => setOptions( 'captchaType', val ) }
					__nextHasNoMarginBottom
				/>
			) }

			{ ( '' === formiflex?.[ captchaType ]?.site_key ||
				'' === formiflex?.[ captchaType ]?.secret_key ) &&
				captchaEnabled && (
					<Notice
						status="warning"
						isDismissible={ false }
						className={ 'formiflex-notice' }
					>
						<RawHTML>
							{ sprintf(
								/* translators: Url of settings page. */
								__(
									'Please be sure to add a %1$s API key on %2$s',
									'formiflex'
								),
								captchaType,
								`<a href="${ settingsUrl }">settings page</a>`
							) }
						</RawHTML>
					</Notice>
				) }
			<Divider />
			<ToggleControl
				label={ __( 'Hide form after submission', 'formiflex' ) }
				checked={ hide }
				onChange={ ( val ) => {
					setOptions( 'hide', val );
				} }
				__nextHasNoMarginBottom
			/>
			<BaseControl
				help={ __(
					'Enter a URL you want to redirect your page to after form Submission',
					'formiflex'
				) }
				__nextHasNoMarginBottom
			>
				<URLInput
					label={ __( 'Redirect Url', 'formiflex' ) }
					value={ redirectUrl }
					onChange={ ( newURL ) =>
						setOptions( 'redirectUrl', newURL )
					}
					className={ 'formiflex-urlinput' }
					__nextHasNoMarginBottom
				/>
			</BaseControl>
		</Fragment>
	);
}
