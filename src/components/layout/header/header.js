import { AppBar, Toolbar } from "@mui/material";
import { ShoppingCart } from "components/modules/shoppingCart";
import { NavLink } from "react-router-dom";
import { Error } from "../error";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <NavLink to={"/"}>
          Product Page
        </NavLink>
        <NavLink to={"/documentation"}>
          Documentation
        </NavLink>
        <ShoppingCart />
      </Toolbar>
      <Error />
    </AppBar>
  );
};

export default Header;
