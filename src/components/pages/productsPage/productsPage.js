import ProductList from "../../modules/productList/productList";
import Header from "../../layout/header/header";
import Loading from "../../layout/loading/loading";

const ProductPage = () => {
  return (
    <>
      <Header />
      <Loading />
      <ProductList />
    </>
  );
};

export default ProductPage;
