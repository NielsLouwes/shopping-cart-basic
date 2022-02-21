import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

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

function Header({ countCartItems }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div className="cart-sign-in">
        <a href="#/cart" onClick={handleOpen}>
          Cart {countCartItems ? <button>{countCartItems}</button> : ''}
        </a>{' '}
        <a href="#/signin">Sign In</a>
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
          <Divider style={{ marginTop: '10px' }} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your cart is empty.
          </Typography>
        </Box>
      </Modal>
    </header>
  );
}

export default Header;
