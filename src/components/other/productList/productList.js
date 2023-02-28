import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  CardContent,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { Container,
  StyledCard,
  ProductImage,
  ProductTitle,
  GridStyled,
  PriceTypography,
  ButtonStyled
} from "./styled";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const MAX_TITLE_LENGTH = 30;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Typography variant="h3" component="h1" gutterBottom textAlign="center" marginTop={15}>
      Products
    </Typography>
    <Container>
      <Grid container>
        {products.map((product) => (
          <GridStyled item key={product.id}>
            <StyledCard>
                <ProductImage
                  component="img"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                <ProductTitle gutterBottom variant="h5" component="h2">
                    {product.title.length > MAX_TITLE_LENGTH
                      ? `${product.title.substring(0, MAX_TITLE_LENGTH)}...`
                      : product.title}
                  </ProductTitle>
                  <Rating
                    name="half-rating-read"
                    value={product.rating.rate}
                    precision={0.2}
                    style={{width: "100%"}}
                    readOnly
                  />
                  <PriceTypography
                    variant="h6"
                    color="textPrimary"
                    component="p"
                  >
                    ${product.price}
                  </PriceTypography>
                  <ButtonStyled variant="contained" size="small">
                      Add to Cart
                  </ButtonStyled>
                </CardContent>
            </StyledCard>
          </GridStyled>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default ProductPage;
