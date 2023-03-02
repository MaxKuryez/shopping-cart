import styled from "@emotion/styled";
import {
  List,
  ListItem,
  IconButton,
  Button,
  Typography
} from "@mui/material";

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
  marginLeft: "auto",
  marginRight: "10%",
  marginTop: 20,
  display: "block",
  height: 28
});

export const StyledTypography = styled(Typography)({
  padding: 16
});
