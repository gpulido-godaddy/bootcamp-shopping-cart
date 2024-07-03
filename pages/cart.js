/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Link from 'next/link';
import CartItemList from '../components/CartItemList';

export const CartPage = (props) => (
    <Container>
      <Head title='Cart'/>
      
        <Typography variant="h1">My Cart</Typography>   
        <CartItemList
      />
      <div>
        <Link href="/shop">Forgot something? Return to shop!</Link>
      </div>
      
    </Container>
  
  );

export default CartPage;