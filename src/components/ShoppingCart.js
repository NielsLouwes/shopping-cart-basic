import React from 'react';

// TODO
//  1. map over shopping cartItem component
// 2. create cartItem component

function Checkout() {
  return (
    <main>
      <div className="shopping-cart-overview">
        <h2>Shopping Cart</h2>
      </div>
      <aside>
        <h2>Total Price</h2>
        <p>Subtotal </p>
        <p>Shipping</p>
        <hr></hr>
        <p>Total Price (including tax)</p>
      </aside>
    </main>
  );
}

export default Checkout;
