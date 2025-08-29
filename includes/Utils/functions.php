<?php
/**
 * Utility functions
 *
 * @package formiflex
 * @since   1.0.0
 */

namespace Formiflex\Utils;

defined( 'ABSPATH' ) || exit;

error_log('Formiflex: Utils/functions.php loaded');

/**
 * Get default options
 *
 * @return array Default options.
 */
function formiflex_default_options() {
	$defaults = array(
		'ip_logging'     => false,
		'log'            => false,
		'log_file'       => 'formiflex_' . time() . '.log',
		'license'        => array(),
		'version'        => get_option( 'formiflex_version', '1.0.0' ),
		'messages'       => array(
			'form'            => array(
				'success' => __( 'Thanks for submitting this form.', 'formiflex' ),
				'error'   => __( 'Ops. An error occurred.', 'formiflex' ),
			),
			'missingValue'    => array(
				'default'         => __( 'Please fill out this field.', 'formiflex' ),
				'checkbox'        => __( 'This field is required.', 'formiflex' ),
				'radio'           => __( 'Please select a value.', 'formiflex' ),
				'select'          => __( 'Please select a value.', 'formiflex' ),
				'select-multiple' => __( 'Please select at least one value.', 'formiflex' ),
			),
			'patternMismatch' => array(
				'email'   => __( 'Please enter a valid email address.', 'formiflex' ),
				'url'     => __( 'Please enter a URL.', 'formiflex' ),
				'number'  => __( 'Please enter a number', 'formiflex' ),
				'color'   => __( 'Please match the following format: #rrggbb', 'formiflex' ),
				'date'    => __( 'Please use the YYYY-MM-DD format', 'formiflex' ),
				'time'    => __( 'Please use the 24-hour time format. Ex. 23:00', 'formiflex' ),
				'month'   => __( 'Please use the YYYY-MM format', 'formiflex' ),
				'default' => __( 'Please match the requested format.', 'formiflex' ),
			),
			'outOfRange'      => array(
				'over'  => __( 'Please select a value that is no more than {max}.', 'formiflex' ),
				'under' => __( 'Please select a value that is no less than {min}.', 'formiflex' ),
			),
			'wrongLength'     => array(
				'over'  => __( 'Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.', 'formiflex' ),
				'under' => __( 'Please lengthen this text to {minLength} characters or more. You are currently using {length} characters.', 'formiflex' ),
			),
		),
		'captcha'        => false,
		'reCaptcha'      => array(
			'version'    => '3',
			'site_key'   => '',
			'secret_key' => '',
			'threshold'  => 0.5,
		),
		'hCaptcha'      => array(
			'version'    => '3',
			'site_key'   => '',
			'secret_key' => '',
			'threshold'  => 0.5,
		),
		'enabled_addons' => array(),
	);
	return $defaults;
}

/**
 * Function to retrieve unencrypted settings
 */
function formiflex_frontend_options() {
	$settings = get_option( 'formiflex', formiflex_default_options() );

	$frontend_settings = array(
		'messages'  => $settings['messages'],
		'reCaptcha'      => array(
			'version'    => $settings['reCaptcha']['version'],
			'site_key'   => $settings['reCaptcha']['site_key'],
			'threshold'  => $settings['reCaptcha']['threshold'],
		),
		'hCaptcha'      => array(
			'version'    => $settings['hCaptcha']['version'],
			'site_key'   => $settings['hCaptcha']['site_key'],
			'threshold'  => $settings['hCaptcha']['threshold'],
		),
	);

	return maybe_unserialize( $frontend_settings );
}

/**
 * Undocumented function
 *
 * @param int $id The form ID.
 * @return array
 */
function formiflex_form_context( $id ) {
	$form_context = get_post_meta( $id, '_formiflex_settings', true );

	unset( $form_context['actions'] );
	unset( $form_context['fields'] );
	unset( $form_context['constraints'] );

	return $form_context;
}

/**
 * Function to retrieve unencrypted settings
 *
 * @param mixed $settings The general settings.
 */
function formiflex_decrypt_option( $settings ) {
	if ( is_array( $settings ) ) {
		return $settings;
	}
	$crypto = new Encryption();

	$settings = $crypto->decrypt( $settings );

	$settings = apply_filters( 'formiflex_settings', $settings );

	$settings = maybe_unserialize( $settings );

	if ( $settings['license'] && ! is_array( $settings['license'] ) ) {
		$settings['license'] = array();
	}

	unset( $settings['license_status'] );

	return maybe_unserialize( $settings );
}

/**
 * Function to retrieve unencrypted settings
 *
 * @param mixed $settings The general settings.
 */
function formiflex_encrypt_option( $settings ) {
	$crypto = new Encryption();

	return $crypto->encrypt( maybe_serialize( $settings ) );
}

/**
 * Recursive sanitation for an array
 *
 * @param mixed $my_array the array of data.
 *
 * @return mixed
 */
function recursive_sanitize_text_field( $my_array ) {
	if ( ! is_array( $my_array ) ) {
		return sanitize_text_field( $my_array );
	}
	foreach ( $my_array as $key => &$value ) {
		if ( is_array( $value ) ) {
			$value = recursive_sanitize_text_field( $value );
		} elseif ( ! is_bool( $value ) ) {
			$value = sanitize_text_field( $value );
		}
	}
	return $my_array;
}

