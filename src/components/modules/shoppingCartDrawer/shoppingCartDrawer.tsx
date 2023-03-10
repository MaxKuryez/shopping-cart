import { useState } from "react";
import {
  Drawer,
  ListItemText,
  Divider,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { selectCartSlice } from "store/slices";
import { useTypedSelector } from "store/hooks";
import { DrawerProduct } from "../drawerProduct";
import {
  IconStyled,
  CartList,
  CartListItem,
  CloseButton,
  StyledTypography,
  LinkStyled
} from "./styled";

const ShoppingCartDrawer = () => {
  const [open, setOpen] = useState(false);
  const { products, totalCost, numberItems } = useTypedSelector(selectCartSlice);

  return (
    <>
      <IconStyled size="small" onClick={() => setOpen(true)}>
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
                  return <DrawerProduct product={product} key={key}/>
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
          <CloseButton variant="outlined" size="small">
            <LinkStyled to="/cart">Go to cart</LinkStyled>
          </CloseButton>
        </CartList>
      </Drawer>
    </>
  );
};

export default ShoppingCartDrawer;
