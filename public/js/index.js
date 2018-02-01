'use strict';

(function($) {
  $.fn.extend({
    cardify: function cardify() {
      (function() {
        // Agrega etiquetas figure y figcapture:
        $('img').wrap('<figure></figure>');
        $('img').after('<figcaption></figcaption>');

        // Agrega hover a las imágenes
        $('figure').hover(function() {
          var alt = event.target.alt;
          $(event.target).parent().addClass('figureStyle');
          $(event.target).addClass('imgFilter');
          $(event.target).next().text(alt).addClass('figcaptionStyle').removeClass('displayNone').toggleClass('displayBlock');
        }, function() {
          $(event.target).removeClass('imgFilter');
          $(event.target).next().removeClass('displayBlock').toggleClass('displayNone');
        });
      })();
    },

    responsive: function responsive() {
      $('img').each(function() {
        $(undefined).target.css({
          'max-width': '100%',
          'height': 'auto'
        });
      });
    }
  });
})(jQuery);