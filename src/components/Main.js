import React, { useState, useEffect } from 'react';
import Product from './Product';
import Header from './Header';
import data from '../data';

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

function Main() {
  const { products } = data;
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
      );
    }
  };
  return (
    <main className="block col-2">
      <Header
        countCartItems={cartItems.length}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product onAdd={onAdd} key={product.id} product={product}>
            {' '}
          </Product>
        ))}
      </div>
    </main>
  );
}

export default Main;
