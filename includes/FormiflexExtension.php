<?php
/**
 * Formiflex Extension
 *
 * @package Jankx\Extensions\Formiflex
 */

namespace Jankx\Extensions\Formiflex;

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
        // Load the original Formiflex plugin
        $this->load_formiflex_plugin();

        // Register extension hooks
        add_action('init', [$this, 'init_extension']);
    }

    /**
     * Register hooks
     */
    public function register_hooks(): void
    {
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
        // Include the original plugin files
        require_once $this->get_extension_path() . '/includes/Plugin.php';
        require_once $this->get_extension_path() . '/vendor/autoload.php';

        // Initialize the plugin with correct path
        $plugin_file = $this->get_extension_path() . '/includes/Plugin.php';
        $this->plugin = new \Formiflex\Plugin($plugin_file);
        $this->plugin->run();
    }

    /**
     * Initialize extension
     */
    public function init_extension(): void
    {
        // Extension initialization logic
        do_action('formiflex_extension_loaded');
    }

    /**
     * Get extension path
     */
    public function get_extension_path(): string
    {
        return dirname(__FILE__, 2); // Go up 2 levels to get extension root
    }
}
