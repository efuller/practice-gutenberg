<?php
/**
 * Dependencies for the plugin.
 *
 * @package WPSP
 * @since 1.0.0
 */

namespace PG;

/**
 * Class Dependencies.
 *
 * @package WPSP
 * @since 1.0.0
 */
class Dependencies {

	/**
	 * Constructor.
	 *
	 * Add scripts and styles.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->hooks();
	}

	/**
	 * Run hooks.
	 *
	 * @since 1.0.0
	 */
	public function hooks() {
		// Enqueue styles.
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_styles' ) );
		// Enqueue scripts.
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_scripts' ) );
	}

	/**
	 * Enqueue public styles.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style(
			App::get( 'basename' ) . '-style',
			App::get( 'plugin_url' ) . 'assets/css/main.css',
			array( 'wp-blocks' ),
			App::get( 'version' )
		);
	}

	/**
	 * Enqueue public scripts.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script(
			App::get( 'basename' ) . '-js',
			App::get( 'plugin_url' ) . 'assets/js/main.js',
			array( 'jquery', 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ),
			App::get( 'version' )
		);
	}
}
