import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Main from "./main";
import Product from "./product";
import PartnerShip from "./partnership";
import styled from "styled-components";

const InquiryHomeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: rgb(250, 250, 250); */
  background-color: #eee;
  &.fit {
    height: fit-content;
    padding: 100px 0px 100px 0px;
  }
  &.vh {
    height: calc(var(--vh, 1vh) * 100);
  }
`
const Container = styled.div`
  width: 1100px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const ArrowBox = styled.div`
  z-index: 999;
  cursor: pointer;
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  position: fixed;
  bottom: 30px;
  right: 40px;
  background-color: rgb(0, 0, 0, 0.4);
  transition: all 0.25s;
  .icon {
    transition: all 0.25s;
    font-size: 40px;
    color: #eee;
  }
  &:hover {
    background-color: transparent;
    .icon {
      transform: translateX(-5px);
      color: #555;
    }
  }
`

const InquiryHome = () => {
  const navigate = useNavigate();
  const { path } = useParams();

  const lender = {
    product: <Product/>,
    partnership: <PartnerShip/>
  };

  return (
    <InquiryHomeBox className={path ? 'fit' : 'vh'}>
      <Container className={path ? 'a' : 'b'}>
        {path ? lender[path] : <Main/>}
      </Container>
      <ArrowBox onClick={() => { navigate(-1); }}>
        <MdKeyboardDoubleArrowLeft className="icon" />
      </ArrowBox>
    </InquiryHomeBox>
  )
};

export default InquiryHome;