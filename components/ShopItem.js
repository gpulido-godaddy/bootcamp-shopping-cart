
import React, { useState } from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';
import {pink} from '@mui/material/colors';

function ShopItem({ product_id, name, description, price, onAddToCart, image_url, sale_price, is_on_sale, makeup_type }) {
  
  const addToCart = () => {
      onAddToCart({ product_id, name, price, quantity: 1, image_url })
  }
  const [products, setProducts] = useState([
      {
          product_id:1,
          name:"Christian Louboutin 2 Brushes Face Set",
          description:"Rounded and angled premium face brushes",
          price:82.99,
          is_on_sale:false,
          sale_price:80.99,
          makeup_type:"brushes",
          image_url:"https://us.christianlouboutin.com/media/catalog/product/cache/e1b9885bd1bf6beec4564faa4f1294da/8/4/8435415060196-8435415060196-main_image-ecommerce-christianlouboutin-facebrushes-8220014_m024_1_1200x1200.jpg"
      },
  
        {product_id:2,
          name:"Christian Louboutin Abracadabra La Palette",
          description:"Refillable 6-eyeshadow palette with buildable & highly pigmented shades",
          price:80.99,
          is_on_sale:true,
          sale_price:75.99,
          makeup_type:"eyeshadow",
          image_url:"https://us.christianlouboutin.com/media/catalog/product/cache/c8e9b72c512eaa31cd76a11d9f425a9e/8/4/8435415040877-8435415040877-main_image-ecommerce-christianlouboutin-rosepigallepalette-8500128_x102_1_1200x1200.jpg"
        },
      {
        product_id:3,
          name:"Christian Louboutin Rouge Satin Lipstick",
          description:"More than satin, an ultra-silky creamy texture that offers intense colour & luminosity with the perfect glide",
          price:110.99,
          is_on_sale:false,
          sale_price:103.99,
          makeup_type:"lipstick",
          image_url:"https://us.christianlouboutin.com/media/catalog/product/cache/c8e9b72c512eaa31cd76a11d9f425a9e/8/4/8435415069038-8435415069038-main_image-ecommerce-christianlouboutin-boboblush-8500008_k116_1_1200x1200.jpg"
      },
      {
        product_id:4,
          name:"Tom Ford Eye Color Quad",
          description:"Quartet of multi-finish eyeshadows",
          price:99.99,
          is_on_sale:true,
          sale_price:92.99,
          makeup_type:"eyeshadow",
          image_url:"https://sdcdn.io/tf/tf_sku_T1EL04_2000x2000_0.png?height:700px&options:BackgroundColor%3DF2F2F2&width:700px"
      },
      {
        product_id:5,
          name:"Tom Ford Shade And Illuminate Blush",
          description:"A two-in-one powder cheek color with semi-matte and radiant hues",
          price:102.99,
          is_on_sale:false,
          sale_price:99.99,
          makeup_type:"blush",
          image_url:"https://sdcdn.io/tf/tf_sku_T9FX05_2000x2000_0.png?height:700px&options:BackgroundColor%3DF2F2F2&width:700px"
      },
      {
        product_id:6,
          name:"Tom Ford Shade And Illuminate Soft Radiance Primer SPF 25",
          description:"A hydrating skincare-infused primer to enhance face architecture",
          price:120.99,
          is_on_sale:true,
          sale_price:118.99,
          makeup_type:"primer",
          image_url:"https://sdcdn.io/tf/tfb_sku_TA6101_2000x2000_0.png?height:700px&options:BackgroundColor%3DF2F2F2&width:700px"
      },
      {
        product_id:7,
          name:"Tom Ford Bronzer Brush 05",
          description:"An all-over blending brush creates a seamless makeup look",
          price:127.99,
          is_on_sale:true,
          sale_price:124.99,
          makeup_type:"brush",
          image_url:"https://sdcdn.io/tf/tf_sku_T6C701_2000x2000_0.png?height:700px&options:BackgroundColor%3DF2F2F2&width:700px"
      },
      {
        product_id:8,
          name:"E.L.F Cosmetics SRSLY Satin Lipstick - Pepper",
          description:"Moisturizing lipstick that delivers smooth, buildable color and a satin finish",
          price:12.99,
          is_on_sale:false,
          sale_price:8.99,
          makeup_type:"lipstick",
          image_url:"https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw9fac88e9/2020/LPSTK_29696_OpenA_R.jpg?sfrm:png&sw:780&q:90"
      },
      {
        product_id:9,
          name:"E.L.F Cosmetics SRSLY Satin Lipstick - Sugarplum",
          description:"Moisturizing lipstick that delivers smooth, buildable color and a satin finish",
          price:12.99,
          is_on_sale:false,
          sale_price:8.99,
          makeup_type:"lipstick",
          image_url:"https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw3eff8991/2020/LPSTK_29691_OpenA_R.jpg?sfrm:png&sw:780&q:90"
      },
      {
        product_id:10,
          name:"E.L.F Cosmetics Precise Blending Brush",
          description:"Small, tapered makeup brush designed for precise and targeted eyeshadow application and blending",
          price:4.99,
          is_on_sale:false,
          sale_price:3.99,
          makeup_type:"brush",
          image_url:"https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dwcc567c59/2023/PreciseBlendingBrush/81284_OPENA_R.jpg?sfrm:png&sw:780&q:90"
      },
      {
        product_id:11,
          name:"Rare Beauty Liquid Blush - Nude Mauve",
          description:"Weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush",
          price:26.99,
          is_on_sale:true,
          sale_price:23.99,
          makeup_type:"blush",
          image_url:"https://www.rarebeauty.com/cdn/shop/products/pdp-sku-Liquid-Blush-Dewy-Hope.jpg?v:1645133400"
      },
      {
        product_id:12,
          name:"Rare Beauty Liquid Blush - true Red",
          description:"Weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush",
          price:26.99,
          is_on_sale:false,
          sale_price:23.99,
          makeup_type:"blush",
          image_url:"https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Liquid-Blush-Dewy-GRATEFUL-SKU.jpg?v:1645133400"
      },
      {
        product_id:13,
          name:"Rare Beauty Liquid Blush - Hot Pink",
          description:"Weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush",
          price:26.99,
          is_on_sale:false,
          sale_price:23.99,
          makeup_type:"blush",
          image_url:"https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Liquid-Blush-Dewy-LUCKY-SKU.jpg?v:1645133400"
      },
      {
        product_id:14,
          name:"Rare Beauty Liquid Blush - Muted Peach",
          description:"Weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush",
          price:26.99,
          is_on_sale:true,
          sale_price:23.99,
          makeup_type:"blush",
          image_url:"https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Liquid-Blush-Dewy-JOY-SKU.jpg?v:1645133400"
      },
      {
        product_id:15,
          name:"Rare Beauty Soft Pinch Luminous Powder Blush - Light Warm Pink",
          description:"Radiant blush that lights up all skin tones with airy, seamless, and silky color",
          price:26.99,
          is_on_sale:false,
          sale_price:23.99,
          makeup_type:"blush",
          image_url:"https://www.rarebeauty.com/cdn/shop/files/ECOMM-SOFT-PINCH-LUMINOUS-POWDER-BLUSH-CHEER.jpg?v:1710549028"
      },
      {
        product_id:16,
          name:"Rare Beauty Perfect Strokes Longwear Gel Eyeliner",
          description:"Easy-glide, waterproof gel pencil that stays put all day",
          price:20.99,
          is_on_sale:false,
          sale_price:18.99,
          makeup_type:"eyeliner",
          image_url:"https://www.rarebeauty.com/cdn/shop/files/perfect-strokes-gel-liner-true-black-1440x1952.jpg?v:1687367688"
      },
      {
        product_id:17,
          name:"Rare Beauty Stay Vulnerable Liquid Eyeshadow",
          description:"Quick-and-easy eyeshadow that goes from liquid to powder in seconds",
          price:22.99,
          is_on_sale:false,
          sale_price:20.99,
          makeup_type:"eyeshadow",
          image_url:"https://www.rarebeauty.com/cdn/shop/products/Liquid-Eyeshadow-NearlyNeutral-SKU.jpg?v:1609891052"
      },
      {
        product_id:18,
          name:"Estee Lauder Pure Color Eyeshadow Quad",
          description:"Luxe looks, vibrant color, and rich finishes",
          price:70.99,
          is_on_sale:true,
          sale_price:64.99,
          makeup_type:"eyeshadow",
          image_url:"https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PHHT05_640x640_0.jpg"
      },
      {
        product_id:19,
          name:"Estee Lauder Double Wear Zero-Smudge Mascara",
          description:"15-hour staying power with long lashes that last and zero smudge",
          price:39.99,
          is_on_sale:false,
          sale_price:34.99,
          makeup_type:"mascara",
          image_url:"https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_9LL701_640x640_0.jpg"
      },
      {
        product_id:20,
          name:"Estee Lauder Waterproof Lash Multiplying Mascara",
          description:"Outrageous volume, now in waterproof",
          price:39.99,
          is_on_sale:true,
          sale_price:34.99,
          makeup_type:"mascara",
          image_url:"https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_Y9L201_640x640_0.jpg"
      },
      {
        product_id:21,
          name:"Estee Lauder Pure Color Dewy Lip Color",
          description:"Medium coverage in just one swipe",
          price:37.99,
          is_on_sale:false,
          sale_price:34.99,
          makeup_type:"lipstick",
          image_url:"https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_G4DJ01_640x640_0.jpg"
      },
      {
        product_id:22,
          name:"Too Faced Natural Eyes Eyeshadow Palette",
          description:"9 creamy comfortable matte, pearl sparkle shadows",
          price:54.99,
          is_on_sale:true,
          sale_price:51.99,
          makeup_type:"eyeshadow",
          image_url:"https://www.toofaced.com/media/export/cms/products/1000x1000/2f_sku_94047_1000x1000_0.jpg"
      },
      {
        product_id:23,
          name:"Too Faced Plump & Prime Face Plumping Primer Serum",
          description:"Unique serum texture for easy application under makeup",
          price:51.99,
          is_on_sale:true,
          sale_price:49.99,
          makeup_type:"primer",
          image_url:"https://www.toofaced.com/media/export/cms/products/1000x1000/2f_sku_118027_1000x1000_0.jpg"
      },
      {
        product_id:24,
          name:"Too Faced Killer Liner 36 Hour Waterproof Gel Eyeliner Pencil",
          description:"Total control and 36 hour waterproof features",
          price:27.99,
          is_on_sale:false,
          sale_price:25.99,
          makeup_type:"eyeliner",
          image_url:"https://www.toofaced.com/media/export/cms/products/1000x1000/2f_sku_181446_1000x1000_0.jpg"
      },
      {
        product_id:25,
          name:"Too Faced Lady Bold Lipstick",
          description:"Bold, smooth coverage and dramatic color",
          price:31.99,
          is_on_sale:true,
          sale_price:30.99,
          makeup_type:"lipstick",
          image_url:"https://www.toofaced.com/media/export/cms/products/1000x1000/2f_sku_181454_1000x1000_0.jpg"
      }
    
  ]);

  const color = pink[50];
  
  
  const sortProductsByPrice = () => {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  if(is_on_sale){
    const temp_price = price;
    price = sale_price;
  
    return( <div>
      
      <Card style={{height: "550px", width:"200px", backgroundColor: color}}>
    <CardMedia
        style={{ height: "170px", width:"200px"}}
        image={image_url}
        title={name}
      />
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      
      <Typography variant="subtitle2">{description}</Typography>
      
      <br/>
      <Typography variant="subtitle1">This item is on sale from ${temp_price} to</Typography>
      <Typography variant="h6">${sale_price}</Typography>
    </CardContent>
    <CardActions>
    <Button onClick={addToCart} color="inherit">Add To Cart</Button>
      </CardActions>
    </Card>
    </div>
    )
  }

  return (
    <div>
    <Card style={{height: "550px", width:"200px"}}>
    <CardMedia
        style={{ height: "170px", width:"200px"}}
        image={image_url}
        title={name}
      />
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
      <Typography variant="h4">{makeup_type}</Typography>
      <Typography variant="h6">${price}</Typography>
    </CardContent>
    <CardActions>
    <Button onClick={addToCart} color="inherit">Add To Cart</Button>
      </CardActions>
    </Card>
    </div>
);
}

export default ShopItem;