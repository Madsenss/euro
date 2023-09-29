import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../home/nav";
import Footer from "../home/footer";
import CategoryContainer from "./categoryContainer";

const CategoryBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CategoryHome = () => {

  const { category, subCategory } = useParams();

  return (
    <CategoryBox>
      <Nav/>
      <CategoryContainer category={category} subCategory={subCategory} />
      <Footer/>
    </CategoryBox>
  )
};

export default CategoryHome;