import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$5",
    image:
      "https://cdn.mec.ca/medias/sys_master/high-res/high-res/9058101493790/5060876-GSP05.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook.",
    price: "$10",
    image:
      "https://external.webstorage.gr/Product-Images/1441076/apple-macbook-pro-16-spacegray-1000-1441076.jpg",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
