'use strict';

// función autoejecutable que agrega figure :
(function () {
  var containers = $('.container').find('img');
  containers.wrap('<figure></figure>');
})();