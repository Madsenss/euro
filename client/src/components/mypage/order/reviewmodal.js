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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  padding: 20px;
  transition: all 0.2s;
  .title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
  }
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
  .form-box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    .input-box {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;
      .input-title {
        width: 70px;
        font-size: 14px;
        font-weight: bold;
        color: #555;
        &.top {
          padding-top: 5px;
          margin-bottom: auto;
        }
      }
      label {
        cursor: pointer;
        width: 406px;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1.5px solid #ddd;
        border-radius: 4px;
        transition: all 0.25s;
        .icon {
          font-size: 20px;
          color: #aaa;
          margin-bottom: 10px;
          transition: all 0.25s;
        }
        .upload-text {
          font-size: 12px;
          color: #aaa;
        }
        &:hover {
          border: 1.5px solid var(--color);
          .icon {
            color: var(--color);
          }
        }
      }
    }
    .img-box {
      width: fit-content;
      height: fit-content;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 24px;
      .img-item {
        position: relative;
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #aaa;
        border-radius: 12px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }
        .delete {
          cursor: pointer;
          position: absolute;
          right: -6px;
          top: -6px;
          border-radius: 50%;
          background-color: var(--color);
          color: #fff;
          font-size: 14px;
          padding: 3px;
          transition: all 0.25s;
          &:hover {
            filter: brightness(1.15);
          }
        }
      }
    }
  }
`
const ReviewModal = ({ open, onClose, selectedData }) => {

  const handleClose = () => {
    onClose();
  };

  return (
    <Overley className={open ? 'show' : 'hide'}>
    <Modal>
      <MdClose className="close" onClick={handleClose}/>
      <span className="title">1:1 문의</span>
    </Modal>
  </Overley>
  )
};

export default ReviewModal;