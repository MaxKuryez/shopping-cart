import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import Rating from "@mui/material/Rating";

const Container = styled("div")({
  display: "flex",
  height: "100vh",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "20px",
});

const StyledCard = styled(Card)({
  width: "300px",
  marginBottom: "20px",
});

const ProductImage = styled(CardMedia)({
  height: "250px",
  "& img": {
    objectFit: "contain",
    height: "100%",
  },
});

const ProductTitle = styled(Typography)({
  display: "-webkit-box",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: 63
});

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const MAX_TITLE_LENGTH = 30;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <StyledCard>
              <CardActionArea>
                <ProductImage
                  component="img"
                  image={product.image}
                  title={product.title}
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
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    component="p"
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
