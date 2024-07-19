import React from 'react';
import Head from '../components/head';
import { Container, Typography, Button, Box, CardContent, CardHeader, CardMedia, Card } from "@mui/material";
import Link from 'next/link';
import { styled, useTheme} from "@mui/material/styles"; // Import styled from @mui/material/
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
const Background = styled(Box)({
  backgroundColor: "#E7B4C1",
  padding: "10px",
  borderRadius: "8px",
  width: "90%",
  height: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Gap = styled(Box)({
  backgroundColor: "#f8dfe3", 
  padding: "15px",
  borderRadius: "8px",
  width: "90%",
  height: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const makeup_inspo = [{
  img:'https://i.pinimg.com/564x/f9/a8/d4/f9a8d48fff586ba3a8c04bea1dfeec25.jpg'
},{
  img:'https://i.pinimg.com/564x/af/17/d8/af17d8b298ee791bdc89c31b9f3da505.jpg'
},
{
  img: 'https://i.pinimg.com/736x/55/20/6f/55206f025f7accce1bae25c712c292be.jpg'
},
{
  img:'https://i.pinimg.com/736x/72/bc/f6/72bcf683be8a4f436aeac6eff23c422f.jpg'
},
{
  img:'https://i.pinimg.com/474x/70/bd/bf/70bdbf525121be2359def65cece3b5d1.jpg'
},
{
  img:'https://i.pinimg.com/736x/d4/98/dd/d498dd1ade10f6d585ed6820ec2a2cf1.jpg'
},
{
  img:'https://i.pinimg.com/474x/46/a7/dc/46a7dc4f090a408f4a3e311dc921dc61.jpg'
},
{
  img:'https://i.pinimg.com/564x/bc/a6/8e/bca68e0e1890cc9cafb15e2a42b2431e.jpg'
},
{
  img:'https://i.pinimg.com/474x/09/7d/fc/097dfc1aabb93fbd75ed200e4abd8dc1.jpg'
},
{img: 'https://i.pinimg.com/564x/42/6e/2b/426e2b85f86c0355b3b69104bce3f882.jpg'
},
{
  img: 'https://i.pinimg.com/474x/2e/eb/44/2eeb444b5328e1c3437086ca455f98cc.jpg'
},
{
  img: 'https://i.pinimg.com/564x/4c/f0/f1/4cf0f1b594392cc620ca63d78ce0edf9.jpg'
},
{
  img: 'https://i.pinimg.com/474x/d9/37/fc/d937fc16ec77e4a199ae605fc62a6616.jpg'
},
{
  img: 'https://i.pinimg.com/474x/e8/2a/4e/e82a4e5b365a8986d2245fd32f35ac55.jpg'
}
]
export const IndexPage = (props) => (
  
  <div>
    <Head title="Home" />
    <div>
      <nav class="indextopnav">
      <CardMedia
      style={{ height: "150px",
        width: "100px"
              }}
      image = 'https://i.pinimg.com/736x/8a/ad/59/8aad59896b3283acc3ca067f5a07d41b.jpg'
      />
      <CardMedia style={{height: "100px", width: "400px"}}
      image = 'https://i.pinimg.com/736x/26/63/77/26637707a8ff500efb016418fc368d2d.jpg'/>
        <Link href="/shop" passHref>
          Shop
        </Link>
        <Link href="/sales" passHref>
          Sales
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
    <Typography variant ="h1">Radiant Beauty</Typography>
    <div style={{ display: 'flex', justifyContent: 'center', mx:15}}>
    <CardMedia
      sx={{ height: "750px",
        width: "600px",
        mt:5
              }}
              
      image = 'https://i.pinimg.com/564x/73/18/2f/73182fd49b95c1e806e7f4f199d93f77.jpg'
        />
        </div>
         <div>
        <Link href="/shop" passHref>
          <CustomButton sx={{ml:100, px:10}} variant="contained">Shop now</CustomButton>
        </Link>
      </div>
    <Card sx={{ bgcolor:'#E7B4C1',display: 'flex', boxShadow:5, my:5, width:950, height: 250, mx:'auto'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            Why Radiant?
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
          At Radiant Beauty, we're dedicated to creating more than just makeup. 
          We're building a safe, inclusive community within the beauty industry and beyond. 
          Our products are crafted to enhance your natural beauty while embracing what makes you uniquely you.
          </Typography>
        </CardContent>
        <Box sx={{  pl:40 , pb: 40 }}>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://i.pinimg.com/564x/e8/2c/e4/e82ce4992871a125d83d016367a213b3.jpg"
      />
    </Card>
    <div style={{ display: 'flex', justifyContent: 'center', mx:50}}>
    <Background>
    <Typography variant="h3">
      Get inspiration on how to use our products down below
      </Typography>
      </Background>
      </div>
    <div style={{ display: 'flex', justifyContent: 'center', mx:15}}>   
    <Box sx={{ width: 1000, height: 900, overflowY: 'scroll', my:5}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {makeup_inspo.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Gap>
      <Typography>Check our socials!</Typography></Gap>
      </div>
      
    <div style={{ display: 'flex', justifyContent: 'center' }}>    
    <Stack direction="row" spacing={2}>
      <Avatar sx={{bgcolor: "#ce6a85" }}>
        <InstagramIcon/>
      </Avatar>
      <Avatar sx={{bgcolor: "#ce6a85" }}>
        <XIcon />
      </Avatar>
      <Avatar sx={{bgcolor: "#ce6a85" }}>
        <FacebookIcon />
      </Avatar>
      <Avatar sx={{bgcolor: "#ce6a85" }}>
        <MusicNoteIcon />
      </Avatar>
    </Stack>
    </div>
  </div>
);
export default IndexPage







