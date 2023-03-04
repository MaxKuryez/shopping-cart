import { AppBar, Toolbar } from "@mui/material";
import { ShoppingCartDrawer } from "components/modules/shoppingCartDrawer";
import { LinkStyled } from "./styled";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <LinkStyled to="/">
          Product Page
        </LinkStyled>
        <LinkStyled to="/documentation">
          Documentation
        </LinkStyled>
        <ShoppingCartDrawer />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
