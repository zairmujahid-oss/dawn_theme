document.addEventListener('click', function (event) {

  const button = event.target.closest('.accordion-button');

  if (!button) return;

  const item = button.closest('.accordion-item');

  item.classList.toggle('active');

});