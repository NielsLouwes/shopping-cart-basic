import React from 'react';

function Header({ countCartItems }) {
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div className="cart-sign-in">
        <a href="#/cart">Cart {countCartItems ? <button>{countCartItems}</button> : ''}</a>{' '}
        <a href="#/signin">Sign In</a>
      </div>
    </header>
  );
}

export default Header;
