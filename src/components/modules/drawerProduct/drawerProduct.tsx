import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  MenuItem,
  SelectChangeEvent,
  Select
} from "@mui/material";
import { removeProduct, changeQuantity } from "store/slices";
import { useTypedDispatch } from "store/hooks";
import { MAX_PRODUCTS_OF_SAME_TYPE } from "utils";
import { StyledButton } from "./styled";
import { CartProductType } from "types"

//HI HI HI 
interface CartProductProps {
  product: CartProductType;
};

//CHANGE HERE
const DrawerProduct = ({ product }: CartProductProps) => {
  const dispatch = useTypedDispatch();
  const MAX_TITLE_LENGTH = 20;
  const quantities = Array.from({ length: MAX_PRODUCTS_OF_SAME_TYPE }, (_, i) => i + 1);

  const handleRemoveItem = () => {
    dispatch(removeProduct(product.id));
  };

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
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
      <Select variant="standard" value={product.quantity} onChange={handleQuantityChange}>
      {quantities.map((quantity) => (
        <MenuItem key={quantity} value={quantity}>
          {quantity}
        </MenuItem>
      ))}
      </Select>
      <StyledButton color="error" variant="outlined" size="small" onClick={handleRemoveItem}>
        Remove
      </StyledButton>
    </ListItem>
  );
};

export default DrawerProduct;
