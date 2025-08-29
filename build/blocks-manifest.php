<?php
// This file is generated. Do not modify it manually.
return array(
	'button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/button',
		'title' => 'Button',
		'description' => 'A block to display form button.',
		'category' => 'formiflex',
		'icon' => 'button',
		'ancestor' => array(
			'formiflex/form'
		),
		'textdomain' => 'formiflex',
		'usesContext' => array(
			'formiflex/settings'
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'span',
				'default' => 'Submit'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'noWrapper' => array(
				'type' => 'boolean'
			),
			'type' => array(
				'type' => 'string',
				'default' => 'Loading'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => '#000000',
						'text' => '#ffffff'
					),
					'padding' => array(
						'top' => '10'
					)
				)
			)
		),
		'selectors' => array(
			'root' => '.wp-block-formiflex-button',
			'color' => array(
				'background' => '.wp-block-formiflex-button > button',
				'text' => '.wp-block-formiflex-button > button'
			),
			'typography' => array(
				'root' => '.wp-block-formiflex-button > button',
				'text-decoration' => '.wp-block-formiflex-button > button'
			)
		),
		'supports' => array(
			'html' => false,
			'lock' => false,
			'reusable' => false,
			'inserter' => true,
			'color' => array(
				'background' => true,
				'text' => true,
				'gradients' => true,
				'__experimentalSkipSerialization' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'__experimentalBorder' => array(
				'radius' => true,
				'width' => true,
				'color' => true,
				'style' => true
			),
			'typography' => array(
				'fontSize' => true
			)
		),
		'example' => array(
			'attributes' => array(
				'text' => 'Submit'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'fieldset' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/fieldset',
		'title' => 'Fieldset',
		'ancestor' => array(
			'formiflex/form'
		),
		'description' => 'A block to display form fieldset.',
		'category' => 'formiflex',
		'textdomain' => 'formiflex',
		'allowedBlocks' => array(
			'core/paragraph',
			'core/heading',
			'core/columns',
			'core/group',
			'core/separator',
			'formiflex/input',
			'formiflex/textarea',
			'formiflex/button',
			'formiflex/output',
			'formiflex/select',
			'formiflex/multichoices'
		),
		'attributes' => array(
			'showLegend' => array(
				'type' => 'boolean',
				'default' => true
			),
			'legend' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'legend',
				'default' => 'Legend'
			)
		),
		'supports' => array(
			'anchor' => true,
			'html' => false,
			'color' => array(
				'text' => true
			),
			'spacing' => array(
				'padding' => true
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true,
				'__experimentalDefaultControls' => array(
					'color' => true,
					'radius' => true,
					'style' => true,
					'width' => true
				)
			)
		),
		'example' => array(
			'attributes' => array(
				'legend' => 'Preferences'
			),
			'innerBlocks' => array(
				array(
					'name' => 'formiflex/input',
					'attributes' => array(
						'label' => 'Job'
					)
				),
				array(
					'name' => 'formiflex/textarea',
					'attributes' => array(
						'label' => 'Description'
					)
				)
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'form' => array(
		'$schema' => 'https://json.schemastore.org/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/form',
		'title' => 'Form',
		'description' => 'A block collection to build forms.',
		'category' => 'formiflex',
		'textdomain' => 'formiflex',
		'keywords' => array(
			'form',
			'forms',
			'formiflex'
		),
		'allowedBlocks' => array(
			'core/paragraph',
			'core/heading',
			'core/columns',
			'core/group',
			'core/separator',
			'formiflex/message',
			'formiflex/input',
			'formiflex/textarea',
			'formiflex/button',
			'formiflex/output',
			'formiflex/fieldset',
			'formiflex/select',
			'formiflex/multichoices'
		),
		'providesContext' => array(
			'formiflex/requiredText' => 'requiredText'
		),
		'attributes' => array(
			'action' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'form',
				'attribute' => 'action'
			),
			'requiredText' => array(
				'type' => 'string',
				'default' => '*'
			),
			'autoComplete' => array(
				'enum' => array(
					'on',
					'off'
				),
				'source' => 'attribute',
				'selector' => 'form',
				'attribute' => 'autocomplete'
			),
			'noValidate' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'form',
				'attribute' => 'novalidate',
				'default' => true
			)
		),
		'styles' => array(
			array(
				'name' => 'regular',
				'label' => 'Default',
				'isDefault' => true
			),
			array(
				'name' => 'modern',
				'label' => 'Modern'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'input' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/input',
		'title' => 'Text Input',
		'description' => 'A text input field',
		'ancestor' => array(
			'formiflex/form'
		),
		'usesContext' => array(
			'formiflex/requiredText'
		),
		'category' => 'formiflex',
		'textdomain' => 'formiflex',
		'attributes' => array(
			'type' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'type',
				'default' => 'text'
			),
			'id' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'id'
			),
			'name' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'name'
			),
			'label' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'label span:not(.required)',
				'default' => 'Label',
				'role' => 'content'
			),
			'hideLabel' => array(
				'type' => 'boolean',
				'selector' => 'label.hide',
				'default' => false
			),
			'placeholder' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'placeholder',
				'role' => 'content'
			),
			'value' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'value'
			),
			'validation' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'data-bouncer-message',
				'default' => ''
			),
			'enableMismatch' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mismatchMessage' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'data-bouncer-mismatch-message',
				'default' => ''
			),
			'match' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'data-bouncer-match'
			),
			'required' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'required',
				'default' => false
			),
			'requiredText' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'label span.required',
				'default' => '*'
			),
			'enableAutoComplete' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autocomplete' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'autocomplete',
				'default' => 'off'
			),
			'disabled' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'disabled',
				'default' => false
			),
			'readonly' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'readonly',
				'default' => false
			),
			'checked' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'checked',
				'default' => false
			),
			'multiple' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'multiple',
				'default' => false
			),
			'showHelp' => array(
				'type' => 'boolean',
				'default' => false
			),
			'help' => array(
				'type' => 'string',
				'default' => ''
			),
			'minlength' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'minlength'
			),
			'maxlength' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'maxlength'
			),
			'pattern' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'pattern'
			),
			'min' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'min'
			),
			'max' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'max'
			),
			'noWrapper' => array(
				'type' => 'boolean',
				'default' => false
			),
			'step' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'input',
				'attribute' => 'step'
			),
			'flatpickr' => array(
				'type' => 'object',
				'default' => array(
					'allowInput' => true
				)
			),
			'advanced' => array(
				'type' => 'boolean'
			)
		),
		'supports' => array(
			'lock' => false,
			'anchor' => false,
			'html' => false,
			'inserter' => true,
			'className' => true,
			'reusable' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'__experimentalSkipSerialization' => true,
				'__experimentalSelector' => 'input'
			),
			'spacing' => array(
				'padding' => true,
				'__experimentalSkipSerialization' => true
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true,
				'__experimentalSkipSerialization' => true,
				'__experimentalDefaultControls' => array(
					'color' => true,
					'radius' => true,
					'style' => true,
					'width' => true
				)
			)
		),
		'selectors' => array(
			'root' => '.wp-block-formiflex-input',
			'color' => array(
				'background' => '.wp-block-formiflex-input > input',
				'text' => '.wp-block-formiflex-input'
			),
			'spacing' => array(
				'root' => '.wp-block-formiflex-input',
				'padding' => '.wp-block-formiflex-input > input'
			),
			'border' => array(
				'root' => '.wp-block-formiflex-input > input'
			)
		),
		'example' => array(
			'attributes' => array(
				'label' => 'Name'
			)
		),
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	),
	'library' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/library',
		'title' => 'Form Library',
		'description' => 'A block to display or create forms.',
		'category' => 'formiflex',
		'textdomain' => 'formiflex',
		'attributes' => array(
			'ref' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'lock' => false,
			'reusable' => false,
			'inserter' => true,
			'interactivity' => true
		),
		'editorScript' => 'file:./index.js',
		'viewScriptModule' => 'file:./view.js'
	),
	'message' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/message',
		'title' => 'Message',
		'description' => 'Message for form submissions.',
		'category' => 'formiflex',
		'ancestor' => array(
			'formiflex/form'
		),
		'icon' => 'megaphone',
		'textdomain' => 'formiflex',
		'attributes' => array(
			'text' => array(
				'type' => 'string'
			),
			'background' => array(
				'type' => 'string',
				'default' => '#dedede'
			),
			'color' => array(
				'type' => 'string',
				'default' => ''
			),
			'errorBgColor' => array(
				'type' => 'string'
			),
			'customErrorBgColor' => array(
				'type' => 'string'
			),
			'errorTextColor' => array(
				'type' => 'string'
			),
			'customErrorTextColor' => array(
				'type' => 'string'
			)
		),
		'supports' => array(
			'interactivity' => true,
			'html' => false,
			'lock' => true,
			'reusable' => false,
			'inserter' => true,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => array(
					'top',
					'bottom'
				)
			),
			'__experimentalBorder' => array(
				'radius' => true,
				'width' => true,
				'color' => true,
				'style' => true
			),
			'typography' => array(
				'fontSize' => true
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'multichoices' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/multichoices',
		'title' => 'Multi choices',
		'ancestor' => array(
			'formiflex/form'
		),
		'category' => 'formiflex',
		'textdomain' => 'formiflex',
		'attributes' => array(
			'name' => array(
				'type' => 'string',
				'default' => 'my_choice',
				'role' => 'content'
			),
			'type' => array(
				'enum' => array(
					'radio',
					'checkbox'
				),
				'default' => 'checkbox'
			),
			'required' => array(
				'type' => 'boolean'
			),
			'options' => array(
				'type' => 'array',
				'source' => 'query',
				'selector' => 'div.wp-block-formiflex-input',
				'query' => array(
					'value' => array(
						'type' => 'string',
						'selector' => 'input',
						'source' => 'attribute',
						'attribute' => 'value'
					),
					'label' => array(
						'type' => 'string',
						'selector' => 'label',
						'source' => 'html'
					),
					'selected' => array(
						'type' => 'boolean',
						'selector' => 'input',
						'source' => 'attribute',
						'attribute' => 'checked'
					)
				),
				'default' => array(
					array(
						'value' => '1',
						'label' => 'One'
					),
					array(
						'value' => '2',
						'label' => 'Two'
					),
					array(
						'value' => '3',
						'label' => 'Three'
					)
				)
			)
		),
		'supports' => array(
			'anchor' => true,
			'html' => false,
			'spacing' => array(
				'padding' => true,
				'blockGap' => true
			),
			'inserter' => true,
			'__experimentalBorder' => true,
			'layout' => array(
				'allowSwitching' => true,
				'allowInheriting' => false,
				'allowSizingOnChildren' => false,
				'allowEditing' => true,
				'allowCustomContentAndWideSize' => false,
				'allowJustification' => false,
				'default' => array(
					'type' => 'flex',
					'justifyContent' => 'stretch',
					'orientation' => 'vertical',
					'flexWrap' => 'nowrap'
				)
			)
		),
		'example' => array(
			'attributes' => array(
				'options' => array(
					array(
						'label' => 'Windows'
					),
					array(
						'label' => 'MacOS'
					),
					array(
						'label' => 'Linux'
					)
				)
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'output' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/output',
		'title' => 'Output',
		'description' => 'A block to display number output.',
		'category' => 'formiflex',
		'ancestor' => array(
			'formiflex/form'
		),
		'icon' => 'number',
		'textdomain' => 'formiflex',
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'span',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'lock' => false,
			'reusable' => false,
			'inserter' => true,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => array(
					'left',
					'right'
				),
				'margin' => array(
					'left',
					'right'
				)
			),
			'__experimentalBorder' => array(
				'radius' => true,
				'width' => true,
				'color' => true,
				'style' => true
			),
			'typography' => array(
				'fontSize' => true
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'select' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/select',
		'title' => 'Select',
		'ancestor' => array(
			'formiflex/form'
		),
		'usesContext' => array(
			'formiflex/requiredText'
		),
		'description' => 'Dropdown select.',
		'category' => 'formiflex',
		'textdomain' => 'formiflex',
		'attributes' => array(
			'id' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'select',
				'attribute' => 'id'
			),
			'name' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'select',
				'attribute' => 'name',
				'default' => ''
			),
			'label' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'label span:not(.required)',
				'default' => 'My input'
			),
			'hideLabel' => array(
				'type' => 'boolean',
				'selector' => 'label.hide',
				'default' => false
			),
			'options' => array(
				'type' => 'array',
				'source' => 'query',
				'selector' => 'option',
				'query' => array(
					'value' => array(
						'type' => 'string',
						'source' => 'attribute',
						'attribute' => 'value'
					),
					'label' => array(
						'type' => 'string',
						'source' => 'text'
					),
					'selected' => array(
						'type' => 'boolean',
						'source' => 'attribute',
						'attribute' => 'selected'
					)
				),
				'default' => array(
					array(
						'value' => '',
						'label' => 'Select an option'
					),
					array(
						'value' => '1',
						'label' => 'One'
					),
					array(
						'value' => '2',
						'label' => 'Two'
					),
					array(
						'value' => '3',
						'label' => 'Three'
					)
				)
			),
			'multiple' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'select',
				'attribute' => 'multiple'
			),
			'required' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'select',
				'attribute' => 'required'
			),
			'requiredText' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'label span.required',
				'default' => '*'
			),
			'disabled' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'select',
				'attribute' => 'disabled'
			),
			'readonly' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'select',
				'attribute' => 'readonly'
			),
			'showHelp' => array(
				'type' => 'boolean',
				'default' => false
			),
			'help' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'small',
				'default' => ''
			),
			'advanced' => array(
				'type' => 'boolean'
			)
		),
		'supports' => array(
			'html' => false,
			'reusable' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'__experimentalSkipSerialization' => true
			),
			'spacing' => array(
				'padding' => true,
				'__experimentalSkipSerialization' => true
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true,
				'__experimentalSkipSerialization' => true,
				'__experimentalDefaultControls' => array(
					'color' => true,
					'radius' => true,
					'style' => true,
					'width' => true
				)
			)
		),
		'selectors' => array(
			'root' => '.wp-block-formiflex-select',
			'color' => array(
				'background' => '.wp-block-formiflex-select > select',
				'text' => '.wp-block-formiflex-select'
			),
			'spacing' => array(
				'root' => '.wp-block-formiflex-select',
				'padding' => '.wp-block-formiflex-select > select'
			),
			'border' => array(
				'root' => '.wp-block-formiflex-select > select'
			)
		),
		'example' => array(
			'attributes' => array(
				'label' => 'Your OS',
				'options' => array(
					array(
						'label' => 'Windows'
					),
					array(
						'label' => 'MacOS'
					),
					array(
						'label' => 'Linux'
					)
				)
			)
		),
		'style' => 'file:./style-index.css',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	),
	'textarea' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'formiflex/textarea',
		'title' => 'Textarea',
		'ancestor' => array(
			'formiflex/form'
		),
		'usesContext' => array(
			'formiflex/requiredText'
		),
		'description' => 'Textarea field.',
		'category' => 'formiflex',
		'textdomain' => 'formiflex',
		'attributes' => array(
			'id' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'id'
			),
			'name' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'name'
			),
			'label' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'label span:not(.required)',
				'default' => 'My textarea'
			),
			'hideLabel' => array(
				'type' => 'boolean',
				'selector' => 'label.hide',
				'default' => false
			),
			'placeholder' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'placeholder',
				'default' => ''
			),
			'value' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'textarea',
				'default' => ''
			),
			'validation' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'data-bouncer-message',
				'default' => ''
			),
			'enableMismatch' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mismatchMessage' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'data-bouncer-mismatch-message',
				'default' => ''
			),
			'match' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'data-bouncer-match',
				'default' => ''
			),
			'required' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'required',
				'default' => false
			),
			'autocomplete' => array(
				'enum' => array(
					'on',
					'off'
				),
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'autocomplete',
				'default' => 'off'
			),
			'requiredText' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'label span.required',
				'default' => '*'
			),
			'disabled' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'disabled',
				'default' => false
			),
			'readonly' => array(
				'type' => 'boolean',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'readonly',
				'default' => false
			),
			'showHelp' => array(
				'type' => 'boolean',
				'default' => false
			),
			'help' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'small',
				'default' => ''
			),
			'cols' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'cols'
			),
			'rows' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'rows'
			),
			'minlength' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'minlength'
			),
			'maxlength' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'maxlength'
			),
			'pattern' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'textarea',
				'attribute' => 'pattern'
			),
			'advanced' => array(
				'type' => 'boolean',
				'selector' => 'textarea.formiflex-rft'
			)
		),
		'supports' => array(
			'html' => false,
			'inserter' => true,
			'reusable' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'__experimentalSkipSerialization' => true
			),
			'spacing' => array(
				'padding' => true,
				'__experimentalSkipSerialization' => true
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true,
				'__experimentalSkipSerialization' => true,
				'__experimentalDefaultControls' => array(
					'color' => true,
					'radius' => true,
					'style' => true,
					'width' => true
				)
			)
		),
		'selectors' => array(
			'root' => '.wp-block-formiflex-textarea',
			'color' => array(
				'background' => '.wp-block-formiflex-textarea > textarea',
				'text' => '.wp-block-formiflex-textarea'
			),
			'spacing' => array(
				'root' => '.wp-block-formiflex-textarea',
				'padding' => '.wp-block-formiflex-textarea > textarea'
			),
			'border' => array(
				'root' => '.wp-block-formiflex-textarea > textarea'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
