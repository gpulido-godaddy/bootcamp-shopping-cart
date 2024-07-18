/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Link from 'next/link';
import CartItemList from '../components/CartItemList';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartQuantity } from '../components/ShopItem.js';

export const CartPage = (props) => (
    <Container>
      <Head title='Cart'/>
      <nav className="carttopnav">
        <Link href="/sales" passHref>Sales</Link>
        <Link href="/aboutus" passHref>About Us</Link>
        <Link href="/shop" passHref>Return to Shop</Link>
        <Link href="/cart" passHref>
        <IconButton size="large" aria-label="show number of items added" color="inherit">
            <Badge badgeContent={cartQuantity} color="error">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
        </Link>
      </nav>
      
        <Typography variant="h1">My Cart</Typography>

        <CartItemList
      />
      
    </Container>
  
  );

export default CartPage;