<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.francescopepe.com
 * @since      1.0.0
 *
 * @package    Formiflex
 * @subpackage Formiflex/includes
 */

namespace Formiflex;

/**
 * Admin Class
 */
class Admin {

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
	 * Register Formiflex menu page
	 *
	 * @return void
	 */
	public function admin_menu() {
		error_log('Formiflex: admin_menu() called');

		$capability = 'manage_options';
		$slug       = 'formiflex';

		error_log('Formiflex: Adding menu page with slug: ' . $slug);
		$admin_hook = add_menu_page(
			__( 'Forms', 'formiflex' ),
			__( 'Forms', 'formiflex' ),
			'edit_posts',
			$slug,
			array( $this, 'settings_page' ),
			'dashicons-feedback',
			26
		);
		error_log('Formiflex: Menu page added, hook: ' . $admin_hook);
		add_action( 'load-' . $admin_hook, array( $this, 'load_formiflex_scripts' ) );
		$admin_hook = add_submenu_page(
			'formiflex',
			__( 'Settings', 'formiflex' ),
			__( 'Settings', 'formiflex' ),
			$capability,
			$slug . '-settings',
			array( $this, 'settings_page' )
		);
		add_action( 'load-' . $admin_hook, array( $this, 'load_formiflex_scripts' ) );
		$admin_hook = add_submenu_page(
			'formiflex',
			__( 'Tools', 'formiflex' ),
			__( 'Tools', 'formiflex' ),
			$capability,
			$slug . '-tools',
			array( $this, 'settings_page' )
		);
		add_action( 'load-' . $admin_hook, array( $this, 'load_formiflex_scripts' ) );
		$admin_hook = add_submenu_page(
			'formiflex',
			__( 'Addons', 'formiflex' ),
			__( 'Addons', 'formiflex' ),
			$capability,
			$slug . '-addons',
			array( $this, 'settings_page' )
		);
		add_action( 'load-' . $admin_hook, array( $this, 'load_formiflex_scripts' ) );
	}

	/**
	 * Store Formiflex action settings in DB.
	 *
	 * @param \WP_Admin_Bar $admin_bar The admin bar.
	 * @since 1.0.0
	 */
	public function admin_bar_item( \WP_Admin_Bar $admin_bar ) {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$badge = '';
		$result = get_transient( 'formiflex_news', false );

		if ( $result ) {
			$badge = sprintf(
				'<span style="background-color: #337ab7; padding: 0 5px; margin-left: 10px; color: white; border-radius: 20%%;">%s</span>',
				$result
			);
		}

		$admin_bar->add_menu(
			array(
				'id'    => 'formiflex-menu',
				'parent' => null,
				'group'  => null,
				'title' => 'Formiflex ' . $badge,
				'href'  => admin_url( 'admin.php?page=formiflex' ),
			)
		);

		$admin_bar->add_menu(
			array(
				'id'    => 'formiflex-submissions',
				'parent' => 'formiflex-menu',
				'title' => __( 'Entries', 'formiflex' ) . $badge,
				'href'  => admin_url( 'admin.php?page=formiflex' ),
			)
		);

		$admin_bar->add_menu(
			array(
				'id' => 'formiflex-docs',
				'parent' => 'formiflex-menu',
				'title' => 'Docs',
				'href' => 'https://docs.formiflex.net',
				'meta' => array( 'target' => '_blank' ),
			)
		);

		$admin_bar->add_menu(
			array(
				'id' => 'formiflex-support',
				'parent' => 'formiflex-menu',
				'title' => 'Support',
				'href' => 'https://wordpress.org/support/plugin/formiflex/',
				'meta' => array( 'target' => '_blank' ),
			)
		);
	}

