/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material'
import CartItem from './CartItem';

function CartItemList() {
  const cartURL = "http://localhost:8000/v1/cartitems";
  const [cartItems, setCartItems] = useState([]); 

  const preRoundSubtotal = cartItems.map(cartItem => cartItem.quantity * cartItem.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const preRoundTax = preRoundSubtotal * .07;
  const tax = parseFloat(preRoundTax.toFixed(2))
  const preRoundtotal = preRoundSubtotal + (tax);
 
  const subtotal = parseFloat(preRoundSubtotal.toFixed(2));
  const shipping = 7;
  var total = parseFloat(preRoundtotal.toFixed(2));
  
  useEffect( () => {
    async function update(){
    const response = await fetch(cartURL,{method: 'GET'});
    const json = await response.json();
    setCartItems(json);
    }
    update();
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);
  
  useEffect(() => {
  }, [cartItems]);

  const handleDeleteFromCart = async (id) => {
    const response = await fetch(`http://localhost:8000/v1/cartitems/${id}`, { method: 'DELETE' })
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id != id);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity =  async (id) => {
    const response = await fetch(`http://localhost:8000/v1/cartitems/${id}`, {
      method: 'PATCH',headers: {'Content-Type': 'application/json',
      },body: JSON.stringify({ quantity: cartItems.find(item => item.id === id).quantity + 1 }),});
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = async (id) => {
    const response = await fetch(`http://localhost:8000/v1/cartitems/${id}`, {
      method: 'PATCH', headers: {'Content-Type': 'application/json',}, body: JSON.stringify({ quantity: cartItems.find(item => item.id === id).quantity - 1 }),
    });
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <div>
      <Grid container direction="column" spacing={3}>
        {cartItems.map(cartItem =>
          <Grid item xs>
            <CartItem
              image_url={cartItem.image_url}
              product_id={cartItem.product_id}
              name={cartItem.name}
              id={cartItem.id}
              quantity={cartItem.quantity}
              price={cartItem.price}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onDeleteFromCart={() => handleDeleteFromCart(cartItem.id)}
              />
          </Grid>
        )}
      </Grid>
      <br/>
      <div>
        <Typography variant="h2">
          Subtotal: ${subtotal} 
          <br/>
          Tax: ${tax}
          </Typography>
          {total < 50 ? (<Typography variant="h2"> Total with Shipping: ${total = total + shipping}</Typography>) : (<Typography variant="h2">Total: ${total}</Typography>)}

        
        <Typography variant="h6">
          <br/>
          Please note shipping will be charged if your order is below $50.
          Please note 7% tax rate.
        </Typography>
      </div>
      <br/>
    </div>
  );
}

export default CartItemList;