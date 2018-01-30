'use strict';

(function ($) {
  $.fn.extend({
    cardify: function cardify() {
      (function () {
        // Agrega etiquetas figure y figcapture:
        $('img').wrap('<figure></figure>');
        $('img').after('<figcaption></figcaption>');

        // Agrega hover a las imágenes
        $('figure').hover(function () {
          var alt = event.target.alt;
          $(event.target).parent().css({
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
          });
          $(event.target).css({ filter: 'grayscale(100%)' });
          $(event.target).next().text(alt).css({
            color: '#fff',
            display: 'block',
            fontWeight: 'bold',
            maxWidth: '80%',
            position: 'absolute',
            textAlign: 'center'
          });
        }, function () {
          $(event.target).css({ filter: 'none' });
          $(event.target).next().css({ display: 'none' });
        });
        // Fin de hover
      })();
    },
    responsive: function responsive() {
      $('img').each(function () {
        $(undefined).css({
          'max-width': '100%',
          'height': 'auto'
        });
      });
    }
  });
})(jQuery);