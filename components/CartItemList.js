/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material'
import CartItem from './CartItem';

function CartItemList() {
  const cartURL = "http://localhost:8000/v1/cartitems";
  const [cartItems, setCartItems] = useState([]); 
  const totalPrice = cartItems.map(cartItem => cartItem.quantity * cartItem.price).reduce((a, b) => a + b, 0)

  useEffect( () => {
    async function update(){
    const response = await fetch(cartURL,{ method: 'GET'});
    const json = await response.json();
    setCartItems(json);
    }
    update();
  }, [])


  return (
    <div>
      <Grid container direction="column" spacing={1}>
        {cartItems.map(cartItem =>
          <Grid item xs>
            <CartItem
              product_id={cartItem.product_id}
              name={cartItem.name}
              id={cartItem.id}
              quantity={cartItem.quantity}
              price={cartItem.price}
              onRemoveCartItem={this.deleteCartItem}
              />
          </Grid>
        )}
      </Grid>
        <Typography variant="h2">
          Total: ${totalPrice}
        </Typography>
    </div>
  );
}

export default CartItemList;