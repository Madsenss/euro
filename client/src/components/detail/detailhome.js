import styled from "styled-components";
import Nav from "../home/nav";
import Footer from "../home/footer";
const DetailBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DetailContainer = styled.div`
  width: 1350px;
  height: 300px;
  border: 1px solid black;
`


const DetailHome = () => {
  return (
    <DetailBox>
      <Nav/>
      <DetailContainer>
        
      </DetailContainer>
      <Footer/>
    </DetailBox>
  )
};

export default DetailHome;