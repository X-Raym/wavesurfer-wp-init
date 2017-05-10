/**
 * WaveSurfer-WP Init
 * Choose or Define your own rules
 */
 

// No conflict mod for WordPress
var $j = jQuery.noConflict();


// ====== User-Defined Events ====== //
// Delete unnecessary ones.

// After a button click
$j('.wavesurfer-button').click(function() {
    $j(document).trigger('wavesurfer')
});

// Click on wavesurfer-button link
$(function(){
  $('body').on('click', 'a.wavesurfer-button', function() { 
    $j(document).trigger('wavesurfer')
  });
});

// AJAX Load More Plugin: https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/
// No conflict mod for WordPress
$j( document ).ready(function() {
  $j.fn.almComplete = function(alm){
  	//alert('alm is complete');
    $j(document).trigger('wavesurfer');
  }
});
