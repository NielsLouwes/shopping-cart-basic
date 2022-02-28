import Main from './components/Main';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
