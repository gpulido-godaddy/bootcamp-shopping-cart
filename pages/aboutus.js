import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Link from 'next/link';

export const AboutUsPage = (props) => (
  <Container>
    <Head title='About Radiant Beauty'/>

      <Typography variant="h1" >About Us</Typography>
    <Typography variant="h2">Our Mission</Typography>
    <Typography variant="body1">
      We are a passionate group of five girls who came together with a shared love for makeup and a vision to create a brand that celebrates diversity, creativity, and individuality. Our journey began with a simple idea: to offer high-quality makeup products that empower everyone to express their unique beauty.

      At Radiant Beauty, we believe in beauty that goes beyond skin deep. Our products are meticulously curated and tested to ensure they not only enhance your natural features but also inspire confidence and self-expression. From vibrant eyeshadow palettes to luxurious lipsticks, each item is crafted with care and designed to cater to all skin tones and preferences.

      Driven by our commitment to inclusivity and innovation, we are dedicated to staying ahead of trends and delivering beauty solutions that exceed expectations. Join us as we redefine beauty standards and celebrate the diversity of our community, one makeup product at a time.
     <img src="girl.jpeg" alt="Selena" width="200" height="200" />
    </Typography>  
    <div>
      <Link href="/cart">Return to cart</Link>
      <br/>

      <Link href="/shop">Return to shop</Link>
    </div>

  </Container>

);

export default AboutUsPage;
