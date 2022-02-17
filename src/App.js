import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import React from 'react';
import data from './data';

function App() {
  const { products } = data;
  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <Main products={products}></Main>
        <Basket />
      </div>
    </React.Fragment>
  );
}

export default App;
