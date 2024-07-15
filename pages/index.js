import React from "react";
import Head from "../components/head";
import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles"; // Import styled from @mui/material/
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

// Define a styled component for the buttons
const CustomButton = styled(Button)({
  marginRight: "8px",
  marginTop: "8px",
  textTransform: "none",
  backgroundColor: "#ce6a85",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#985277",
  },
});

export const IndexPage = (props) => (
  <div>
    <Head title="Home" />
    <div>
      <nav class="indextopnav">
        <Link href="/shop" passHref>
          Shop
        </Link>
        <Link href="/sales" passHref>
          Category1
        </Link>
        <Link href="/aboutus" passHref>
          About Us
        </Link>
        <Link href="/cart" passHref>
          <IconButton size="large" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </nav>
    </div>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      >
      <img src="http://localhost:8080/images/logo.png"/>
      </Box>
    <h1>Radiant Beauty</h1>
    <div>
      <Link href="/cart" passHref>
        <CustomButton variant="contained"> Return to cart </CustomButton>
      </Link>
      <div>
        <Link href="/shop" passHref>
          <CustomButton variant="contained"> Return to shop</CustomButton>
        </Link>
        <Link href="/aboutus" passHref>
          <CustomButton variant="contained">
            Learn about our company!
          </CustomButton>
        </Link>
      </div>
    </div>
  </div>
);

export default IndexPage;
