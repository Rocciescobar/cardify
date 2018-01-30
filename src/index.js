(($) => {
  $.fn.extend({
    cardify: () =>{
      (() => {
        // Agrega etiquetas figure y figcapture:
        $('img').wrap('<figure></figure>');
        $('img').after('<figcaption></figcaption>');
      
        // Agrega hover a las imágenes
        $('img').hover(() => {
          let alt = event.target.alt;
          $(event.target).next().text(alt).css({display: 'block'});
        }, () => {
          $(event.target).next().css({display: 'none'});
        });
      })();
    },
    responsive: () => {
      $('img').each(() => {
        $(this).css({
          'max-width': '100%',
          'height': 'auto'
        });
      });
    },
  });
})(jQuery);