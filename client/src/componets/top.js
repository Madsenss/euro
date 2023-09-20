import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import styled from "styled-components";

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
      transform: translateY(-5px);
      color: #555;
    }
  }
`

const Top = () => {
  return (
    <ArrowBox onClick={()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }}>
      <MdKeyboardDoubleArrowUp className="icon"/>
    </ArrowBox>
  )
};

export default Top;