// let count = 0;

// function addToCart() {
//   count++;
//   document.getElementById("cart-count").innerText = count;
// }



let count = 0;

function addToCart() {
  count++;
  document.getElementById("cart-count").innerText = count;
}

function goToShop() {
  window.location.href = "shop.html";
}


let cart = []; // cart array

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  displayCart();
}

function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = ''; // reset

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `${item.name} - ₹${item.price} 
                     <button onclick="removeFromCart(${index})">Remove</button>`;
    cartContainer.appendChild(div);
  });

  if(cart.length === 0) {
    cartContainer.innerHTML = 'Cart is empty';
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}


app.post('/add-to-cart', (req, res) => {
  const { productId, name, price } = req.body;

  if (!req.session.cart) req.session.cart = [];
  req.session.cart.push({ productId, name, price });

  res.json({ success: true, cart: req.session.cart });
});

app.get('/cart', (req, res) => {
  res.json({ cart: req.session.cart || [] });
});