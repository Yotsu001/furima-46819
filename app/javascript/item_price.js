window.addEventListener('turbo:load', () => {
  const priceInput = document.getElementById('item-price');

  priceInput.addEventListener("input", () => {
   console.log("イベント発火");
})

  const taxpriceDisplay = document.getElementById('add-tax-price');
  const profitDisplay = document.getElementById('profit');
});