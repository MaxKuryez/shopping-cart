import styled from "@emotion/styled";
import {
  Grid,
  Typography,
  CardMedia,
  Card,
  Button
} from "@mui/material";

export const StyledCard = styled(Card)({
  width: "300px",
  marginBottom: "20px",
});

export const ProductImage = styled(CardMedia)({
  height: "250px",
  "& img": {
    objectFit: "contain",
    height: "100%",
  },
});

export const ProductTitle = styled(Typography)({
  height: 63
});

export const GridStyled = styled(Grid)({
  margin: "auto",
  padding: "10px 50px 40px 50px",
});

export const PriceTypography = styled(Typography)({
  alignItems: "center",
  display: "inline-block",
});

export const ButtonStyled = styled(Button)({
  marginLeft: "auto",
  display: "inline-block",
  float: "right",
});
