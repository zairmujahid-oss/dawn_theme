document.addEventListener('change', function (event) {

  const radio = event.target.closest(
    '.product-option-card input[type="radio"]'
  );

  if (!radio) return;

  const card = radio.closest('.product-option-card');

  // 1. Remove selected state from all cards
  document.querySelectorAll('.product-option-card').forEach((item) => {
    item.classList.remove('product-option-card--selected');
  });

  // 2. Select clicked card
  card.classList.add('product-option-card--selected');

  // 3. Get variant ID
  const variantId = radio.value;

  console.log('Selected variant:', variantId);

  // 4. Find product form
  const formId = radio.getAttribute('form');
  const productForm = document.getElementById(formId);

  if (!productForm) {
    console.log('Product form not found');
    return;
  }

  // 5. Change Shopify variant ID
  const variantInput = productForm.querySelector('input[name="id"]');

  if (variantInput) {
    variantInput.value = variantId;

    variantInput.dispatchEvent(
      new Event('change', { bubbles: true })
    );
  }

  // 6. Get the image URL from the selected card
  const variantImage = card.querySelector(
    '.product-option-card__image img'
  );

  if (!variantImage) {
    console.log('Variant image not found');
    return;
  }

  const newImageSrc = variantImage.currentSrc || variantImage.src;

  console.log('Changing main image to:', newImageSrc);

  // 7. Find the main product image
  const mainImage = document.querySelector(
    '.product__media-wrapper .product__media img'
  );

  if (!mainImage) {
    console.log('Main product image not found');
    return;
  }

  // 8. Change main image
  mainImage.src = newImageSrc;
  mainImage.srcset = '';

});
const selectedVariant = variants.find(variant => {
  return variant.options.every((option, index) => {
    return option === selectedOptions[index];
  });
});

// 2. Change price
if (selectedVariant) {
  priceElement.textContent = Shopify.formatMoney(
    selectedVariant.price,
    window.Shopify.money_format
  );
}