import styled from "styled-components";
import Footer from "./footer";
import Banner from "./banner";
import Nav from "./nav";
import MiddleEdge from "./middleedge.js";
import BottomMenu from "./bottommenu";

const HomeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const T = styled.div`
  width: 1350px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
`

const Home = () => {
  return (
    <HomeBox>
      <Nav/>
      <Banner/>
      <MiddleEdge/>
      <T>
        <span>상품 이미지 리스트 구역</span>
      </T>
      <BottomMenu/>
      <Footer/>
    </HomeBox>
  )
};

export default Home;