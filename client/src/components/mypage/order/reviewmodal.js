import { useState } from "react";
import { MdAddAPhoto, MdClose, MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
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
  width: 450px;
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
    margin-bottom: 20px;
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
  .product-box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1.5px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    img {
      width: 75px;
      height: 75px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 10px;
    }
    .text-box {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: column;
      .text {
        font-size: 14px;
        margin: 3px 0px 3px 0px;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        &.text-brand, &.text-price {
          color: #777;
        }
      }
    }
  }
  .star-box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
  }
  .button-box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .button {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: 1.5px solid var(--color);
      color: var(--color);
      border-radius: 4px;
      transition: all 0.25s;
      font-size: 14px;
      font-weight: bold;
      width: 195px;
      height: 38px;
      &:hover {
        background-color: var(--color);
        color: #fff;
      }
      &.none {
        border: 1.5px solid #ddd;
        color: #ddd;
        &:hover {
          background-color: #ddd;
          color: #777;
        }
      }
    }
  }
  .photo-box {
    margin-top: 20px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    label {
      cursor: pointer;
      width: 100%;
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
    input[type=file] {
      display: none;
    }
    .preview-box {
      margin-top: ${props => props.mt ? '20px' : '0'};
      width: fit-content;
      height: fit-content;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
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

const StarBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-outer {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .star-title {
    font-weight: bold;
    font-size: 18px;
    margin: 20px 0px 10px 0px;
  }
  .star-text {
    color: var(--color);
    font-size: 14px;
    font-weight: bold;
    margin: 5px 0px 10px 0px;
  }
`
const StarOuter = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0px 3px 0px 3px;
  .star {
    font-size: 36px;
  }
  .border {
    color: #ddd;
  }
  .outline {
    color: var(--color);
  }
`
const Textarea = styled.textarea`
  width: 390px;
  height: 100px;
  padding: 10px;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  transition: all 0.25s;
  font-size: 14px;
  &:focus{
    outline: none;
    border: 1.5px solid var(--color);
  }
  resize: none;
`


const ReviewModal = ({ open, onClose, selectedData }) => {
  const [star, setStar] = useState([false, false, false, false, false]);
  const [review, setReview] = useState('');
  const [image, setImage] = useState([]);
  const [imageName, setImageName] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const starCount = star.filter(item => item).length;
  const handleClose = () => {
    onClose();
  };
  const handleStar = (i) => {
    const copyStar = [...star];

    for (let j = 0; j < star.length; j++) {
      copyStar[j] = j <= i;
    }

    setStar(copyStar);
  };
  const handleReivew = (e) => {
    const value = e.target.value;
    setReview(value);
  }
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
  return (
    <Overley className={open ? 'show' : 'hide'}>
      <Modal mt={imagePreview.length > 0 ? true : false}>
        <MdClose className="close" onClick={handleClose} />
        <span className="title">리뷰쓰기</span>
        <div className="product-box">
          <img src={process.env.PUBLIC_URL + '/압정.png'} alt="img" />
          <div className="text-box">
            <span className="text text-brand">[Norgen]</span>
            <span className="text text-title">Excelon Plus box set (FRL) for extreme applications, G1/2, automatic drain, with shut-off valve</span>
            <span className="text text-price">13,500원</span>
          </div>
        </div>
        <StarBox>
          <span className="star-title">상품 만족도를 평가해 주세요</span>
          <div className="icon-outer">
            {
              star.map((item, i) => {
                return (
                  <StarOuter key={i} onClick={() => { handleStar(i) }}>
                    {item ? <MdOutlineStar className="star outline" /> : <MdOutlineStarBorder className="star border" />}
                  </StarOuter>
                )
              })
            }
          </div>
          <span className="star-text">{starCount}점</span>
          <Textarea placeholder="후기를 작성해 주세요" onChange={handleReivew} />
        </StarBox>
        <div className="photo-box">
          <label htmlFor="file">
            <MdAddAPhoto className="icon" />
            <span className="upload-text">이미지형식(JPG, JPEG, PNG)만 첨부 가능합니다</span>
            <span className="upload-text">이미지는 최대 5장까지 첨부 가능합니다</span>
          </label>
          <input id="file" type="file" multiple onChange={handleImage} />
          <div className="preview-box">
            {
              imagePreview.length > 0
                ? imagePreview.map((item, i) => {
                  return (
                    <div className="img-item" key={i}>
                      <img src={item.image} alt={item.name} />
                      <MdClose className="delete" onClick={() => { handleDeleteImage(i); }} />
                    </div>
                  )
                })
                : null
            }
          </div>
        </div>
        <div className="button-box">
          <div className="button none">취소</div>
          <div className="button">등록</div>
        </div>
      </Modal>
    </Overley>
  )
};

export default ReviewModal;