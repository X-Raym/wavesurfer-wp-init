/**
 * WaveSurfer-WP Init
 */
 
var $j = jQuery.noConflict();


// Page ready
$j(document).on('ready', function() {
    $j(document).trigger('wavesurfer-wp-init')
});


// After a button click
$j('.wavesurfer-button').click(function() {
    $j(document).trigger('wavesurfer-wp-init')
});

// Click on any link
$(function(){
  $('body').on('click', 'a', function() { 
    $j(document).trigger('wavesurfer-wp-init')
  });
});
