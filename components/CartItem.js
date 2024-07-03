import React from 'react';
import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';

const images = [
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/44957d35-8edb-43cf-b518-457ff48a7e16/Product-grid-WDS.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/4626b5ac-8ac0-4e88-ae38-dd94cb12a89d/Product-grid-Email.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/8f679b96-df22-41fc-afd8-854d47a1c634/Product-grid-Hosting.jpg",
  "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/3b91b99f-57eb-44bd-b2e1-1cfd6529bbfb/feat-ols-your-store-your-way.jpg?impolicy=cms-feature-module"
]

function CartItem({ product_id, name, id, price, quantity, onRemoveCartItem }) {
  
  const removeCartItem = () => {
    onRemoveCartItem(id)
  }

  return (
    <Card styles={{display: 'flex'}}>
      <CardMedia
        styles={{width: 200}}
        image={images[product_id]}
        title={name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h3">{price} x ${quantity}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={removeCartItem} color="secondary">Remove from cart</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem;