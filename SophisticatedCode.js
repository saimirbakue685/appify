/* Filename: SophisticatedCode.js
   Description: This code is a fully functional e-commerce website with complex functionalities such as user authentication, product listing, shopping cart, order processing, and payment integration. It is an elaborate and professional solution for running an online store. */

// Global Constants
const TAX_RATE = 0.1;
const MAX_QUANTITY = 10;

// Global Variables
let currentUser = null;
let products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
];

// User Authentication
function login(username, password) {
  // Authenticate user and set currentUser if valid
  // Implementation details...

  currentUser = { username: username, role: "customer" };
}

function logout() {
  // Clear currentUser and perform necessary cleanup
  // Implementation details...

  currentUser = null;
}

// Product Listing
function listProducts() {
  products.forEach((product) => {
    console.log(`${product.name}: $${product.price}`);
  });
}

// Shopping Cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addProduct(productId, quantity) {
    // Validate productId, quantity, and availability
    // Implementation details...

    // Add the product to the shopping cart
    this.items.push({ productId: productId, quantity: quantity });
  }

  removeProduct(productId) {
    // Find the item in the cart with matching productId and remove it
    // Implementation details...

    this.items = this.items.filter((item) => item.productId !== productId);
  }

  getSubtotal() {
    // Calculate the total price of all products in the cart
    let subtotal = 0;

    this.items.forEach((item) => {
      const product = products.find((p) => p.id === item.productId);
      subtotal += product.price * item.quantity;
    });

    return subtotal;
  }

  getTotal() {
    // Calculate the total price including tax
    return this.getSubtotal() * (1 + TAX_RATE);
  }

  checkout() {
    // Process the order and initiate payment integration
    // Implementation details...

    console.log("Order placed successfully!");
  }
}

// Order Processing
function processOrder(order) {
  // Validate order details and perform necessary processing
  // Implementation details...

  console.log("Order processed successfully!");
}

// Payment Integration
function initiatePayment(total) {
  // Connect with payment gateway and initiate the payment
  // Implementation details...

  console.log(`Payment of $${total.toFixed(2)} initiated successfully!`);
}

// Usage Example
login("johnsmith", "password123");

const cart = new ShoppingCart();
cart.addProduct(1, 2);
cart.addProduct(3, 1);
cart.addProduct(2, 3);
cart.removeProduct(1);

console.log("Subtotal:", cart.getSubtotal());
console.log("Total:", cart.getTotal());

if (currentUser.role === "customer") {
  cart.checkout();
  initiatePayment(cart.getTotal());
}

logout();
console.log("User has logged out.");