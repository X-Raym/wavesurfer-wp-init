/**
 * WaveSurfer-WP Init
 * Choose or Define your own rules
 */
 

// No conflict mod for WordPress
var $j = jQuery.noConflict();


// ====== User-Defined Events ====== //
// Delete unnecessary ones.

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

// AJAX Load More Plugin: https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/
$(function() {
  $.fn.almComplete = function(alm){
    $j(document).trigger('wavesurfer-wp-init');
  };
})(jQuery);
