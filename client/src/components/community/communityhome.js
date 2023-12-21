import styled from "styled-components";
import Nav from "../home/nav";
import Footer from "../home/footer";
import { useParams } from "react-router-dom";
import CommunityMain from "./communitycontainer";

const CommunityHomeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CommunityHome = () => {

  const { path } = useParams();
  
  return (
    <CommunityHomeBox>
      <Nav />
      <CommunityMain path={path}/>
      <Footer />
    </CommunityHomeBox>
  )
};

export default CommunityHome;