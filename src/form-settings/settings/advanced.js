import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { ToggleControl } from '@wordpress/components';

export function AdvancedSettings() {
	const { postType, postId } = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );
		return {
			postType: select( 'core/editor' ).getCurrentPostType(),
			postId: select( 'core/editor' ).getCurrentPostId(),
			isPreview: getSettings().IsPreviewMode,
		};
	}, [] );

	const [ meta, setMeta ] = useEntityProp(
		'postType',
		postType,
		'meta',
		postId
	);

	if ( ! meta._formiflex_settings ) {
		return <></>;
	}

	const { enableJsValidation, debug } = meta._formiflex_settings;

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
				label={ __( 'Enable Js validation', 'formiflex' ) }
				checked={ enableJsValidation }
				onChange={ ( val ) => {
					setOptions( 'enableJsValidation', val );
				} }
				__nextHasNoMarginBottom
			/>
			<ToggleControl
				label={ __( 'Enable debug', 'formiflex' ) }
				checked={ debug }
				onChange={ ( val ) => {
					setOptions( 'debug', val );
				} }
				__nextHasNoMarginBottom
			/>
		</Fragment>
	);
}
