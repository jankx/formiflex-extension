<?php
/**
 * Register the form CPT
 *
 * @package formiflex
 * @since   1.0.0
 */

namespace Formiflex\Utils;

defined( 'ABSPATH' ) || exit;

error_log('Formiflex: Utils/register-cpt.php loaded');

/**
 * Register Formiflex Forms CPT
 *
 * @since 1.0.0
 */
function register_cpt() {
	error_log('Formiflex: register_cpt() called');

	$args = array(
		'labels' => array(
			'name'                => __( 'Forms', 'formiflex' ),
			'singular_name'       => __( 'Form', 'formiflex' ),
			'menu_name'           => __( 'Forms', 'formiflex' ),
			'parent_item_colon'   => __( 'Parent Form', 'formiflex' ),
			'all_items'           => __( 'Forms', 'formiflex' ),
			'view_item'           => __( 'View Form', 'formiflex' ),
			'add_new_item'        => __( 'Add New', 'formiflex' ),
			'add_new'             => __( 'Add New', 'formiflex' ),
			'edit_item'           => __( 'Edit Form', 'formiflex' ),
			'update_item'         => __( 'Update Form', 'formiflex' ),
			'search_items'        => __( 'Search Form', 'formiflex' ),
			'not_found'           => __( 'Not Found', 'formiflex' ),
			'not_found_in_trash'  => __( 'Not found in Trash', 'formiflex' ),
		),
		'public'              => false,
		'publicly_queryable'  => false,
		'capability_type'     => 'post',
		'has_archive'         => false,
		'show_ui'             => true,
		'menu_icon'           => 'dashicons-feedback',
		'exclude_from_search' => true,
		'show_in_nav_menus'   => true,
		'rewrite'             => false,
		'hierarchical'        => false,
		'show_in_menu'        => false,
		'show_in_admin_bar'   => true,
		'show_in_rest'        => true,
		'template'            => array(
			array(
				'formiflex/form',
				array(
					'lock' => array(
						'move'   => false,
						'remove' => true,
					),
				),
			),
		),
		'supports'            => array(
			'author',
			'title',
			'editor',
			'excerpt',
			'custom-fields',
			'revisions',
		),
	);
	error_log('Formiflex: Registering post type formiflex_form');
	register_post_type( 'formiflex_form', $args );
	error_log('Formiflex: Post type formiflex_form registered');
}

/**
 * Register Formiflex Forms CPT
 *
 * @since 1.0.0
 */
function register_cpt_meta() {

	$defaults = array(
		'storeSubmissions' => true,
		'captchaEnabled' => false,
		'captchaType' => '',
		'enableJsValidation' => true,
		'hide' => false,
		'debug' => false,
		'redirectUrl' => '',
		'actions' => array(),
		'constraints' => array(),
		'fields' => array(),
	);

	register_post_meta(
		'formiflex_form',
		'_formiflex_settings',
		array(
			'show_in_rest' => array(
				'schema' => array(
					'type' => 'object',
					'additionalProperties' => true,
				),
			),
			'default' => $defaults,
			'single' => true,
			'type' => 'object',
			'auth_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	register_post_meta(
		'formiflex_form',
		'_formiflex_actions',
		array(
			'show_in_rest' => array(
				'schema' => array(
					'items' => array(
						'type' => 'object',
						'properties' => array(),
						'additionalProperties' => true,
					),
				),
			),
			'default' => array(
				array(
					'async' => true,
					'type' => 'email',
					'name' => 'Email',
					'to' => '{{wp.admin_email}}',
					'from' => '{{wp.admin_email}}',
					'cc' => '',
					'bcc' => '',
					'replyTo' => '',
					'subject' => __( '[Formiflex] New form submission', 'formiflex' ),
					'message' => '{{fields.all_data}}',
					'advanced' => false,
					'id' => 1,
				),
			),
			'single' => true,
			'type' => 'array',
			'additionalProperties' => true,
			'auth_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);
}

add_action( 'init', __NAMESPACE__ . '\register_cpt' );
add_action( 'init', __NAMESPACE__ . '\register_cpt_meta' );
