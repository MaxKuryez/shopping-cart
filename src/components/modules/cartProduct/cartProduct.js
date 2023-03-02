import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  MenuItem
} from "@mui/material";
import { removeProduct, changeQuantity } from "store/slices";
import { useDispatch } from "react-redux";
import { MAX_PRODUCTS_OF_SAME_TYPE } from "constants";
import { StyledButton, StyledSelect } from "./styled";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const MAX_TITLE_LENGTH = 20;
  const quantities = Array.from({ length: MAX_PRODUCTS_OF_SAME_TYPE }, (_, i) => i + 1);

  const handleRemoveItem = () => {
    dispatch(removeProduct(product.id));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    dispatch(changeQuantity({ ...product, quantity: newQuantity }));
  };

  return (
    <ListItem key={product.id}>
      <ListItemAvatar>
        <Avatar src={product.image} />
      </ListItemAvatar>
      <ListItemText
        primary={product.title.length > MAX_TITLE_LENGTH
          ? `${product.title.substring(0, MAX_TITLE_LENGTH)}...`
          : product.title}
        secondary={`${product.price}$`}
      />
      <StyledSelect variant="standard" value={product.quantity} onChange={handleQuantityChange}>
      {quantities.map((quantity) => (
        <MenuItem key={quantity} value={quantity}>
          {quantity}
        </MenuItem>
      ))}
      </StyledSelect>
      <StyledButton variant="outlined" size="small" onClick={handleRemoveItem}>
        Remove
      </StyledButton>
    </ListItem>
  );
};

export default CartProduct;
