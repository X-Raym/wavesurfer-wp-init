<?php
/**
 * Plugin Name: WaveSurfer-WP Custom Init
 * Description: Custom initialization rules for WaveSurfer-WP
 */
 
add_action('wp_enqueue_scripts', 'wavesurfer_wp_init_script_register', 11);
function wavesurfer_wp_init_script_register() {

    if( !is_admin() ) {
        wp_register_script( 'wavesurfer-wp-init', plugin_dir_url( __FILE__ ) . 'js/wavesurfer-wp-init.js', array( 'wavesurfer-wp_init' )   );    
    }
    wp_enqueue_script( 'wavesurfer-wp-init' );
}

