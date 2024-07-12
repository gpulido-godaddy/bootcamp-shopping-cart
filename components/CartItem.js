import React from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';

function CartItem({product_id, id, image_url, name, price, quantity, onDeleteFromCart}) {
  
  const deleteFromCart = () => {
    onDeleteFromCart(id)
  }
  return (
    <Card styles={{height: "400px"}}>
      <div>
      <CardMedia
        styles={{ height: "140px"}}
        image={image_url}
        title={name}
      />
        <CardContent>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h3">${price}</Typography>
          <Typography variant="h6">Quantity: {quantity}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={deleteFromCart} color="secondary">Remove cart item</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem;