import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, } from "@material-ui/core"
import useStyles from "../styles"

const Cartitem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
  const classes = useStyles();

  console.log(item)
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4" >{item.name}</Typography>
                <Typography variant="h5" >{item.line_total.formatted_with_symbol}</Typography>


            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} type="button" size="small" >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} type="button" size="small" >+</Button>

                </div>
            <Button onClick={() => onRemoveFromCart(item.id)} type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default Cartitem