// función autoejecutable que agrega figure :
(() => {
  const containers = $('.container').find('img');
  containers.wrap('<figure></figure>');
})()