import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Typography,
  IconButton
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const handleRemoveItem = (itemIndex) => {
    const newItems = [...items];
    const removedItem = newItems.splice(itemIndex, 1)[0];
    setItems(newItems);
    setTotalPrice(totalPrice - removedItem.price);
  };

  const handleClearCart = () => {
    setItems([]);
    setTotalPrice(0);
  };

  const cartItems = items.map((item, index) => (
    <ListItem key={index}>
      <ListItemAvatar>
        <Avatar src={item.image} />
      </ListItemAvatar>
      <ListItemText
        primary={item.title}
        secondary={`$${item.price}`}
      />
      <button onClick={() => handleRemoveItem(index)}>Remove</button>
    </ListItem>
  ));

  return (
    <>
    <IconButton variant="contained" size="small" onClick={() => setOpen(true)}><ShoppingCartIcon /></IconButton>
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <List sx={{ minWidth: 250 }}>
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar>
              <ShoppingCartIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Shopping Cart" />
        </ListItem>
        <Divider />
        {cartItems.length > 0 ? (
          <>
            {cartItems}
            <Divider />
            <ListItem sx={{ fontWeight: "bold" }}>
              <ListItemText primary={`Total: $${totalPrice}`} />
              <button onClick={handleClearCart}>Clear</button>
            </ListItem>
          </>
        ) : (
          <Typography sx={{ p: 2 }}>Your cart is empty.</Typography>
        )}
      </List>
    </Drawer>
    </>
  );
};

export default Cart;
