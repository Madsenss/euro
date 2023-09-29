import { MdLocalShipping, MdLock, MdPayments, MdSupportAgent } from "react-icons/md";
import styled from "styled-components";

const MiddleBox = styled.div`
  margin: 40px 0px 40px 0px;
  padding: 15px 0px 15px 0px;
  width: 1350px;
  height: fit-content;
  /* border: 1.5px solid #eee; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px 0.5px rgb(0, 0, 0, 0.1);
`
const Item = styled.div`
  width: 340px;
  height: fit-content;
  padding: 15px 0px 15px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 50px;
    color: var(--color);
    margin-right: 10px;
  }
  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    .bold {
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
  border-right: 1.5px solid #eee;
`

const MiddleEdge = () => {
  return (
    <MiddleBox>
      <Item>
        <MdLocalShipping className="icon"/>
        <div className="column">
          <span className="bold">Free Shipping</span>
          <span>Free shipping on all US order</span>
        </div>
      </Item>
      <Item>
        <MdSupportAgent className="icon"/>
        <div className="column">
          <span className="bold">Support 24/7</span>
          <span>Contact us 24 hours a day</span>
        </div>
      </Item>
      <Item>
        <MdPayments className="icon"/>
        <div className="column">
          <span className="bold">100% Money Back</span>
          <span>You have 30 days to Return</span>
        </div>
      </Item>
      <Item style={{borderRight: 'none'}}>
        <MdLock className="icon"/>
        <div className="column">
          <span className="bold">Payment Secure</span>
          <span>We ensure secure payment</span>
        </div>
      </Item>
    </MiddleBox>
  )
};

export default MiddleEdge;