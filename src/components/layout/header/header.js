import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCart from "../../other/shoppingCart/shoppingCart";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div">
          Product Page
        </Typography>
        <ShoppingCart />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
