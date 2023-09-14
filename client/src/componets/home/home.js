import styled from "styled-components";
import Footer from "./footer";
import Banner from "./banner";

const HomeBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  return (
    <HomeBox>
      <Banner/>
      <Footer/>
    </HomeBox>
  )
};

export default Home;