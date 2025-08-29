<?php
/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://www.francescopepe.com
 * @since      1.0.0
 *
 * @package    Formiflex
 * @subpackage Formiflex/includes
 */

namespace Formiflex;

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Formiflex2
 * @subpackage Formiflex2/includes
 * @author     Francesco Pepe <sgozzapolli@gmail.com>
 */
class I18n {

	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'formiflex',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);
	}
}
