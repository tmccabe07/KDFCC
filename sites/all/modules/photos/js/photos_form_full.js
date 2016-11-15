(function ($) {
Drupal.behaviors.photosFormFull = {
  attach: function(context) {
		var radioVal = $('input:radio[name="album[page_display]"]:checked').val();
    if (radioVal < 2) {
      $('.form-item-album-full-viewnum').hide('slow');
    }
    else {
      $('.form-item-album-full-viewnum').show('slow');
    }
    $('input:radio[name="album[page_display]"]').change(function() {
			radioVal = $('input:radio[name="album[page_display]"]:checked').val();
      if (radioVal < 2) {
        $('.form-item-album-full-viewnum').hide('slow');
      }
      else {
        $('.form-item-album-full-viewnum').show('slow');
      }
    });
  }
};
})(jQuery);
