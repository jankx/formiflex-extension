<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://www.francescopepe.com
 * @since      1.0.0
 *
 * @package    Formiflex
 * @subpackage Formiflex/includes
 */

namespace Formiflex;

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Formiflex
 * @subpackage Formiflex/includes
 * @author     Francesco Pepe <sgozzapolli@gmail.com>
 */
class Plugin {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Formiflex_Loader $loader Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version     The current version of the plugin.
	 */
	protected $version;

	/**
	 * The main plugin file.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $entry_point The entry point of the plugin.
	 */
	protected $entry_point;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 * @param string $entry_point The entry point of this plugin.
	 */
	public function __construct( $entry_point ) {
		error_log('Formiflex: Plugin constructor called with entry_point: ' . $entry_point);
		$this->version = get_file_data( $entry_point, array( 'Version' ) )[0];
		$this->entry_point = $entry_point;
		$this->plugin_name = 'formiflex';
		error_log('Formiflex: Plugin name: ' . $this->plugin_name . ', Version: ' . $this->version);
		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();
		error_log('Formiflex: Plugin constructor completed');
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Formiflex_Loader. Orchestrates the hooks of the plugin.
	 * - Formiflex_i18n. Defines internationalization functionality.
	 * - Formiflex_Admin. Defines all hooks for the admin area.
	 * - Formiflex_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {
		error_log('Formiflex: Loading dependencies...');
		/**
		 * The helper files.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'includes/Utils/functions.php';
		require_once plugin_dir_path( __DIR__ ) . 'includes/Utils/templates.php';
		require_once plugin_dir_path( __DIR__ ) . 'includes/Utils/register-cpt.php';
		require_once plugin_dir_path( __DIR__ ) . 'includes/Utils/register-settings.php';

		$this->loader = new \Formiflex\Loader();
		error_log('Formiflex: Dependencies loaded, loader created');
	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Formiflex_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new \Formiflex\I18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {
		error_log('Formiflex: Defining admin hooks...');

		$plugin_admin = new \Formiflex\Admin( $this->plugin_name, $this->version, $this->entry_point );

		$this->loader->add_action( 'admin_menu', $plugin_admin, 'admin_menu' );
		$this->loader->add_action( 'enqueue_block_editor_assets', $plugin_admin, 'enqueue_editor_scripts' );
		$this->loader->add_action( 'admin_bar_menu', $plugin_admin, 'admin_bar_item', 1000 );

		$activator = new \Formiflex\Activator( $this->plugin_name, $this->version, $this->entry_point );
		$this->loader->add_action( 'upgrader_process_complete', $activator, 'update_completed', 10, 2 );

		error_log('Formiflex: Admin hooks defined');
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {
		$blocks = new \Formiflex\Blocks( $this->plugin_name, $this->version, $this->entry_point );

		$this->loader->add_action( 'init', $blocks, 'register_blocks' );
		$this->loader->add_action( 'init', $blocks, 'register_block_pattern_category' );
		$this->loader->add_action( 'block_categories_all', $blocks, 'register_block_category' );
		$this->loader->add_shortcode( 'formiflex', $blocks, 'do_reusable_block' );

		$frontend = new \Formiflex\Frontend( $this->plugin_name, $this->version );

		$this->loader->add_action( 'wp_ajax_formiflex', $frontend, 'listen_for_submit' );
		$this->loader->add_action( 'wp_ajax_nopriv_formiflex', $frontend, 'listen_for_submit' );

		// REST handlers.
		$addons = new \Formiflex\Rest\Addons( $this->entry_point );
		$this->loader->add_action( 'rest_api_init', $addons, 'register_routes' );
		$submissions = new \Formiflex\Rest\Submissions( $this->entry_point );
		$this->loader->add_action( 'rest_api_init', $submissions, 'register_routes' );
		$columns = new \Formiflex\Rest\Columns( $this->entry_point );
		$this->loader->add_action( 'rest_api_init', $columns, 'register_routes' );
		$license = new \Formiflex\Rest\License( $this->entry_point );
		$this->loader->add_action( 'rest_api_init', $license, 'register_routes' );
		$importer = new \Formiflex\Rest\Importer( $this->entry_point );
		$this->loader->add_action( 'rest_api_init', $importer, 'register_routes' );
		$settings = new \Formiflex\Rest\Settings( $this->entry_point );
		$this->loader->add_action( 'rest_api_init', $settings, 'register_routes' );

		// Cron Tasks.
		$cron = new \Formiflex\Cron( $this->plugin_name, $this->version );
		$cron->cron();

		$this->loader->add_action( 'formiflex_retrieve_news', $cron, 'get_news' );
		$this->loader->add_action( 'formiflex_delete_logs', $cron, 'delete_logs' );
		$this->loader->add_action( 'formiflex_delete_tmp', $cron, 'delete_tmp' );

		// Actions.
		$email = new \Formiflex\Actions\Email();
		$email->hook();
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		error_log('Formiflex: Plugin run() called');
		$this->loader->run();
		error_log('Formiflex: Plugin run() completed');
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Formiflex_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}
}
