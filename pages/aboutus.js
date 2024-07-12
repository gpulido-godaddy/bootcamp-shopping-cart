import React from 'react';
import Head from '../components/head';
import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles

// Define a styled component for the buttons with a pretty pink color
const CustomButton = styled(Button)({
  marginRight: '8px', 
  marginTop: '8px',
  textTransform: 'none', 
  backgroundColor: '#985277', 
  color: '#ffffff', 
  '&:hover': {
    backgroundColor: '#f50057', 
  },
});

export const AboutUsPage = (props) => {
  return (
    <Container>
      <Head title='About Us' />

      <Typography variant="h2">About Radiant Beauty</Typography>
      <Typography variant="h4">Our Mission</Typography>
      <Typography variant="body1">
        We are a passionate group of five girls who came together with a shared love for makeup and a vision to create a brand that celebrates diversity, creativity, and individuality. Our journey began with a simple idea: to offer high-quality makeup products that empower everyone to express their unique beauty.
        <br /><br />
        At Radiant Beauty, we believe in beauty that goes beyond skin deep. Our products are meticulously curated and tested to ensure they not only enhance your natural features but also inspire confidence and self-expression. From vibrant eyeshadow palettes to luxurious lipsticks, each item is crafted with care and designed to cater to all skin tones and preferences.
        <br /><br />
        Driven by our commitment to inclusivity and innovation, we are dedicated to staying ahead of trends and delivering beauty solutions that exceed expectations. Join us as we redefine beauty standards and celebrate the diversity of our community, one makeup product at a time.
      </Typography>

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