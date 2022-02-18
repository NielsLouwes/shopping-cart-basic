import React from 'react';

function Basket({ cartItems, onAdd }) {
  return (
    <aside className="block col-1">
      <h2> Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
    </aside>
  );
}

export default Basket;
