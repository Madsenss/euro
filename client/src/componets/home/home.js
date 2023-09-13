import styled from "styled-components";
import Footer from "./footer";

const HomeBox = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Home = () => {
  return (
    <HomeBox>
      <Footer/>
    </HomeBox>
  )
};

export default Home;