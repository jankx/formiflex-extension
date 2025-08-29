<?php
/**
 * Fired during plugin activation
 *
 * @link       https://www.francescopepe.com
 * @since      1.0.0
 *
 * @package    Formiflex
 * @subpackage Formiflex/includes
 */

namespace Formiflex;

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Formiflex2
 * @subpackage Formiflex2/includes
 * @author     Francesco Pepe <sgozzapolli@gmail.com>
 */
class Activator {
	/**
	 * The ID of this plugin.
	 *
	 * @since    2.6.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    2.6.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * The main file of this plugin.
	 *
	 * @since    2.6.0
	 * @access   private
	 * @var      string    $version    The main file of this plugin.
	 */
	private $entry_point;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since 2.6.0
	 * @param string $plugin_name The name of this plugin.
	 * @param string $version     The version of this plugin.
	 * @param string $entry_point The main file of this plugin.
	 */
	public function __construct( $plugin_name, $version, $entry_point ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->entry_point = $entry_point;
	}

	/**
	 * Code to run after activation.
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		global $wpdb;

		// create table for storing submissions.
		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS {$wpdb->prefix}formiflex_submissions (
			`id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
			`form_id` INT UNSIGNED NOT NULL,
			`data` JSON NOT NULL,
			`is_new` BOOLEAN DEFAULT true,
			`starred` BOOLEAN DEFAULT false,
			`user_agent` TEXT NULL,
			`ip_address` VARCHAR(255) NULL,
			`referer_url` VARCHAR(255) NULL,
			`submitted_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
			`log` TEXT NULL
			) ENGINE=InnoDB CHARACTER SET={$wpdb->charset};"
		);

		// create table for storing submissions meta.
		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS {$wpdb->prefix}formiflex_submissions_meta (
			`id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
			`form_id` INT UNSIGNED NOT NULL,
			`submission_id` INT UNSIGNED NOT NULL,
			`field_name` VARCHAR(255) NOT NULL,
			`field_value` TEXT NULL,
			FOREIGN KEY (submission_id) REFERENCES {$wpdb->prefix}formiflex_submissions(id) ON DELETE CASCADE
			) ENGINE=InnoDB CHARACTER SET={$wpdb->charset};"
		);

		$wpdb->query( "UPDATE {$wpdb->prefix}posts SET post_type = 'formiflex_form' WHERE post_type = 'formiflex';" );

		$upload_dir   = wp_upload_dir();
		$formiflex_dir = $upload_dir['basedir'] . '/formiflex';
		if ( ! is_dir( $formiflex_dir ) ) {
			wp_mkdir_p( $formiflex_dir );
		}

		global $wp_filesystem;
		// Initialize the WP filesystem, no more using 'file-put-contents' function.
		if ( empty( $wp_filesystem ) ) {
			require_once ABSPATH . '/wp-admin/includes/file.php';
			WP_Filesystem();
		}
		// Add a white index.
		$wp_filesystem->put_contents( trailingslashit( $formiflex_dir ) . 'index.html', '', 0644 );

		// refresh all addons.
		delete_transient( 'formiflex_addons' );
		delete_transient( 'formiflex_patterns' );

		// remove useless meta.
		delete_metadata( 'post', 0, '_formiflex_parent', false, true );

		update_option( 'formiflex_version', get_file_data( __FILE__, array( 'Version' ) )[0] );
		update_option( 'formiflex_installed', time() );
	}

	/**
	 * COde to run after plugin update.
	 *
	 * @param WP_Upgrader $upgrader_object The upgrader object.
	 * @param array       $options The options.
	 * @return void
	 */
	public function update_completed( $upgrader_object, $options ) {

		// If an update has taken place and the updated type is plugins and the plugins element exists.
		if ( 'update' === $options['action'] && 'plugin' === $options['type'] && isset( $options['plugins'] ) ) {
			foreach ( $options['plugins'] as $plugin ) {
				// Check to ensure it's Formiflex v. 2.7.0 or previous.
				if ( plugin_basename( $this->entry_point ) === $plugin && version_compare( $this->version, '2.7.0', '<' ) ) {
					$this->add_message();
				}
			}
		}
	}

	/**
	 * Add message block.
	 *
	 * @return void
	 */
	public function add_message() {
		$forms = get_posts(
			array(
				'post_type'   => 'formiflex_form',
				'post_status' => 'publish',
				'numberposts' => -1,
			)
		);

		foreach ( $forms as $key => $form ) {

			if ( ! has_block( 'formiflex/message', $form->post_content ) ) {

				$updated_content = str_replace(
					'</form>',
					'<!-- wp:formiflex/message -->
<div class="wp-block-formiflex-message" data-wp-class--success="context.response.success" data-wp-class--error="!context.response.success" data-wp-interactive="formiflex" data-wp-context="{}"><p data-wp-text="state.message"></p><ul data-wp-context="state.errors"><template data-wp-each="state.errors"><li data-wp-text="context.item"></li></template></ul></div>
<!-- /wp:formiflex/message --></form>',
					$form->post_content
				);

				$updated_form = array(
					'ID'           => $form->ID,
					'post_content' => $updated_content,
				);
				wp_update_post( $updated_form, false, false );
				wp_reset_postdata();
			}
		}
	}
}
