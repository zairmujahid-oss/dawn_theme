document.addEventListener('change', function (event) {

  const radio = event.target.closest(
    '.product-option-card input[type="radio"]'
  );

  if (!radio) return;

  const card = radio.closest('.product-option-card');

  // Remove selected class from all cards
  document
    .querySelectorAll('.product-option-card')
    .forEach((item) => {
      item.classList.remove('product-option-card--selected');
    });

  // Add selected class to clicked card
  card.classList.add('product-option-card--selected');

  // Get selected variant ID
  const variantId = radio.value;

  console.log('Selected variant ID:', variantId);

  // Get the product form directly from the input
  const formId = radio.getAttribute('form');

  const productForm = document.getElementById(formId);

  if (!productForm) {
    console.log('Product form not found:', formId);
    return;
  }

  // Find Shopify variant ID input
  const variantInput = productForm.querySelector(
    'input[name="id"]'
  );

  if (!variantInput) {
    console.log('Variant input not found');
    return;
  }

  // Change selected variant
  variantInput.value = variantId;

  console.log('Product form variant changed to:', variantInput.value);

});