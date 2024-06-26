import React from 'react';

import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart} from "@material-ui/icons"
import useStyles from "./styles"
const Product = ( {product, onAddtoCart}) => {
    const classes = useStyles();
    // console.log(product)
    const handleAddToCart = () => onAddtoCart(product.id, 1)
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
            <div className='classes.cardContent'>
                <Typography variant="h5" gutterBottom>
                    {product.name}

                </Typography>
                <Typography variant="h5" gutterBottom>
                    {product.price.formatted_with_symbol}

                </Typography>

            </div>
            <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                <AddShoppingCart />

            </IconButton>


        </CardActions>
    </Card>
  )
}

export default Product