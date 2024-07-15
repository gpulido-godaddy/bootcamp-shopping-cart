import React from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';

function CartItem({id, name, price, quantity, image_url,onDeleteFromCart}) {
  
  const deleteFromCart = () => {
    onDeleteFromCart(id)
  }
  return (
    <Card styles={{height: "150px",width:"70px"}}>
      <CardMedia
        style={{ height: "280px",width:"300px"}}
        image={image_url}
        title={name}
      />
      <div>
      
        <CardContent styles={{height: "200px",width:"150px"}}>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h3">${price}</Typography>
          <Typography variant="h6">Quantity: {quantity}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={deleteFromCart} color="inherit">Remove cart item</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem;