import { __ } from '@wordpress/i18n';

import { ToggleControl, PanelBody } from '@wordpress/components';
import {
	InspectorControls,
	RichText,
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';

export default function Edit( { attributes, className, setAttributes } ) {
	const blockProps = useBlockProps();

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		templateLock: false,
	} );

	return (
		<fieldset { ...innerBlocksProps }>
			<InspectorControls>
				<PanelBody
					title={ __( 'Options', 'formiflex' ) }
					initialOpen={ true }
				>
					<ToggleControl
						label={ __( 'Show Legend', 'formiflex' ) }
						checked={ attributes.showLegend }
						onChange={ ( newval ) =>
							setAttributes( { showLegend: newval } )
						}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
			{ attributes.showLegend && (
				<RichText
					tagName="legend"
					className={ className }
					value={ attributes.legend }
					onChange={ ( legend ) => setAttributes( { legend } ) }
					placeholder={ __( 'Enter legend…', 'formiflex' ) }
					allowedFormats={ [] }
				/>
			) }

			{ children }
		</fieldset>
	);
}
