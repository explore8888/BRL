document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    const container = document.getElementById('container');
    container.classList.add('loaded');

    if (container.classList.contains('loaded')) {
      setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.remove();
      }, 3000);
    }
  }, 3000);
});
