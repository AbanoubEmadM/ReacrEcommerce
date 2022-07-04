import React from "react";
import {Grid} from '@material-ui/core';
import Product from "./product/Product";

const Products = ({products , onAddToCart}) => {
    return(
        <main>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product)=>( 
                <Grid item key={product.id} xs={12} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
    ))}
        </Grid>
    </main>
    )
}
export default Products