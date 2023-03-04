import styled from "@emotion/styled";
import {
  Grid,
  Typography,
  CardMedia,
  Card,
  Button
} from "@mui/material";
import { Magnifier } from "react-image-magnifiers";

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
}) as typeof CardMedia;

export const ProductTitle = styled(Typography)({
  height: 63
}) as typeof Typography;

export const GridStyled = styled(Grid)({
  margin: "auto",
  padding: "10px 50px 40px 50px",
});

export const PriceTypography = styled(Typography)({
  alignItems: "center",
  display: "inline-block",
}) as typeof Typography;

export const ButtonStyled = styled(Button)({
  marginLeft: "auto",
  display: "inline-block",
  float: "right",
});

export const MagnifierStyled = styled(Magnifier)`
width: 300px;
height: 300px;
object-fit: contain;
div {
  width: 300px;
  height: 300px;
  object-fit: contain;
  img {
    object-fit: contain;
    height: 300px;
  }
  div {
    img {
      height: auto;
    }
  }
}
` as typeof Magnifier;
