window.addEventListener('turbo:load', () => {
  const priceInput = document.getElementById('item-price');

  priceInput.addEventListener("input", () => {
   const inputValue = priceInput.value;
})

  const taxpriceDisplay = document.getElementById('add-tax-price');
  const profitDisplay = document.getElementById('profit');
});