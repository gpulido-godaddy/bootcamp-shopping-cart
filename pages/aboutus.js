import React from "react";
import Head from "../components/head";
import { CardMedia, Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles"; // Import styled from @mui/material/
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TeamImages from "../components/TeamImages";

const CustomTitle = styled(Typography)({
  marginTop: "16px",
  color: "#ce6a85",
});

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

const ParagraphBackground = styled(Box)({
  backgroundColor: "#efdac9", // Background color for the paragraphs
  padding: "50px",
  borderRadius: "8px",
  width: "100%",
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const AboutUsPage = (props) => {
  return (
    <Container maxWidth="md">
      <Head title="About Us" />
      <nav className="abouttopnav">
        <Link href="/shop" passHref>
          Return to Shop
        </Link>
        <Link href="/cart" passHref>
          <IconButton size="large" aria-label="show 1 new item" color="inherit">
          <Badge variant="dot" color="error" overlap="circular">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
        </Link>
      </nav>
      <CustomTitle variant="h2">About Radiant Beauty</CustomTitle>
      <Typography variant="h4">Our Mission</Typography>
      <ParagraphBackground>
        <Typography variant="body1">
          We are a passionate group of five girls who came together with a
          shared love for makeup and a vision to create a brand that celebrates
          diversity, creativity, and individuality. Our journey began with a
          simple idea: to offer high-quality makeup products that empower
          everyone to express their unique beauty.
          <br />
          <br />
          
          At Radiant Beauty, we believe in beauty that goes beyond skin deep.
          Our products are meticulously curated and tested to ensure they not
          only enhance your natural features but also inspire confidence and
          self-expression. From vibrant eyeshadow palettes to luxurious
          lipsticks, each item is crafted with care and designed to cater to all
          skin tones and preferences. We resell items from a variety of brands that are
          guaranteed to meet your standards.
          <br />
          <br />
          Driven by our commitment to inclusivity and innovation, we are
          dedicated to staying ahead of trends and delivering beauty solutions
          that exceed expectations. Join us as we redefine beauty standards and
          celebrate the diversity of our community, one makeup product at a
          time.
        </Typography>
      </ParagraphBackground>
      <div>
        <Link href="/cart" passHref>
          <CustomButton variant="contained">Return to cart</CustomButton>
        </Link>
        <Link href="/shop" passHref>
          <CustomButton variant="contained">Return to shop</CustomButton>
        </Link>
      </div>
    </Container>
  );
};

export default AboutUsPage;
