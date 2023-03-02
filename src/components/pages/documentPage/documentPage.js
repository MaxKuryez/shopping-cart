import { Header } from "components/layout/header";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export const TypographyStyled = styled(Typography)({
  marginLeft: 40,
  marginTop: 10,
  marginBottom: 30
})

export const HeaderCopy = styled(Typography)({
  marginTop: 100
})

const DocumentPage = () => {
  return (
    <>
      <Header />
      <HeaderCopy variant="h3" component="h1" gutterBottom textAlign="center">Documentation</HeaderCopy>
      <TypographyStyled variant="h4" component="h1">Redux:</TypographyStyled>
      <TypographyStyled variant="h5" component="h1">
        1. The states are separated into 4 slices:
        <br/><br/>
        Cart: handles the items in cart, using hash map, because this way it is easier to go throught it and edit the cart on every action.
        <br/>
        Products: handles products that are requested from the API.
        <br/>
        Errors: handles erros with the requests as well as errors with adding too many products to cart
        <br/>
        Loading: handles loading screen when making a request.
        <br/><br/>
        2. Handling Thunks:
        <br/><br/>
        The Products Slice is requested from the API, and is saved to the state,
        when you switch to other page and then return back, the thunk that handles the request does not make another request,
        because it checks that the products are alredy in the state.
        <br/>
        This slice is not stored using presist store, because it makes sense that the products will be fetch when the page is reloaded,
        but once loaded, there is no need to fetch again.
        <br/><br/>
        The Cart Slice is stored in the persist store, so the user does not loose the products that were added to the cart.
        <br/>
        When adding the product from the page to cart, it checks whether the limit of max products per type and per qunatity
        is not reached, and if it is, it will throw an error and will not add product to cart.
        <br />
        This is handled by Thunk, that checks the cart state and then returns an error if needed. and then both Error and Cart
        Slices handle the rejected/fulfilled state of the thunk respectively.
        <br /><br />
        The limits can be changed in the constants.ts file. When changig the limit of max products per type, it will
        also change the number of products that can be selected in cart, using drop down selector.
        <br /><br />
        Note, that this thunk does not trigger the loading screen, because it is not added to the loading screen thunk handlers
      </TypographyStyled>
    </>
  );
};

export default DocumentPage;
