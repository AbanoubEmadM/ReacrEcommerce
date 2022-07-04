import React from 'react'
import {Container , Typography , Button , Grid} from '@material-ui/core'
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
const Cart = ({cart , handelUpdataQty , handleRemoveCart , handleEmptyCart}) => {
    const classes = useStyles();
    
    const EmptyCart = () => ( 
        <Typography variant="subtitle1">
            <Link to="/" className={classes.link} >Nothing To Show Go Back Add Items!</Link>
        </Typography>
    )
    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} onRemoveCart={handleRemoveCart} onUpdateQty={handelUpdataQty}/>
                </Grid>
            ))}
        </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    SubTotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button onClick={handleEmptyCart} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Card</Button>
                    <Button component={Link} path to='/checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )
    if(!cart.line_items) return 'Loading...'
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}
export default Cart