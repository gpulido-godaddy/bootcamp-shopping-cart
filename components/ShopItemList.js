import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import ShopItem from './ShopItem';
import { Description } from '@mui/icons-material';

function ShopItemList() {

  // this is the state we will use to hold the response from the api
  const getProductsUrl = "http://localhost:8000/v1/products" ;
  const addToCartUrl = "http://localhost:8000/v1/cartitems";
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(async () => {
    const response = await fetch(getProductsUrl,{ method: 'GET'});
    const json = await response. json();
    console.log(json);
    setProducts (json) 
  }, []) 

  const handleAddToCart = async (product) => {
    /* add product to cart via api */
    /* redirect to the cart page */
  }

        // Add your ShoppingItem components here! 
       // How should you iterate over the list of products?  
       // Hint: map() function for Arrays 
  return (
    <Grid container direction="row" spacing={1}>
       {products.map(product => 
        <Grid item xs>
          <ShopItem
            key={product.id}
            product_id={product.id}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            price={product.price}
            is_on_sale={product.is_on_sale}
            sale_price={product.sale_price}
            onAddToCart={handleAddToCart}>
          </ShopItem>
        </Grid>
       )}
    </Grid>
  )
}

export default ShopItemList;