import React from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography, IconButton, Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartItem({id, name, price, quantity, image_url,onDeleteFromCart, onDecreaseQuantity, onIncreaseQuantity}) {
  
  const deleteFromCart = () => {
    onDeleteFromCart(id)
  }

  const increaseQuantity = () => {
    onIncreaseQuantity(id);
  };

  const decreaseQuantity = () => {
    onDecreaseQuantity(id);
    
  };

  return (
    <Card styles={{height: "150px",width:"70px"}}>
      <CardMedia
        style={{ height: "280px",width:"300px"}}
        image={image_url}
        title={name}
      />
      <div>
      
      <CardContent>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h3">${price}</Typography>
          <Typography variant="h6">Quantity: {quantity}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1" sx={{ mx: 2 }}>
              {quantity}
            </Typography>
            <IconButton color="inherit" onClick={increaseQuantity}>
              <AddIcon />
            </IconButton>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={deleteFromCart} color="inherit">Remove cart item</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem;