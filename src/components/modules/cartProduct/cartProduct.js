import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Select,
  MenuItem
} from "@mui/material";
import { removeProduct, changeQuantity } from "store/slices";
import { useDispatch } from "react-redux";
import { MAX_PRODUCTS_OF_SAME_TYPE } from "constants";

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
      <Select variant="standard" value={product.quantity} onChange={handleQuantityChange} sx={{ marginRight: "40px" }}>
      {quantities.map((quantity) => (
        <MenuItem key={quantity} value={quantity}>
          {quantity}
        </MenuItem>
      ))}
    </Select>
      <Button variant="contained" size="small" onClick={handleRemoveItem} sx={{height: 25, fontSize: 12}}>
        Remove
      </Button>
    </ListItem>
  );
};

export default CartProduct;
