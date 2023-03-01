import React, { useEffect } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "./styled";
import { getProductsThunk } from "../../../store/thunks";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProductsSlice } from "../../../store/slices";
import Product from "../product/product";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(selectProductsSlice);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <>
    <Typography variant="h3" component="h1" gutterBottom textAlign="center" marginTop={15}>
      Products
    </Typography>
    <Container>
      <Grid container>
        {products.map((product) =>
          <Product product={product} key={product.id}/>
        )}
      </Grid>
    </Container>
    </>
  );
};

export default ProductPage;
