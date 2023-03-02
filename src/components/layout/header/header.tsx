import { AppBar, Toolbar } from "@mui/material";
import { ShoppingCart } from "components/modules/shoppingCart";
import { LinkStyled } from "./styled";
import { Error } from "../error";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <LinkStyled to={"/"}>
          Product Page
        </LinkStyled>
        <LinkStyled to={"/documentation"}>
          Documentation
        </LinkStyled>
        <ShoppingCart />
      </Toolbar>
      <Error />
    </AppBar>
  );
};

export default Header;
