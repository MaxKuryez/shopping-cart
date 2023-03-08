import { List, Typography, Divider } from "@mui/material";
import { useTypedSelector } from "store/hooks";
import { selectCartSlice } from "store/slices";
import { StyledButton, TotalPrice } from "./styled";
import { CartProduct } from "../cartProduct"

const ShoppingCart = () => {
  const { products, totalCost } = useTypedSelector(selectCartSlice);

  return (
    <>
      <Typography variant="h3" component="h1" marginTop="100px" marginBottom="20px" textAlign="center">
        Shopping Cart
      </Typography>
        {Object.keys(products).length
          ? ( <List>
              {Object.keys(products).map((key) => {
                const product = products[key];
                return <CartProduct product={product}/>
              })}
              <Divider />
              <TotalPrice variant="h5" component="h1">
                {`Total: ${totalCost}$`}
              </TotalPrice>
              <StyledButton
                variant="contained"
                size="large"
              >
                Buy
              </StyledButton>
            </List>)
          : ( <>
              <Divider />
              <Typography variant="h5" component="h1" marginTop="20px" marginLeft="30px">
                Your cart is empty.
              </Typography>
            </>
        )}
    </>
  );
};

export default ShoppingCart;
