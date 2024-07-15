
import React from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';

function SalesItem({ product_id, name, description, price, onAddToCart, image_url, sale_price, is_on_sale, makeup_type}) {
  
  const addToCart = () => {
      onAddToCart({ product_id, name, price, quantity: 1, image_url })
  }
  if (is_on_sale){
    price = sale_price;
    return( 
    <Card style={{height: "500px", width:"200px"}} sx={{ m: 2 }}>
    <CardMedia
        style={{ height: "170px", width:"200px"}}
        image={image_url}
        title={name}
      />
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="h6">{makeup_type}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
      <br/>
      <Typography variant="h6">{sale_price}</Typography>
    </CardContent>
    <CardActions>
    <Button onClick={addToCart} color="inherit">Add To Cart</Button>
      </CardActions>
    </Card>
    );
};
}


export default SalesItem;