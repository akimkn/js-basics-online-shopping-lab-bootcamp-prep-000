var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var wishlist = {[item]: Math.floor((Math.random() * 100)) + 1}
  cart.push(wishlist)
  console.log(`${item} has been added to your cart.`)
  return cart
 // write your code here
}

function viewCart() {
  if (cart = []) {
    console.log('Your shopping cart is empty.')
  }
  if (cart.length = 1) {
    var current = cart
    console.log (`In your cart, you have ${[current]}`)
    }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
