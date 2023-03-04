import { useEffect, useState } from "react";
import { Grid, Typography, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { Container } from "./styled";
import { getProductsThunk, getCategoriesThunk } from "store/thunks";
import { useTypedDispatch, useTypedSelector } from "store/hooks";
import { selectProductsSlice } from "store/slices";
import { ShopProduct } from "../shopProduct";
import { capitalazied } from "./utils";

const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const dispatch = useTypedDispatch();
  const { products, categories } = useTypedSelector(selectProductsSlice);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getProductsThunk());
  }, [dispatch]);

  const handleFilter = (event: SelectChangeEvent<string>) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <>
    <Typography variant="h3" component="h1" gutterBottom textAlign="center" marginTop={15}>
      Products
    </Typography>
    <Select
        value={categoryFilter}
        onChange={handleFilter}
        displayEmpty
      >
        <MenuItem value="">All Categories</MenuItem>
        {categories.map((category) =>
          <MenuItem value={category} key={category}>{capitalazied(category)}</MenuItem>
        )}
    </Select>
    <Container>
      <Grid container>
        {products.filter((product) => product.category.includes(categoryFilter)
          ).map((product) =>
            <ShopProduct product={product} key={product.id}/>
          )}
      </Grid>
    </Container>
    </>
  );
};

export default ProductList;
