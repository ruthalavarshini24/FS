// Get references to input fields and result div
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const totalDiv = document.getElementById('total');

// Function to calculate and display total
function calculateTotal() {
  const quantity = parseInt(quantityInput.value) || 0;
  const price = parseInt(priceInput.value) || 0;
  const total = quantity * price;
  totalDiv.textContent = "Total Price: " + total;
}

// Add event listeners to inputs
quantityInput.addEventListener('input', calculateTotal);
priceInput.addEventListener('input', calculateTotal);

// Initial calculation
calculateTotal();
