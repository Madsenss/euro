import styled from "styled-components";
import Nav from "../home/nav";
import Footer from "../home/footer";
import MyPageContainer from "./mypagecontainer";

const MyPageHomeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MyPageHome = () => {
  return (
    <MyPageHomeBox>
      <Nav/>
      <MyPageContainer/>
      <Footer/>
    </MyPageHomeBox>
  )
};

export default MyPageHome;