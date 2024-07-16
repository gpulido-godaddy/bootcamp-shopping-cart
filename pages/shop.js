import React from "react";
import Head from "../components/head";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import ShopItemList from "../components/ShopItemList";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ShopPage = (props) => (
  <Container>
    <Head title="Shop" />
    <nav className="shoptopnav">
      <Link href="/sales" passHref>
        Sales
      </Link>
      <Link href="/aboutus" passHref>
        About Us
      </Link>
      <Link href="/cart" passHref>
        <IconButton size="large" aria-label="show 1 new item" color="inherit">
          <Badge badgeContent={1} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </nav>

    <Typography variant="h1">My Shop</Typography>
    <br/> 
    <ShopItemList />
  </Container>
);

export default ShopPage;
