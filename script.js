document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function() {
      const quantityEl = this.previousElementSibling;
      let quantity = parseInt(quantityEl.textContent);
      quantityEl.textContent = ++quantity;
      updateTotal();
    });
  });
  
  document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', function() {
      const quantityEl = this.nextElementSibling;
      let quantity = parseInt(quantityEl.textContent);
      if (quantity > 1) quantityEl.textContent = --quantity;
      updateTotal();
    });
  });
  
  function updateTotal() {
    const productPrices = [1930, 1455];
    const quantities = document.querySelectorAll('.qty');
    let subtotal = 0;
    
    quantities.forEach((qtyEl, index) => {
      subtotal += productPrices[index] * parseInt(qtyEl.textContent);
    });
    
    document.querySelector('.summary-item p:last-child').textContent = `$${subtotal}`;
    const total = subtotal + 20;
    document.querySelector('.summary-total p:last-child').textContent = `$${total}`;
  }
  