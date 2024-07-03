import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Link from 'next/link';
import ShopItemList from '../components/ShopItemList';

export const ShopPage = (props) => (
  <Container>
    <Head title='Home'/>
    
      <Typography variant="h1">My Shop</Typography>   
      <ShopItemList
    />
    <div>
      <Link href="/cart">View cart</Link>
    </div>
    
  </Container>

);

export default ShopPage;
