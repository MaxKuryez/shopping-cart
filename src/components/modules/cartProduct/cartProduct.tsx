import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  SelectChangeEvent,
  Divider,
} from "@mui/material";
import { removeProduct, changeQuantity } from "store/slices";
import { useTypedDispatch } from "store/hooks";
import { MAX_PRODUCTS_OF_SAME_TYPE } from "utils";
import { MouseEvent } from "react" 
import { 
  MediumAvatar,
  MediumPrice,
  MediumTitle,
  StyledSelect,
  StyledButton,
} from "./styled";
import { CartProductType } from "types";


interface CartProductProps {
  product: CartProductType;
};

const CartProduct = ({ product }: CartProductProps) => {
  const dispatch = useTypedDispatch();
  const quantities = Array.from({ length: MAX_PRODUCTS_OF_SAME_TYPE }, (_, i) => i + 1);

  const handleRemoveItem = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(removeProduct(product.id));
  };

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    const newQuantity = event.target.value as number;
    dispatch(changeQuantity({ ...product, quantity: newQuantity }));
  };

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
            onChange={handleQuantityChange}
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
          onClick={handleRemoveItem}
          color="error"
        >
          Remove
        </StyledButton>
      </ListItem>
      <Divider variant="fullWidth" />
    </>
  );
};

export default CartProduct;
