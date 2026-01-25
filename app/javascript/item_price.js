const price = () => {
  const priceInput = document.getElementById('item-price');
  if (!priceInput) return;

  const addTaxDom = document.getElementById('add-tax-price');
  const profitDom = document.getElementById('profit');

   const calculate = () => {
      const inputPrice = Number(priceInput.value);
      addTaxDom.innerHTML = Math.floor(inputPrice * 0.1);
      profitDom.innerHTML = Math.floor(inputPrice * 0.9);
   };

   calculate();

  if (priceInput.dataset.listener === "true") return;
  priceInput.dataset.listener = "true";

  priceInput.addEventListener('input', calculate);
};

window.addEventListener("turbo:load", price);
window.addEventListener("turbo:render", price);