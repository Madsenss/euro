import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Overley = styled.div`
  z-index: 1001;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
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
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  padding: 20px 15px 20px 15px;
  transition: all 0.2s;
  .close {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 24px;
    &:hover {
      color: var(--color);
    }
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
  font-size: 16px;
  font-weight: bold;
  padding: 12px 40px 12px 40px;
  transition: 0.25s;
  margin-left: auto;
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
        <MdClose className="close" onClick={handleClose} />
        <SubmitButton>삭제하기</SubmitButton>
      </Modal>
    </Overley>
  )
};

export default DeleteModal;