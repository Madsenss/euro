import styled from "styled-components";
import Footer from "./footer";
import Banner from "./banner";
import Nav from "./nav";
import MiddleEdge from "./middleedge.js";
import BottomMenu from "./bottommenu";
import HomeProduct from "./homeproduct";

const HomeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  return (
    <HomeBox>
      <Nav/>
      <Banner/>
      <MiddleEdge/>
      <HomeProduct/>
      <BottomMenu/>
      <Footer/>
    </HomeBox>
  )
};

export default Home;