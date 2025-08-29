import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

import {
	ToggleControl,
	TextControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';

import { Fragment } from '@wordpress/element';
import MergeTags from '../merge-tags';

import { SUPPORTED_ATTRIBUTES } from './constants';
import DatepickerSettings from './date';

import { getPatternTabs, serializeFieldsName } from '../merge-tags/functions';

function ValidationOptions( props ) {
	const {
		attributes: {
			type,
			min,
			max,
			advanced,
			step,
			minlength,
			maxlength,
			validation,
			enableMismatch,
			pattern,
			match,
			mismatchMessage,
		},
		setAttributes,
		clientId,
	} = props;

	const supported = SUPPORTED_ATTRIBUTES[ type ?? 'textarea' ];

	if ( 'checkbox' === type || 'email' === type ) {
		return null;
	}

	const fields = serializeFieldsName();

	const tabs = getPatternTabs();

	return (
		<PanelBody
			title={ __( 'Validation', 'formiflex' ) }
			initialOpen={ false }
		>
			{ ( 'date' === type || 'time' === type ) && (
				<DatepickerSettings { ...props } />
			) }

			{ applyFilters( 'formiflex.Validation', '', props ) }

			{ supported.includes( 'step' ) && ! advanced && (
				<Fragment>
					<TextControl
						label={ __( 'Min Value', 'formiflex' ) }
						value={ min || '' }
						min={ '0' }
						type={ 'range' === type ? 'number' : type }
						onChange={ ( val ) => {
							setAttributes( { min: val } );
						} }
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
					<TextControl
						label={ __( 'Max Value', 'formiflex' ) }
						value={ max || '' }
						type={ 'range' === type ? 'number' : type }
						min={ '0' }
						onChange={ ( val ) => {
							setAttributes( { max: val } );
						} }
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
					<TextControl
						type="number"
						label={ __( 'Step Value', 'formiflex' ) }
						value={ step || '' }
						onChange={ ( val ) =>
							setAttributes( { step: Number( val ) } )
						}
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
				</Fragment>
			) }
			{ supported.includes( 'minlength' ) && (
				<Fragment>
					<TextControl
						type="number"
						label={ __( 'Min Characters', 'formiflex' ) }
						value={ minlength }
						min={ '0' }
						onChange={ ( val ) =>
							setAttributes( { minlength: val } )
						}
						help={ __(
							'Minimum length (number of characters) of value.',
							'formiflex'
						) }
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
					<TextControl
						type="number"
						label={ __( 'Max Characters', 'formiflex' ) }
						value={ maxlength }
						onChange={ ( val ) =>
							setAttributes( { maxlength: val } )
						}
						help={ __(
							'Maximum length (number of characters) of value.',
							'formiflex'
						) }
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
				</Fragment>
			) }
			{ supported.includes( 'pattern' ) && (
				<Fragment>
					<MergeTags
						label={ 'Pattern' }
						clientId={ clientId }
						tabs={ tabs }
						value={ pattern }
						onChange={ ( val ) => {
							setAttributes( { pattern: val } );
						} }
						help={ __(
							'Pattern the value must match to be valid.',
							'formiflex'
						) }
					/>
					<TextControl
						label={ __( 'Custom Validation Message', 'formiflex' ) }
						help={ __(
							'The message to show if pattern validation fails.',
							'formiflex'
						) }
						value={ validation }
						onChange={ ( val ) =>
							setAttributes( { validation: val } )
						}
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
				</Fragment>
			) }
			{ supported.includes( 'mismatch' ) && (
				<Fragment>
					<ToggleControl
						label={ __( 'Enable match field', 'formiflex' ) }
						checked={ enableMismatch }
						onChange={ ( newval ) =>
							setAttributes( { enableMismatch: newval } )
						}
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
					{ enableMismatch && (
						<Fragment>
							<SelectControl
								label={ __( 'Match', 'formiflex' ) }
								value={ match }
								options={ [
									{
										value: '',
										label: __(
											'Select a field',
											'formiflex'
										),
									},
									...fields,
								] }
								onChange={ ( val ) =>
									setAttributes( { match: val } )
								}
								help={ __(
									'Select the field to match.',
									'formiflex'
								) }
								__nextHasNoMarginBottom
								__next40pxDefaultSize
							/>
							<TextControl
								type="text"
								label={ __( 'Mismatch message', 'formiflex' ) }
								value={ mismatchMessage || '' }
								onChange={ ( val ) =>
									setAttributes( { mismatchMessage: val } )
								}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
							/>
						</Fragment>
					) }
				</Fragment>
			) }
		</PanelBody>
	);
}

export default ValidationOptions;
