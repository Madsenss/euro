import styled from "styled-components";
import Nav from "../home/nav";
import ProductBanner from "./productbanner";
import ProductCategory from "./productcategory";
import Footer from "../home/footer";

const ProductBox = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProductHome = () => {
  return (
    <ProductBox>
      <Nav/>
      <ProductBanner/>
      <ProductCategory/>
      <Footer/>
    </ProductBox>
  )
};

export default ProductHome;