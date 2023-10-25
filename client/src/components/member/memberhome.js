import styled from "styled-components";
import Nav from "../home/nav";
import Footer from "../home/footer";
import { useParams } from "react-router-dom";
import MemberSignup from "./membersignup";
import MemberLogin from "./memberlogin";

const MemberHomeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  padding: 170px 0px 170px 0px;
  width: 1100px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MemberHome = () => {
  const {path} = useParams();

  const lender = () => {
    if(path === 'signup'){
      return <MemberSignup/>;
    } else if(path === 'login') {
      return <MemberLogin/>;
    }
  }

  return (
    <MemberHomeBox>
      <Nav/>
      <Container>
        {lender()}
      </Container>
      <Footer/>
    </MemberHomeBox>
  )
};

export default MemberHome;