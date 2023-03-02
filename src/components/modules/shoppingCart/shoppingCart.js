import { useState } from "react";
import {
  Drawer,
  ListItemText,
  Divider,
  Badge
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { selectCartSlice } from "store/slices";
import { useSelector } from "react-redux";
import { CartProduct } from "../cartProduct";
import {
  IconStyled,
  CartList,
  CartListItem,
  CloseButton,
  StyledTypography
} from "./styled";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const { products, totalCost, numberItems } = useSelector(selectCartSlice);

  return (
    <>
      <IconStyled variant="contained" size="small" onClick={() => setOpen(true)}>
        Shopping Cart
        <Badge badgeContent={numberItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconStyled>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <CartList>
          {Object.keys(products).length
            ? <>
                {Object.keys(products).map((key) => {
                  const product = products[key];
                  return <CartProduct product={product} key={key}/>
                })}
                <Divider />
                <CartListItem>
                  <ListItemText primary={`Total: ${totalCost}$`} />
                </CartListItem>
              </>
            : <StyledTypography>Your cart is empty.</StyledTypography>
          }
          <Divider />
          <CloseButton variant="outlined" size="small" onClick={() => setOpen(false)}>
            Close
          </CloseButton>
        </CartList>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
