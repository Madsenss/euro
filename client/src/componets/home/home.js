import styled from "styled-components";
import Footer from "./footer";
import Banner from "./banner";
import Nav from "./nav";
import Best from "./best";

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
      <Best/>
      <Footer/>
    </HomeBox>
  )
};

export default Home;