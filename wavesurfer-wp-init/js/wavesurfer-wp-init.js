/**
 * WaveSurfer-WP Init
 */
 
var $j = jQuery.noConflict();

$j('.wavesurfer-button').click(function() {
    $j(document).trigger('wavesurfer-wp-init')
});
