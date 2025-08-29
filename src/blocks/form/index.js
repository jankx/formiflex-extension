import variations from './variations';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import metadata from './block.json';
import { Form } from '../../icons/icons';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { dispatch } from '@wordpress/data';

import './style.scss';
import './editor.scss';

registerBlockType( metadata, {
	icon: Form,
	variations,
	supports: {
		reusable: false,
		html: false,
		lock: false,
		anchor: true,
		color: true,
		interactivity: true,
		inserter: 'formiflex_form' === window.pagenow ? true : false,
		multiple: 'formiflex_form' !== window.pagenow ? true : false,
		spacing: {
			padding: true,
		},
		typography: {
			fontSize: true,
			__experimentalFontWeight: true,
			__experimentalTextDecoration: false,
		},
	},
	example: {
		innerBlocks: [
			{
				name: 'formiflex/input',
				attributes: {
					/* translators: example text. */
					label: __( 'Name' ),
				},
			},
			{
				name: 'formiflex/input',
				attributes: {
					label: 'Email',
				},
			},
			{
				name: 'formiflex/input',
				attributes: {
					/* translators: example text. */
					label: __( 'Message' ),
					type: 'textarea',
				},
			},
			{
				name: 'formiflex/button',
				attributes: {
					/* translators: example text. */
					text: __( 'Submit' ),
				},
			},
		],
	},
	deprecated,
	edit,
	save,
} );

document.addEventListener( 'DOMContentLoaded', function () {
	if ( 'formiflex_form' === window.pagenow ) {
		// Your code to run since DOM is loaded and ready
		const menuRoot = document.querySelector( '#toplevel_page_formiflex' );
		menuRoot.classList.remove( 'wp-not-current-submenu' );
		menuRoot.classList.add(
			'wp-has-current-submenu',
			'wp-menu-open',
			'current'
		);
		menuRoot.querySelector( '.wp-first-item' ).classList.add( 'current' );
	}
} );

dispatch( 'core' ).addEntities( [
	{
		label: __( 'Formiflex submissions', 'formiflex' ),
		kind: 'formiflex/v1',
		name: 'submissions',
		baseURL: '/formiflex/v1/submissions',
		supportsPagination: true,
	},
	{
		label: __( 'Formiflex addons', 'formiflex' ),
		kind: 'formiflex/v1',
		name: 'addons',
		baseURL: '/formiflex/v1/addons',
	},
	{
		label: __( 'Formiflex columns', 'formiflex' ),
		kind: 'formiflex/v1',
		name: 'columns',
		baseURL: '/formiflex/v1/columns',
	},
	{
		label: __( 'Formiflex patterns', 'formiflex' ),
		kind: 'formiflex/v1',
		name: 'patterns',
		baseURL: '/formiflex/v1/patterns',
	},
] );
