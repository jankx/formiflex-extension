import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { noValidate, autoComplete, action } = attributes;
	return (
		<form
			method="post"
			{ ...useBlockProps.save() }
			noValidate={ noValidate || undefined }
			autoComplete={ autoComplete }
			action={ action }
		>
			<input type="hidden" name="_formiflex_id" />
			<input type="text" className="formiflex-hp" tabIndex="-1" />
			<input type="hidden" name="action" value="formiflex" />
			<InnerBlocks.Content />
		</form>
	);
}
