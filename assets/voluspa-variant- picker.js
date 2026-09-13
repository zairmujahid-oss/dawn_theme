document.addEventListener('DOMContentLoaded', () => {

  const variantCards = document.querySelectorAll('.product-option-card');

  if (!variantCards.length) return;

  variantCards.forEach((card) => {

    const radio = card.querySelector('input[type="radio"]');

    if (!radio) return;

    radio.addEventListener('change', () => {

      if (!radio.checked) return;

      // Remove selected state from all cards
      variantCards.forEach((item) => {
        item.classList.remove('product-option-card--selected');
      });

      // Select the clicked card
      card.classList.add('product-option-card--selected');

      // Get the selected variant ID
      const variantId = radio.value;

      console.log('Selected variant:', variantId);

      // Find the product form
      const productForm = card.closest('section')?.querySelector(
        'form[action*="/cart/add"]'
      );

      if (!productForm) return;

      // Find Shopify's variant ID input
      const variantInput = productForm.querySelector('input[name="id"]');

      if (!variantInput) return;

      // Change the variant ID
      variantInput.value = variantId;

      // Notify Shopify/Dawn
      variantInput.dispatchEvent(
        new Event('change', { bubbles: true })
      );

    });

  });

});