import {
  CardContent,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import {
  StyledCard,
  ProductTitle,
  GridStyled,
  PriceTypography,
  ButtonStyled,
  MagnifierStyled
} from "./styled";
import { useTypedDispatch } from "store/hooks";
import { addToCartThunk } from "store/thunks";
import { Product } from "types";

interface ShopProductProps {
  product: Product;
};

const ShopProduct = ({ product }: ShopProductProps) => {
  const MAX_TITLE_LENGTH = 30;
  const dispatch = useTypedDispatch();

  const addToCart = () => {
    dispatch(addToCartThunk(product));
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
          <Rating
            name="half-rating-read"
            value={product.rating.rate}
            precision={0.2}
            style={{width: "100%"}}
            readOnly
          />
          <PriceTypography
            variant="h6"
            color="textPrimary"
            component="p"
          >
            {product.price} $
          </PriceTypography>
          <ButtonStyled variant="contained" size="small" onClick={addToCart}>
            Add to Cart
          </ButtonStyled>
        </CardContent>
      </StyledCard>
    </GridStyled>
  );
};

export default ShopProduct;
