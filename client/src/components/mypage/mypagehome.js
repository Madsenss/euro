import styled from "styled-components";
import Nav from "../home/nav";
import Footer from "../home/footer";
import MyPageMain from "./mypagemain";
import { useParams } from "react-router-dom";

const MyPageHomeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MyPageHome = () => {

  const {path, orderNumber} = useParams();

  return (
    <MyPageHomeBox>
      <Nav/>
      <MyPageMain path={path} orderNumber={orderNumber}/>
      <Footer/>
    </MyPageHomeBox>
  )
};

export default MyPageHome;