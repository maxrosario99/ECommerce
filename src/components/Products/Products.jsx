import React from 'react';
import {Grid} from "@material-ui/core";


import Product from "./Product";

const products = [
    {
        id: 1, name: "Shoes", description: "Running Shoes", price:"$5", image: "https://i5.walmartimages.com/seo/2022-Apple-MacBook-Pro-Laptop-M2-chip-13-inch-Retina-Display-8GB-RAM-512GB-SSD-Storage-Touch-Bar-Backlit-Keyboard-FaceTime-HD-Camera-Works-iPhone-iPa_59254575-0ad4-4bac-bb19-a98d170b61d2.a845feb86e81f0aae7db0539c8ee3691.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
        id: 2, name: "Macbook", description: "Apple Macbook", price:"10" ,image: "https://i5.walmartimages.com/seo/2022-Apple-MacBook-Pro-Laptop-M2-chip-13-inch-Retina-Display-8GB-RAM-512GB-SSD-Storage-Touch-Bar-Backlit-Keyboard-FaceTime-HD-Camera-Works-iPhone-iPa_59254575-0ad4-4bac-bb19-a98d170b61d2.a845feb86e81f0aae7db0539c8ee3691.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"

    }
]


const Products = (onAddToCart) => {
    return (
  <main>
    <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />

            </Grid>
        
        ))}

    </Grid>
  </main>)
}

export default Products