/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Link from 'next/link';
import CartItemList from '../components/CartItemList';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartPage = (props) => (
    <Container>
      <Head title='Cart'/>
      <nav class="carttopnav">
        <Link href="/sales" passHref>Sales</Link>
        <Link href="/aboutus" passHref>About Us</Link>
        <Link href="/shop" passHref>Return to Shop</Link>
        <Link href="/cart" passHref>
          <IconButton size="large" aria-label="show 1 new item" color="inherit">
            <Badge badgeContent={1} color="error">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
        </Link>
      </nav>
      
        <Typography variant="h1">My Cart</Typography>
        <div class="cart-quantity cart-column">
          < input class="cart-quantity-input" type="number" value="1" min="1" max="10" />
          <button class="btn btn-danger"
            type="button">REMOVE</button>
        </div>
        <CartItemList
      />
      
    </Container>
  
  );

export default CartPage;