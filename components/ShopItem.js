
import React from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';

function ShopItem({ product_id, name, description, price, onAddToCart, image_url }) {
  
  const addToCart = () => {
      onAddToCart({ product_id, name, price, quantity: 1, image_url })
  }

  return (
    
    <Card style={{height: "400px"}}>
    <CardMedia
        style={{ height: "140px"}}
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