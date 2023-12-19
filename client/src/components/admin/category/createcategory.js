import { useState } from "react"
import { MdClose } from "react-icons/md"
import styled from "styled-components"

const Overley = styled.div`
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
const CategoryModal = styled.div`
  position: relative;
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 13px;
    font-size: 24px;
    &:hover {
      color: var(--color);
    }
  }
  .row {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .input-title {
      font-size: 14px;
      font-weight: bold;
    }
    &.button {
      margin-top: 10px;
      margin-bottom: 0;
      justify-content: end;
      input[type=file] {
        display: none;
      }
      label {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        border: 1.5px solid #aaa;
        color: #666;
        border-radius: 3px;
        padding: 5px 8px 5px 8px;
        font-size: 14px;
        font-weight: bold;
        &:hover {
          background-color: #aaa;
          color: #fff;
        }
      }
    }
  }
`
const Input = styled.input`
  width: 230px;
  height: 28px;
  font-size: 12px;
  border: 1.5px solid #ddd;
  border-radius: 3px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
`
const Textarea = styled.textarea`
  width: 230px;
  height: 60px;
  padding: 5px 0px 5px 5px;
  font-size: 12px;
  border: 1.5px solid #ddd;
  border-radius: 3px;
  resize: none;
  &:focus {
    outline: none;
  }
`
const Button = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border: 1.5px solid black;
  border-radius: 3px;
  padding: 4px;
  margin: 0px 4px 0px 4px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: #fff;
  }
`
const BlueButton = styled(Button)`
  border: 1.5px solid var(--color);
  margin: 0;
  margin-left: 10px;
  padding: 5px 8px 5px 8px;
  color: var(--color);
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`

const CreateCategory = ({open, onClose}) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryContent, setCategoryContent] = useState('');
  const [categoryFileName, setCategoryFileName] = useState('');

  const handleCategoryFile = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setCategoryFileName(uploadedFile.name);
    }
  };
  const handleCategoryName = (e) => {
    const value = e.target.value;
    setCategoryName(value);
  };
  const handleCategoryContent = (e) => {
    const value = e.target.value;
    setCategoryContent(value);
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Overley className={open ? 'show' : 'hide'}>
      <CategoryModal>
        <MdClose className="close" onClick={() => onClose() } />
        <span className="title">대분류 생성</span>
        <div className="row">
          <span className="input-title">대분류명</span>
          <Input type="text" spellCheck="false" />
        </div>
        <div className="row">
          <span className="input-title">설명</span>
          <Textarea spellCheck="false" />
        </div>
        <div className="row">
          <span className="input-title">이미지명</span>
          <Input readOnly defaultValue={categoryFileName} />
        </div>
        <div className="row button">
          <label htmlFor="file">이미지 찾기</label>
          <BlueButton>생성</BlueButton>
          <input id="file" type="file" onChange={handleCategoryFile} />
        </div>
      </CategoryModal>
    </Overley>
  )
};

export default CreateCategory;