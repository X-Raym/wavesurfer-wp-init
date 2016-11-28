/**
 * WaveSurfer-WP Init
 */
 
var $j = jQuery.noConflict();


// Initialize WaveSurfer Player at page ready
$j(document).on('ready', function() {
    $j(document).trigger('wavesurfer-wp-init')
});


// Initialize WaveSurfer Player after a button click
$j('.wavesurfer-button').click(function() {
    $j(document).trigger('wavesurfer-wp-init')
});
