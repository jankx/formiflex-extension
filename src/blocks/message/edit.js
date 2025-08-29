import { __ } from '@wordpress/i18n';

import { ToggleControl, PanelBody } from '@wordpress/components';
import {
	InspectorControls,
	store as blockEditorStore,
	useInnerBlocksProps,
	useBlockProps,
	InnerBlocks,
	RichText,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

export default function Edit( { attributes, clientId, setAttributes } ) {
	const blockProps = useBlockProps( {
		className: 'success',
	} );

	const { hasInnerBlocks } = useSelect(
		( select ) => {
			const { getBlock } = select( blockEditorStore );
			const block = getBlock( clientId );
			return {
				hasInnerBlocks: !! ( block && block.innerBlocks.length ),
			};
		},
		[ clientId ]
	);

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		templateLock: false,
		renderAppender: hasInnerBlocks
			? null
			: InnerBlocks.DefaultBlockAppender,
	} );

	const [ formiflex ] = useEntityProp( 'root', 'site', 'formiflex' );

	return (
		<div { ...innerBlocksProps }>
			<RichText
				tagName="p"
				value={ attributes.text }
				onChange={ ( val ) => setAttributes( { text: val } ) }
				placeholder={ formiflex?.messages.form.success }
			/>
			{ children }
		</div>
	);
}
