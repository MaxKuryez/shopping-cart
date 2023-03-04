import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Divider,
} from "@mui/material";
import { removeProduct, changeQuantity } from "store/slices";
import { useTypedDispatch, useTypedSelector } from "store/hooks";
import { MAX_PRODUCTS_OF_SAME_TYPE } from "utils";
import { selectCartSlice } from "store/slices";
import { MouseEvent } from "react" 
import { 
  MediumAvatar,
  MediumPrice,
  MediumTitle,
  StyledSelect,
  StyledButton,
  TotalPrice
} from "./styled";


const ShoppingCart = () => {
  const { products, totalCost } = useTypedSelector(selectCartSlice);
  const dispatch = useTypedDispatch();
  const quantities = Array.from({ length: MAX_PRODUCTS_OF_SAME_TYPE }, (_, i) => i + 1);

  const handleRemoveItem = (event: MouseEvent<HTMLButtonElement>, productId: number) => {
    event.stopPropagation();
    dispatch(removeProduct(productId));
  };

  const handleQuantityChange = (
    productId: number,
    event: SelectChangeEvent<number>
  ) => {
    const newQuantity = event.target.value as number;
    const product = products[productId];
    dispatch(changeQuantity({ ...product, quantity: newQuantity }));
  };

  return (
    <>
      <Typography variant="h3" component="h1" marginTop="100px" marginBottom="20px" textAlign="center">
        Shopping Cart
      </Typography>
      {Object.keys(products).length ? (
        <List>
          {Object.keys(products).map((key) => {
            const product = products[key];
            return (
              <>
              <ListItem key={product.id}>
                <ListItemAvatar>
                  <MediumAvatar src={product.image} />
                </ListItemAvatar>
                <ListItemText>
                  <MediumTitle>
                    {product.title}
                  </MediumTitle>
                  <MediumPrice>{`${product.price}$`}</MediumPrice>
                  <StyledSelect
                    variant="standard"
                    value={product.quantity}
                    onChange={(event) =>
                      handleQuantityChange(product.id, event)
                    }
                  >
                    {quantities.map((quantity) => (
                      <MenuItem key={quantity} value={quantity}>
                        {quantity}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </ListItemText>
                <StyledButton
                  variant="outlined"
                  size="small"
                  onClick={(event) => handleRemoveItem(event, product.id)}
                >
                  Remove
                </StyledButton>
              </ListItem>
              <Divider variant="fullWidth" />
              </>
            );
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
          </List>
      ) : (
        <>
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
