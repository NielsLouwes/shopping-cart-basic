import Header from './components/Header';
import Main from './components/Main';
import data from './data';
import { useState } from 'react';
import { Checkbox } from '@mui/material';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

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
    <div className="App">
      <Header
        countCartItems={cartItems.length}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Checkbox />
      </div>
    </div>
  );
}

export default App;
