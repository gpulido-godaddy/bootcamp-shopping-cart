import React from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';

function CartItem({id, name, price, quantity, image_url,onDeleteFromCart}) {
  
  const deleteFromCart = () => {
    onDeleteFromCart(id)
  }
  return (
    <Card styles={{height: "400px",width:"100px"}}>
      <CardMedia
        style={{ height: "100px" ,width:"600px"}}
        image={image_url}
        title={name}
      />
      <div>
      
        <CardContent styles={{height: "400px",width:"150px"}}>
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