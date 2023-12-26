import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Overley = styled.div`
  z-index: 1001;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
  &.show {
    visibility: visible;
    opacity: 1;
  }
  &.hide {
    visibility: hidden;
    opacity: 0;
  }
`
const Modal = styled.div`
  position: relative;
  z-index: 1002;
  width: fit-content;
  height: fit-content;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  transition: all 0.2s;
  padding: 35px 20px 20px 20px;
  .title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #555;
  }
  .button-box {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
const SubmitButton = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  background-color: var(--color);
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.1);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 30px 8px 30px;
  margin: 0px 10px 0px 10px;
  transition: 0.25s;
  margin-top: ${props => props.true ? '20px' : '0px'};
  &:hover {
    opacity: 0.7;
  }
`
const DeleteModal = ({ open, onClose }) => {

  const handleClose = () => {
    onClose();
  };

  return (
    <Overley className={open ? 'show' : 'hide'}>
      <Modal>
        <span className="title">해당 글을 삭제하시겠습니까?</span>
        <div className="button-box">
          <SubmitButton onClick={()=>{
            handleClose();
          }}>취소</SubmitButton>
          <SubmitButton>삭제</SubmitButton>
        </div>
      </Modal>
    </Overley>
  )
};

export default DeleteModal;