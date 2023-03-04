import styled from "@emotion/styled";
import {
  List,
  ListItem,
  IconButton,
  Button,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";

export const IconStyled = styled(IconButton)({
  marginLeft: "auto",
  color: "#fff"
});

export const CartList = styled(List)({
  width: "450px",
});

export const CartListItem = styled(ListItem)({
  fontWeight: "bold",
});

export const CloseButton = styled(Button)({
  fontSize: "12px",
  marginLeft: "15%",
  marginRight: "15%",
  marginTop: 20,
  height: 28
});

export const StyledTypography = styled(Typography)({
  padding: 16
});

export const LinkStyled = styled(Link)({
  color: "#1976d2",
  textDecoration: "none"
});
