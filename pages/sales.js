import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Link from 'next/link';
import SalesList from '../components/SalesList';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Sales = (props) => (
  <Container>
    <Head title='Sales'/>
      <nav class="category1topnav">
        <Link href="/shop" passHref>Return to Main Shop</Link>
        <Link href="/aboutus" passHref>About Us</Link>
        <Link href="/cart" passHref>
          <IconButton size="large" aria-label="show 1 new item" color="inherit">
            <Badge badgeContent={1} color="error">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
        </Link>
      </nav>
      <Typography variant="h1">Sales</Typography> 
      <br/> 
      <SalesList
    />

  </Container>

);

export default Sales;