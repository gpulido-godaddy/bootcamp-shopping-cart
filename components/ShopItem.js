
import React from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';
import {pink} from '@mui/material/colors';

function ShopItem({ product_id, name, description, price, onAddToCart, image_url, sale_price, is_on_sale, makeup_type }) {
  
  const addToCart = () => {
      onAddToCart({ product_id, name, price, quantity: 1, image_url })
  }
  const color = pink[50];

  if(is_on_sale){
    const temp_price = price;
    price = sale_price;
  
    return( 
      <Card style={{height: "550px", width:"200px"}}>
    <CardMedia
        style={{ height: "170px", width:"200px"}}
        image={image_url}
        title={name}
      />
    <CardContent style={{backgroundColor: color}}>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="h6">{makeup_type}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
      <br/>
      <Typography variant="subtitle1">This item is on sale from {temp_price} to</Typography>
      <Typography variant="h6">{sale_price}</Typography>
    </CardContent>
    <CardActions>
    <Button onClick={addToCart} color="inherit">Add To Cart</Button>
      </CardActions>
    </Card>
    )
  }

  return (
    
    <Card style={{height: "550px", width:"200px"}}>
    <CardMedia
        style={{ height: "170px", width:"200px"}}
        image={image_url}
        title={name}
      />
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
      <Typography variant="h6">{price}</Typography>
    </CardContent>
    <CardActions>
    <Button onClick={addToCart} color="inherit">Add To Cart</Button>
      </CardActions>
    </Card>
);
}

export default ShopItem;