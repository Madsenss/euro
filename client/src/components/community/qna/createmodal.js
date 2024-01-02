import { useState } from "react";
import { MdAddAPhoto, MdClose } from "react-icons/md";
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

const Input = styled.input`
  padding-left: 5px;
  font-size: 14px;
  width: 400px;
  height: 28px;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  transition: all 0.25s;
  &[type=file] {
    display: none;
  }
  &:focus {
    outline: none;
    border: 1.5px solid var(--color);
  }
`
const Textarea = styled.textarea`
  padding: 10px 5px 10px 5px;
  font-size: 14px;
  width: 396px;
  height: 150px;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  transition: all 0.25s;
  &:focus {
    outline: none;
    border: 1.5px solid var(--color);
  }
  resize: none;
`
const FilterOuter = styled.div`
  z-index: 1001;
  position: relative;
  width: fit-content;
  height: fit-content;
`
const FilterBox = styled.div`
  cursor: pointer;
  width: 200px;
  height: 32px;
  padding: 0px 10px 0px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1.5px solid #ddd;
  font-size: 14px;
  font-weight: bold;
  color: #555;
  transition: all 0.25s;
  &:hover {
    border: 1.5px solid var(--color);
  }
`
const FilterList = styled.div`
  position: absolute;
  width: 200px;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.3);
  top: 35px;
  right: 0;
  transition: all 0.25s;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? 1 : 0)};
  .item {
    cursor: pointer;
    width: 100%;
    height: fit-content;
    padding: 7px 8px 7px 8px;
    font-size: 14px;
    font-weight: bold;
    color: #555;
    &:hover {
      background-color: var(--color);
      color: #fff;
    }
  }
`
const CreateModal = ({ open, onClose }) => {

  const [openFilter, setOpenFilter] = useState(false);
  const [category, setCategory] = useState('문의유형을 선택해주세요');
  const option = ['상품', '배송', '주문/결제', '취소/교환/반품', '서비스/오류/기타'];
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState([]);
  const [imageName, setImageName] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const handleTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleContent = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleImage = (e) => {
    const file = e.target.files;
    const fileArray = Array.from(file);
    const nameArray = fileArray.map((file) => file.name);

    setImageName(nameArray);
    setImage(fileArray);

    const previewArray = [];
    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previewArray.push({
          name: file.name,
          image: reader.result
        });
        if (previewArray.length === fileArray.length) {
          setImagePreview([...previewArray]);
        }
      };
      reader.readAsDataURL(file);
    });

  }
  const handleDeleteImage = (i) => {
    const copyPreview = [...imagePreview];
    copyPreview.splice(i, 1);
    setImagePreview(copyPreview);

    const copyImage = [...image];
    copyImage.splice(i, 1);
    setImage(copyImage);

    const copyImageName = [...imageName];
    copyImageName.splice(i, 1);
    setImageName(copyImageName);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Overley className={open ? 'show' : 'hide'}>
      <Modal>
        <MdClose className="close" onClick={handleClose}/>
        <span className="title">1:1 문의</span>
        <div className="form-box">
          <div className="input-box">
            <span className="input-title">유형</span>
            <FilterOuter>
              <FilterBox onClick={() => { setOpenFilter(!openFilter); }}>
                {category}
              </FilterBox>
              <FilterList open={openFilter}>
                {
                  option.map((item, i) => {
                    return (
                      <div key={i} className="item" onClick={() => {
                        setCategory(item);
                        setOpenFilter(false);
                      }}>{item}</div>
                    )
                  })
                }
              </FilterList>
            </FilterOuter>
          </div>
          <div className="input-box">
            <span className="input-title">제목</span>
            <Input type="text" spellCheck="false" placeholder="제목을 입력해주세요" onChange={handleTitle}/>
          </div>
          <div className="input-box">
            <span className="input-title top">내용</span>
            <Textarea spellCheck="false" placeholder="내용을 입력해주세요" onChange={handleContent}/>
          </div>
          <div className="input-box">
            <span className="input-title">이미지</span>
            <label htmlFor="file">
              <MdAddAPhoto className="icon"/>
              <span className="upload-text">이미지형식(JPG, JPEG, PNG)만 첨부 가능합니다</span>
              <span className="upload-text">이미지는 최대 10장까지 첨부 가능합니다</span>
            </label>
            <Input id="file" type="file" multiple onChange={handleImage}/>
          </div>
          <div className="img-box">
            {
              imagePreview.length > 0
              ? imagePreview.map((item, i) => {
                  return (
                    <div className="img-item" key={i}>
                      <img src={item.image} alt={item.name}/>
                      <MdClose className="delete" onClick={() => {handleDeleteImage(i);}} />
                    </div>
                  )
                })
              : null
            }
          </div>
        </div>
        <SubmitButton true={imagePreview.length > 0}>등록하기</SubmitButton>
      </Modal>
    </Overley>
  )
};

export default CreateModal;