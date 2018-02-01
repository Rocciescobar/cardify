(($) => {
  $.fn.extend({
    cardify: () =>{
      (() => {
        // Agrega etiquetas figure y figcapture:
        $('img').wrap('<figure></figure>');
        $('img').after('<figcaption></figcaption>');
      
        // Agrega hover a las imágenes
        $('figure').hover(() => {
          let alt = event.target.alt;
          $(event.target).parent().addClass('figureStyle');      
          $(event.target).addClass('imgFilter');
          $(event.target).next().text(alt).addClass('figcaptionStyle').removeClass('displayNone').toggleClass('displayBlock');
        }, () => {
          $(event.target).removeClass('imgFilter');     
          $(event.target).next().removeClass('displayBlock').toggleClass('displayNone');
        });
      })();
    },

    responsive: () => {     
      $('img').each(() => {
        $(this).target.css({
          'max-width': '100%',
          'height': 'auto'
        });
      }); 
    },
  });
})(jQuery);