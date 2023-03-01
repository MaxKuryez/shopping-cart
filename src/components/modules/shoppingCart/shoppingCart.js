import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  IconButton,
  Button
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { selectCartSlice } from '../../../store/slices';
import { useSelector } from 'react-redux';
import CartProduct from "../cartProduct/cartProduct";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { products, totalCost } = useSelector(selectCartSlice);

  return (
    <>
    <IconButton variant="contained" size="small" onClick={() => setOpen(true)}><ShoppingCartIcon /></IconButton>
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <List sx={{ width: 450 }}>
          {Object.keys(products).length
            ? <>
                {Object.keys(products).map((key) => {
                  const product = products[key];
                  return <CartProduct product={product} key={key}/>
                })}
                <Divider />
                <ListItem sx={{ fontWeight: "bold" }}>
                  <ListItemText primary={`Total: ${totalCost}$`} />
                </ListItem>
              </>
            : <Typography sx={{ p: 2 }}>Your cart is empty.</Typography>
          }
          <Divider />
          <Button variant="contained" size="small" onClick={() => setOpen(false)} sx={{height: 25, fontSize: 12}}>
            Close
          </Button>
      </List>
    </Drawer>
    </>
  );
};

export default Cart;
