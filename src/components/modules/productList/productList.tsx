import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "./styled";
import { getProductsThunk } from "store/thunks";
import { useTypedDispatch, useTypedSelector } from "store/hooks";
import { selectProductsSlice } from "store/slices";
import { ShopProduct } from "../shopProduct";

const ProductList = () => {
  const dispatch = useTypedDispatch();
  const { products } = useTypedSelector(selectProductsSlice);

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
          <ShopProduct product={product} key={product.id}/>
        )}
      </Grid>
    </Container>
    </>
  );
};

export default ProductList;
