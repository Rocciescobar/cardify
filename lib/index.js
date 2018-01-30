'use strict';

(function ($) {
  $.fn.extend({
    cardify: function cardify() {
      (function () {
        // Agrega etiquetas figure y figcapture:
        $('img').wrap('<figure></figure>');
        $('img').after('<figcaption></figcaption>');

        // Agrega hover a las imágenes
        $('img').hover(function () {
          var alt = event.target.alt;
          $(event.target).next().text(alt).css({ display: 'block' });
        }, function () {
          $(event.target).next().css({ display: 'none' });
        });
      })();
    }
  });
})(jQuery);