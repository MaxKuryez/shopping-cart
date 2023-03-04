import { Header } from "components/layout/header";
import { HeaderCopy, TypographyStyled } from "./styled";

const DocumentPage = () => {
  return (
    <>
      <Header />
      <HeaderCopy variant="h3" component="h1" gutterBottom textAlign="center">Documentation</HeaderCopy>
      <TypographyStyled variant="h4" component="h1">User Experience:</TypographyStyled>
      <TypographyStyled variant="h5" component="h1">
        1. The products:
        <br/><br/>
        The images on products can be zoomed in by clicking on them.
        <br/>
        The products can be sorted by categories, that can be selected in the left corner on the page.
        <br/><br/>
        2. Cart Page:
        <br/><br/>
        In order to proceed to the cart page, click the "go to cart" button in the cart drawer.
        <br/>
        The number of items can be changed in cart both in drawer and page, by selecting the number in the box.
        <br/>
        Also, each product can be removed from cart by clicking "remove" button.
      </TypographyStyled>
      <TypographyStyled variant="h4" component="h1">Redux:</TypographyStyled>
      <TypographyStyled variant="h5" component="h1">
        1. The states are separated into 4 slices:
        <br/><br/>
        Cart: handles the items in the cart, using hash map, because this way it is easier to go through  it and edit the cart on every action.
        <br/>
        Products: handles products that are requested from the API.
        <br/>
        Errors: handles errors with the requests as well as errors with adding too many products to cart
        <br/>
        Loading: handles loading screen when making a request.
        <br/><br/>
        2. Handling Thunks:
        <br/><br/>
        The Products Slice is requested from the API and is saved to the state,
        when you switch to other page and then return back, the thunk that handles the request does not make another request,
        because it checks that the products are already in the state.
        <br/>
        Also, the categories are in this slice, they are requested from the API separately so that even if one request fails, the other 
        one will work
        <br/>
        This slice is not stored using persist store, because it makes sense that the products will be fetch when the page is reloaded,
        but once loaded, there is no need to fetch again.
        <br/><br/>
        The Cart Slice is stored in persist store, so the user does not loose the products that were added to the cart.
        <br/>
        When adding the product from the page to cart, it checks whether the limit of max products per type and per quantity
        is not reached, and if it is, it will throw an error and will not add product to cart.
        <br />
        This is handled by Thunk, that checks the cart state and then returns an error if needed. And then both Error and Cart
        Slices handle the rejected/fulfilled state of the thunk respectively.
        <br /><br />
        The limits can be changed in the utils/constants file. When changing the limit of max products per type, it will
        also change the number of products that can be selected in cart, using drop down selector.
        <br /><br />
        Note, that this thunk does not trigger the loading screen, because it is not added to the loading screen thunk handlers.
        <br /><br />
        3. Testing errors:
        <br /><br />
        In order to test errors, add to cart more than 6 products of same type, or add more than 4 types of products.
        <br />
        The other errors that could be tested are request errors, try changing the endpoint in utils/constants or changing GET
        request in getProductsThunk to PUT.
        <br />
        Also, you can try going to Networks in Dev tab and disabling the request to simulate
        Network Error.
      </TypographyStyled>
    </>
  );
};

export default DocumentPage;
