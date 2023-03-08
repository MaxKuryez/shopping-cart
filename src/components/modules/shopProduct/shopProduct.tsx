import {
  CardContent,
} from "@mui/material";
import { useState } from "react";
import {
  StyledCard,
  ProductTitle,
  GridStyled,
  PriceTypography,
  ButtonStyled,
  MagnifierStyled,
  RatingStiled
} from "./styled";
import { useTypedDispatch } from "store/hooks";
import { addToCartThunk } from "store/thunks";
import { Product } from "types";
import { ProductView } from "../productView";

interface ShopProductProps {
  product: Product;
};

const ShopProduct = ({ product }: ShopProductProps) => {
  const [isViewOpen, setViewOpen] = useState(false);
  const MAX_TITLE_LENGTH = 30;
  const dispatch = useTypedDispatch();

  const addToCart = (quantity: number) => {
    dispatch(addToCartThunk({product, quantity}));
  }

  return (
    <GridStyled item key={product.id}>
      <StyledCard>
          <MagnifierStyled
            imageSrc={product.image}
            imageAlt="Example"
            largeImageSrc={product.image}
            dragToMove={false}
          />
          <CardContent>
          <ProductTitle gutterBottom variant="h5" component="h2">
            {product.title.length > MAX_TITLE_LENGTH
              ? `${product.title.substring(0, MAX_TITLE_LENGTH)}...`
              : product.title}
          </ProductTitle>
          <RatingStiled
            name="half-rating-read"
            value={product.rating.rate}
            precision={0.2}
            readOnly
          />
          <PriceTypography
            variant="h6"
            color="textPrimary"
            component="p"
          >
            {product.price} $
          </PriceTypography>
          <ButtonStyled variant="contained" size="small" onClick={() => setViewOpen(true)}>
            Add to Cart
          </ButtonStyled>
          <ProductView product={product} isOpen={isViewOpen} onClose={() => setViewOpen(false)} onAddToCart={addToCart}/>
        </CardContent>
      </StyledCard>
    </GridStyled>
  );
};

export default ShopProduct;
