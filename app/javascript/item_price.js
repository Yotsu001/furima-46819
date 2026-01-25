window.addEventListener('turbo:load', () => {
  const priceInput = document.getElementById('item-price');
  if (!priceInput) return;

  const addTaxDom = document.getElementById('add-tax-price');
  const profitDom = document.getElementById('profit');

  priceInput.addEventListener('input', () => {
    const price  = Number(priceInput.value);
    
    addTaxDom.innerHTML = Math.floor(price * 0.1);
    profitDom.innerHTML = Math.floor(price * 0.9);
  });
});