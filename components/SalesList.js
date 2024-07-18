import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';
import SalesItem from './SalesItem';

function SalesList() {

  // this is the state we will use to hold the response from the api
  const addToCartUrl = "http://localhost:8000/v1/cartitems";
  const getProductsListUrl = "http://localhost:8000/v1/products" ;
  const [saleProducts, setSaleProducts] = useState([]);
  const router = useRouter();

  useEffect( () => {
    async function update(){
    const response = await fetch(getProductsListUrl,{ method: 'GET'});
    const json = await response.json();
    setSaleProducts (json);
    }
    update();
  }, []);

  const handleAddToCart = async (product) => {
    const body = JSON.stringify(product);
    const response = await fetch(addToCartUrl, { method: 'POST', body, headers: { 'content-type': 'application/json' }});
    router.push("/cart")
  }
  return (
    <Grid container direction="row" spacing={5} sx={{ m: 0.5 }}>
       {saleProducts.map(product => 
       <Grid
       display="flex"
       minHeight="60vh"
       >
          <SalesItem
            key={product.id}
            product_id={product.id}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            price={product.price}
            is_on_sale={product.is_on_sale}
            sale_price={product.sale_price}
            onAddToCart={handleAddToCart}>
          </SalesItem>

        </Grid>
       )}
    </Grid>
  )
}

export default SalesList;