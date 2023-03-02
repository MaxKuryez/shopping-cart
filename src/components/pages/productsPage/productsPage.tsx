import { ProductList } from "components/modules/productList";
import { Header } from "components/layout/header";
import { Loading } from "components/layout/loading";

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
