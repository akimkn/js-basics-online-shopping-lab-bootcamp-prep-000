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
      var price = parseInt(objectN[key])
      result = result + price
    }
  }
  return result
  // write your code here
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(`${item}`)) {
      cart.splice(i,1); break;
      return cart;
    } else (console.log('That item is not in your cart.'));
  }
  return cart
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
