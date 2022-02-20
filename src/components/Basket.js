import React from 'react';

function Basket({ cartItems, onAdd, onRemove }) {
  return (
    <aside className="block col-1">
      <h2> Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col02">{item.name}</div>
          <div className="col02">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col02 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Basket;