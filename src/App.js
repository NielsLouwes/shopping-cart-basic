// import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';
// import data from './data';
// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

function App() {
  // const { products } = data;
  // const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cartItems));
  // }, [cartItems]);

  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
  //     );
  //   }
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Header
        countCartItems={cartItems.length}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}></Header> */}
      <div className="row">{/* <Main></Main> */}</div>
    </div>
  );
}

export default App;