	/**
	 * Output Formiflex Settings HTML.
	 *
	 * @since 2.6.0
	 */
	public function settings_page() {
		?>
			<div id="formiflex-admin"></div>
		<?php
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    2.6.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Formiflex2_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Formiflex2_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style(
			$this->plugin_name,
			$this->get_extension_url() . '/build/admin.css',
			array( 'wp-components', 'wp-reset-editor-styles' ),
			$this->version,
			'all'
		);
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    2.6.0
	 * @throws \Error If file is missing.
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Formiflex2_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Formiflex2_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		$admin_asset_path = dirname( $this->entry_point ) . '/build/admin.asset.php';
		error_log('Formiflex: Admin asset path: ' . $admin_asset_path);
		error_log('Formiflex: Entry point: ' . $this->entry_point);

		// Tạm thời bỏ qua việc kiểm tra file asset để tránh lỗi
		if ( ! file_exists( $admin_asset_path ) ) {
			error_log('Formiflex: Admin asset file not found at: ' . $admin_asset_path);
			// Tạm thời return thay vì throw error
			return;
		}
		error_log('Formiflex: Admin asset file found');
		$admin_script_asset = require $admin_asset_path;

		wp_enqueue_script(
			$this->plugin_name,
			$this->get_extension_url() . '/build/admin.js',
			$admin_script_asset['dependencies'],
			$admin_script_asset['version'],
			true
		);
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    2.6.0
	 * @throws \Error If file is missing.
	 */
	public function enqueue_editor_scripts() {
		$new_form_asset_path = dirname( $this->entry_point ) . '/build/form-settings.asset.php';

		// Tạm thời bỏ qua việc kiểm tra file asset để tránh lỗi
		if ( ! file_exists( $new_form_asset_path ) ) {
			error_log('Formiflex: Form settings asset file not found at: ' . $new_form_asset_path);
			// Tạm thời return thay vì throw error
			return;
		}
		$new_form_script_asset = require $new_form_asset_path;

		wp_enqueue_script(
			$this->plugin_name,
			$this->get_extension_url() . '/build/form-settings.js',
			$new_form_script_asset['dependencies'],
			$new_form_script_asset['version'],
			true
		);

		$screen = get_current_screen();
		if ( $screen && 'formiflex_form' === $screen->post_type ) {
			wp_enqueue_script(
				$this->plugin_name . 'field-variations',
				$this->get_extension_url() . '/build/field-variations.js',
				$new_form_script_asset['dependencies'],
				$new_form_script_asset['version'],
				true
			);
		}
	}

	/**
	 * Output Formiflex styles and scripts.
	 *
	 * @since 2.6.0
	 */
	public function load_formiflex_scripts() {
		$this->enqueue_styles();
		$this->enqueue_scripts();

		do_action( 'formiflex_settings_scripts' );
	}

			/**
	 * Get extension URL from manifest
	 *
	 * @return string
	 */
	protected function get_extension_url(): string
	{
		// Simple approach: use the entry point to determine the extension directory
		$extension_dir = dirname($this->entry_point);

		// Debug info (commented out for production)
		// error_log('Formiflex Debug - Entry point: ' . $this->entry_point);
		// error_log('Formiflex Debug - Extension dir: ' . $extension_dir);
		// error_log('Formiflex Debug - Template directory: ' . get_template_directory());
		// error_log('Formiflex Debug - Template directory URI: ' . get_template_directory_uri());
		// error_log('Formiflex Debug - Stylesheet directory: ' . get_stylesheet_directory());
		// error_log('Formiflex Debug - Stylesheet directory URI: ' . get_stylesheet_directory_uri());

		// Check if this is a theme extension by looking for 'extensions' in the path
		if (strpos($extension_dir, 'extensions') !== false) {
			// It's a theme extension, use stylesheet directory (current theme)
			$extension_url = get_stylesheet_directory_uri() . '/extensions/formiflex';
			// error_log('Formiflex Debug - Using stylesheet extension URL: ' . $extension_url);
			return $extension_url;
		} else {
			// It's a plugin, use plugin directory
			$extension_url = plugin_dir_url($this->entry_point);
			// error_log('Formiflex Debug - Using plugin URL: ' . $extension_url);
			return $extension_url;
		}
	}
}