/**
 * Limit the blocks allowed in Gutenberg.
 *
 * @param mixed $allowed_blocks Array of allowable blocks for Gutenberg Editor.
 * @param mixed $editor_context Editor context.
 *
 * @return mixed $allowed_blocks Returns the allowed blocks.
 * */
function formiflex_allowed_blocks( $allowed_blocks, $editor_context ) {
	if ( ! $editor_context->post ) {
		return $allowed_blocks;
	}

	if ( 'formiflex_form' === $editor_context->post->post_type ) {
		$allowed_blocks = array(
			'formiflex/form',
			'formiflex/button',
			'formiflex/output',
			'formiflex/input',
			'formiflex/textarea',
			'formiflex/select',
			'formiflex/fieldset',
			'formiflex/multichoices',
			'formiflex/output',
			'formiflex/message',
			'core/image',
			'core/spacer',
			'core/separator',
			'core/paragraph',
			'core/heading',
			'core/group',
			'core/columns',
			'core/column',
			'core/list',
		);

		return apply_filters( 'formiflex_allowed_blocks', $allowed_blocks );
	}
	return $allowed_blocks;
}

/**
 * Retrieve the formiflex dir.
 *
 * @since 1.4.0
 */
function formiflex_dir() {
	$upload_dir   = wp_upload_dir();
	$formiflex_dir = $upload_dir['basedir'] . DIRECTORY_SEPARATOR . 'formiflex';
	if ( ! is_dir( $formiflex_dir ) ) {
		wp_mkdir_p( $formiflex_dir );
	}
	return trailingslashit( $formiflex_dir );
}

/**
 * Retrieve the formiflex dir.
 *
 * @since 1.4.0
 */
function formiflex_dir_url() {
	$upload_dir = wp_upload_dir();
	return $upload_dir['baseurl'] . '/formiflex';
}

/**
 * Add schedule time.
 *
 * @param array $schedules The schedule settings.
 * @since 1.4.0
 */
function formiflex_cron_schedules( $schedules ) {
	if ( ! isset( $schedules['5min'] ) ) {
		$schedules['5min'] = array(
			'interval' => 5 * 60,
			'display'  => __( 'Once every 5 minutes', 'formiflex' ),
		);
	}
	if ( ! isset( $schedules['30min'] ) ) {
		$schedules['30min'] = array(
			'interval' => 30 * 60,
			'display'  => __( 'Once every 30 minutes', 'formiflex' ),
		);
	}
	return $schedules;
}

/**
 * Allow upload of json for form importing.
 *
 * @param array $mimes The mimes.
 */
function formiflex_custom_mime_types( $mimes ) {

	// New allowed mime types.
	$mimes['json'] = 'application/json';

	return $mimes;
}

/**
 * Allow upload of json for form importing.
 */
function add_submissions_count() {

	$key = 'formiflex-submissions-count';
	$query = wp_cache_get( $key, 'formiflex' );
	if ( empty( $query ) ) {

		global $wpdb;

		$results = $wpdb->get_results(
			$wpdb->prepare(
				'SELECT
					form_id,
					count(*) AS total,
					SUM( is_new = 1 ) AS news
				FROM %i
				GROUP BY form_id',
				array( "{$wpdb->prefix}formiflex_submissions" )
			),
			ARRAY_A
		);

		wp_cache_set( $key, $results, 'formiflex', 3600 );
	}

	register_rest_field(
		'formiflex_form',
		'submissions_count',
		array(
			'get_callback' => function ( $form ) {
				$key = 'formiflex-submissions-count';
				$query = wp_cache_get( $key, 'formiflex' );
				$total = array_column( $query, 'total', 'form_id' );
				$news = array_column( $query, 'news', 'form_id' );

				return array(
					'total' => isset( $total[ $form['id'] ] ) ? (int) $total[ $form['id'] ] : 0,
					'news' => isset( $news[ $form['id'] ] ) ? (int) $news[ $form['id'] ] : 0,
				);
			},
			'schema'       => array(
				'description' => 'List number of submissions attached to this form.',
				'type'                 => 'object',
				// In JSON Schema you can specify object properties in the properties attribute.
				'properties'           => array(
					'total' => array(
						'type'         => 'integer',
						'context'      => array( 'view', 'edit', 'embed' ),
						'readonly'     => true,
					),
					'news' => array(
						'type'         => 'integer',
						'context'      => array( 'view', 'edit', 'embed' ),
						'readonly'     => true,
					),
				),
			),
		)
	);
}

/**
 * Redirect CPT page to Popper page
 *
 * @return void
 */
function redirect_post_type() {
	$screen = get_current_screen();
	if ( 'edit-formiflex_form' === $screen->id ) {
		wp_safe_redirect( 'admin.php?page=formiflex' );
		exit;
	}
}

// phpcs:ignore.
add_filter( 'cron_schedules', __NAMESPACE__ . '\formiflex_cron_schedules' );
add_filter( 'option_formiflex', __NAMESPACE__ . '\formiflex_decrypt_option', 5 );
add_filter( 'pre_update_option_formiflex', __NAMESPACE__ . '\formiflex_encrypt_option' );
add_filter( 'allowed_block_types_all', __NAMESPACE__ . '\formiflex_allowed_blocks', 10, 2 );
add_filter( 'upload_mimes', __NAMESPACE__ . '\formiflex_custom_mime_types', 10 );
add_action( 'rest_api_init', __NAMESPACE__ . '\add_submissions_count', 10, 2 );
add_action( 'load-edit.php', __NAMESPACE__ . '\redirect_post_type' );
