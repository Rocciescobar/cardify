'use strict';

// función autoejecutable que agrega figure :

(function($) {
  $.fn.extend({
    cardify: function cardify() {
      $('img').wrap('<figure></figure>');
    }
  });
})(jQuery);

/* (($) => {
  const containers = $('.container').find('img');
  containers.wrap('<figure></figure>');

  // Agrega etiqueta figcation con alt de imagen
  $(containers).each(function() {
    $(this).after('<figcaption>' + $(this).attr('alt') + '</figcaption>');
  });
})(jQuery); */