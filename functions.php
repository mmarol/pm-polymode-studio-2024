<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 */

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/src/StarterSite.php';

Timber\Timber::init();

// Sets the directories (inside your theme) to find .twig files.
Timber::$dirname = [ 'templates', 'views' ];

new StarterSite();

// Shortcodes
function poetic_shortcode($atts, $content = null)
{
	$args =  shortcode_atts(array(
		'id' => "#",
		'opacity' => "100%"
	), $atts);
	$output = '<span class="poetic__highlight" data-image-id="' . $args['id'] . '" data-opacity=' . $args['opacity'] . '">' . $content . '</span>';
	return $output;
}

function pm_shortcodes_init()
{
	add_shortcode('hover', 'poetic_shortcode');
}

add_action('init', 'pm_shortcodes_init');


function load_assets()
{
	// Load styles
	wp_enqueue_style('jaym-stylesheet', get_template_directory_uri() . '/dist/css/style.css', array(), '1.0.0', 'all');

	// Load scripts
	wp_enqueue_script('jaym-scripts', get_template_directory_uri() . '/dist/js/build.js', array('jquery', 'jquery-ui-draggable'), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'load_assets');
