import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { useNavigate, Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const style = {
  position: 'absolute',
  top: '7%',
  left: '70%',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  // border: '1px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4
};

function Header({ countCartItems, cartItems }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const navigate = useNavigate();

  return (
    <header className="row block center">
      <div>
        <a href="/main">
          <h1>Random webshop</h1>
        </a>
      </div>
      <div className="cart-sign-in">
        <ShoppingCartOutlinedIcon onClick={handleOpen} title="cartIcon" />
        {countCartItems ? <div className="button">{countCartItems}</div> : ''}
        <Link to="/login">Sign In</Link>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            style={{ fontWeight: 'bolder', color: 'black' }}
            id="modal-modal-title"
            variant="h5"
            component="h2">
            Shopping cart
          </Typography>
          <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
          <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="cart-amount">
                {' '}
                <div className="cart-item-quanity">{item.qty}x</div>
                <div className="col02">{item.name}</div>
              </div>

              <div className="col02 text-right">${item.price.toFixed(2)}</div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Total Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping</div>
                <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">
                  <strong>Grand Total</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <div className="row">
                <button
                  className="shopping-cart-button"
                  onClick={() => navigate('/shopping-cart')}></button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </header>
  );
}

export default Header;
