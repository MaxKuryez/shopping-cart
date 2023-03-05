import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Select,
  SelectChangeEvent
} from "@mui/material";
import { MAX_PRODUCTS_OF_SAME_TYPE } from "utils";
import { Product } from "types";
import {
  MagnifierStyled,
  StyledDialogContent,
  StyledTypography,
  StyledFormControl,
  FlexContainer,
  RatingStyled,
  MenuItemStyled
} from "./styled";

interface ProductPopupProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (quantity: number) => void;
};

const ProductView = ({ product, isOpen, onClose, onAddToCart }: ProductPopupProps) => {
  const [quantity, setQuantity] = useState(1);
  const quantities = Array.from({ length: MAX_PRODUCTS_OF_SAME_TYPE }, (_, i) => i + 1);

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    setQuantity(event.target.value as number);
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{product.title}</DialogTitle>
      <StyledDialogContent>
        <MagnifierStyled
            imageSrc={product.image}
            imageAlt="Example"
            largeImageSrc={product.image}
            dragToMove={false}
          />
        <StyledTypography>{product.description}</StyledTypography>
        <StyledTypography>{`Price: ${product.price}$`}</StyledTypography>
        <FlexContainer>
          <RatingStyled
              name="half-rating-read"
              value={product.rating.rate}
              precision={0.2}
              readOnly
          />
          <StyledFormControl>
            <Select
              variant="standard"
              labelId="quantity-label"
              id="quantity-select"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {quantities.map((quantity) => (
                <MenuItemStyled key={quantity} value={quantity}>
                  {quantity}
                </MenuItemStyled>
              ))}
            </Select>
          </StyledFormControl>
        </FlexContainer>
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">Cancel</Button>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductView;
