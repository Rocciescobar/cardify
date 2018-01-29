// función autoejecutable que agrega figure :
(() => {
  const containers = $('.container').find('img');
  containers.wrap('<figure></figure>');

  // Agrega etiqueta figcation con alt de imagen
  $(containers).each(function() {
    $(this).after('<figcaption>' + $(this).attr('alt') + '</figcaption>');
  });
})();