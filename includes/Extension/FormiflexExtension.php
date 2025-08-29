<?php
/**
 * Formiflex Extension
 *
 * @package Formiflex
 */

namespace Formiflex\Extension;

use Jankx\Extensions\Extension;

/**
 * Formiflex Extension Class
 */
class FormiflexExtension extends Extension
{
    /**
     * Plugin instance
     */
    protected $plugin;

    /**
     * Extension version
     */
    protected $version = '2.7.1';

    /**
     * Initialize the extension
     */
    public function init(): void
    {
        error_log('Formiflex: Extension init() called');

        // Register extension hooks
        add_action('init', [$this, 'init_extension'], 5);

        // Thêm hook activation để tạo bảng database
        add_action('after_switch_theme', [$this, 'activate_extension']);
        add_action('after_setup_theme', [$this, 'check_activation']);

        error_log('Formiflex: init hook registered with priority 5');
    }

    /**
     * Register hooks
     */
    public function register_hooks(): void
    {
        error_log('Formiflex: register_hooks() called by framework');
        // This method is called by the framework
        $this->init();
    }

    /**
     * Get extension URL
     */
    public function get_extension_url(): string
    {
        return get_template_directory_uri() . '/extensions/formiflex';
    }

    /**
     * Get extension version
     */
    public function get_version(): string
    {
        return $this->version;
    }

    /**
     * Get extension name
     */
    public function get_name(): string
    {
        return 'Formiflex';
    }

    /**
     * Get extension description
     */
    public function get_description(): string
    {
        return 'Lightweight Gutenberg contact form builder, blazingly fast with no external dependencies and ReCaptcha support.';
    }

    /**
     * Check if extension has update
     */
    public function has_update(): bool
    {
        return false; // No update available for now
    }

    /**
     * Get extension requirements
     */
    public function get_requirements(): array
    {
        return [
            'php' => '7.0',
            'wordpress' => '6.6',
            'jankx' => '2.0.0'
        ];
    }

    /**
     * Validate extension
     */
    public function validate(): bool
    {
        // Check if required files exist
        $required_files = [
            $this->get_extension_path() . '/includes/Plugin.php',
            $this->get_extension_path() . '/vendor/autoload.php',
            $this->get_extension_path() . '/manifest.json'
        ];

        foreach ($required_files as $file) {
            if (!file_exists($file)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Load the original Formiflex plugin
     */
    protected function load_formiflex_plugin(): void
    {
        error_log('Formiflex: load_formiflex_plugin() called');

        try {
            // Include the original plugin files
            $plugin_file = $this->get_extension_path() . '/includes/Plugin.php';
            $autoload_file = $this->get_extension_path() . '/vendor/autoload.php';

            error_log('Formiflex: Plugin file path: ' . $plugin_file);
            error_log('Formiflex: Autoload file path: ' . $autoload_file);

            if (!file_exists($plugin_file)) {
                error_log('Formiflex: Plugin.php not found at ' . $plugin_file);
                return;
            }

            if (!file_exists($autoload_file)) {
                error_log('Formiflex: vendor/autoload.php not found at ' . $autoload_file);
                return;
            }

            error_log('Formiflex: Files exist, including them...');
            require_once $plugin_file;
            require_once $autoload_file;
            error_log('Formiflex: Files included successfully');

            // Initialize the plugin
            error_log('Formiflex: Creating plugin instance...');
            $entry_point = $this->get_extension_path() . '/formiflex.php';
            $this->plugin = new \Formiflex\Plugin($entry_point);
            error_log('Formiflex: Plugin instance created');

            error_log('Formiflex: Running plugin...');
            $this->plugin->run();
            error_log('Formiflex: Plugin run() completed');

            error_log('Formiflex: Plugin loaded successfully');
        } catch (Exception $e) {
            error_log('Formiflex: Error loading plugin: ' . $e->getMessage());
            error_log('Formiflex: Error file: ' . $e->getFile() . ' line: ' . $e->getLine());
        }
    }

    /**
     * Initialize extension
     */
    public function init_extension(): void
    {
        error_log('Formiflex: init_extension() called by WordPress init hook');

        // Load the original Formiflex plugin only once
        static $loaded = false;
        if (!$loaded) {
            $this->load_formiflex_plugin();
            $loaded = true;
        }

        // Extension initialization logic
        do_action('formiflex_extension_loaded');
        error_log('Formiflex: formiflex_extension_loaded action fired');
    }

    /**
     * Get extension path
     */
    public function get_extension_path(): string
    {
        return dirname(__FILE__, 3); // Go up 3 levels to get extension root
    }

    /**
     * Activate extension and create database tables
     */
    public function activate_extension(): void
    {
        error_log('Formiflex: activate_extension() called');
        \Formiflex\Activator::activate();
        error_log('Formiflex: Database tables created');
    }

    /**
     * Check if extension needs activation
     */
    public function check_activation(): void
    {
        if (!is_admin()) {
            return;
        }
        global $wpdb;
        $table_name = $wpdb->prefix . 'formiflex_submissions';

        if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
            error_log('Formiflex: Database table not found, creating...');
            $this->activate_extension();
        }
    }
}
