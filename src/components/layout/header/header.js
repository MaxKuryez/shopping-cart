import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCart from "../../modules/shoppingCart/shoppingCart";
import Error from "../../layout/error/error";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div">
          Product Page
        </Typography>
        <ShoppingCart />
      </Toolbar>
      <Error />
    </AppBar>
  );
};

export default Header;
