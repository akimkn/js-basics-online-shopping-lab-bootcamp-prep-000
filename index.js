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
    console.log (`In your cart, you have ${cart[item][0]} at ${Object.values(cart)[0]}`)
    }
  // write your code here
}

function total() {
  var result = 0
  for (var element in Object.keys(cart)) {
    var objectN = cart[element]
    for (var key in objectN) {
      var price = objectN[key]
    }
    result + price
  }
  return result
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
