
document.querySelectorAll('.submenu-toggle').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    this.nextElementSibling.classList.toggle('show');
  });
});

