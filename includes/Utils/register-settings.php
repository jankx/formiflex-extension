<?php
/**
 * Register the plugin settings
 *
 * @package formiflex
 * @since   1.0.0
 */

namespace Formiflex\Utils;

use function Formiflex\Utils\recursive_sanitize_text_field;
use function Formiflex\Utils\formiflex_dir_url;
use function Formiflex\Utils\formiflex_default_options;

defined( 'ABSPATH' ) || exit;

error_log('Formiflex: Utils/register-settings.php loaded');

/**
 * Register plugin settings.
 *
 * @since 1.0.0
 */
function register_settings() {
	$settings = array(
		'ip_logging' => array(
			'type' => 'boolean',
		),
		'log' => array(
			'type' => 'boolean',
		),
		'log_file' => array(
			'type' => 'string',
		),
		'license' => array(
			'type' => 'object',
			'properties' => array(
				'activated'   => array(
					'type' => 'boolean',
				),
				'error'       => array(
					'type' => 'string',
				),
				'license_key' => array(
					'type'                 => 'object',
					'additionalProperties' => true,
				),
				'instance'    => array(
					'type'                 => 'object',
					'additionalProperties' => true,
				),
				'meta'        => array(
					'type'                 => 'object',
					'additionalProperties' => true,
				),
			),
		),
		'version' => array(
			'type' => 'string',
		),
		'messages' => array(
			'type' => 'object',
			'properties' => array(
				'form'         => array(
					'type'       => 'object',
					'properties' => array(
						'success' => array(
							'type' => 'string',
						),
						'error' => array(
							'type' => 'string',
						),
					),
				),
				'missingValue'         => array(
					'type'       => 'object',
					'properties' => array(
						'default' => array(
							'type' => 'string',
						),
						'checkbox' => array(
							'type' => 'string',
						),
						'radio' => array(
							'type' => 'string',
						),
						'select' => array(
							'type' => 'string',
						),
						'select-multiple' => array(
							'type' => 'string',
						),
					),
				),
				'patternMismatch'         => array(
					'type'       => 'object',
					'properties' => array(
						'email' => array(
							'type' => 'string',
						),
						'url' => array(
							'type' => 'string',
						),
						'number' => array(
							'type' => 'string',
						),
						'color' => array(
							'type' => 'string',
						),
						'date' => array(
							'type' => 'string',
						),
						'time' => array(
							'type' => 'string',
						),
						'month' => array(
							'type' => 'string',
						),
						'default' => array(
							'type' => 'string',
						),
					),
				),
				'outOfRange'         => array(
					'type'       => 'object',
					'properties' => array(
						'over' => array(
							'type' => 'string',
						),
						'under' => array(
							'type' => 'string',
						),
					),
				),
				'wrongLength'         => array(
					'type'       => 'object',
					'properties' => array(
						'over' => array(
							'type' => 'string',
						),
						'under' => array(
							'type' => 'string',
						),
					),
				),
			),
		),
		'reCaptcha' => array(
			'type'       => 'object',
			'properties' => array(
				'version' => array(
					'type' => 'string',
				),
				'site_key' => array(
					'type' => 'string',
				),
				'secret_key' => array(
					'type' => 'string',
				),
				'threshold' => array(
					'type' => 'number',
				),
			),
		),
		'hCaptcha' => array(
			'type'       => 'object',
			'properties' => array(
				'version' => array(
					'type' => 'string',
				),
				'site_key' => array(
					'type' => 'string',
				),
				'secret_key' => array(
					'type' => 'string',
				),
				'threshold' => array(
					'type' => 'number',
				),
			),
		),
		'enabled_addons' => array(
			'type' => 'array',
		),
		'addons' => array(
			'type' => 'object',
			'additionalProperties' => true,
		),
	);

	$settings = apply_filters( 'formiflex_register_settings', $settings );

	$defaults = formiflex_default_options();

	$defaults = apply_filters( 'formiflex_register_settings_defaults', $defaults );

	register_setting(
		'formiflex',
		'formiflex',
		array(
			'description'  => __(
				'Settings for the Formiflex Block plugin.',
				'formiflex'
			),
			'type'         => 'object',
			'show_in_rest' => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => $settings,
					'additionalProperties' => true,
				),
			),
			'sanitize_callback' => 'Formiflex\Utils\recursive_sanitize_text_field',
			'default'      => $defaults,
		)
	);
}
add_action( 'rest_api_init', __NAMESPACE__ . '\register_settings' );
add_action( 'admin_init', __NAMESPACE__ . '\register_settings' );
