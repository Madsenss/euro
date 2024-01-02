import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DaumPostcodeEmbed from "react-daum-postcode";
import { MdAddAPhoto, MdCheck, MdClose } from "react-icons/md";
import styled, { keyframes } from "styled-components";

// 폼 레이아웃
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FormBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0.5px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`
const FormHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .header-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .header-sub-title {
    font-size: 14px;
    color: #777;
  }
`
const FormItem = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  .item-header-title {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
  }
`


// 하단 버튼
const ButtonBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
const Button = styled.div`
  cursor: pointer;
  width: 90px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color);
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  border-radius: 50px;
  margin: 0px 10px 0px 10px;
  transition: all 0.25s;
  &:hover {
    opacity: 0.7;
  }
`
const OutlineButton = styled(Button)`
  border: 1.5px solid var(--color);
  background-color: #fff;
  color: var(--color);
  &:hover {
    background-color: var(--color);
    color: #fff;
    opacity: initial;
  }
`


// 약관동의박스
const ScrollBox = styled.div`
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  border: 1.5px solid #ddd;
  color: #555;
  padding: 20px;
  .scroll-text {
    font-size: 12px;
  }
`
const ScrollInner = styled.div`
  width: 100%;
  height: fit-content;
  display: block;
  margin-top: 10px;
`
const InnerItem = styled.div`
  width: ${props => props.width};
  height: fit-content;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  .inner-title {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 0px 8px 0px;
    font-size: 12px;
    font-weight: bold;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    border-left: 1px solid #aaa;
    &.br {
      border-right: 1px solid #aaa;
    }
  }
  .inner-text-box {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #aaa;
    border-left: 1px solid #aaa;
    &.br {
      border-right: 1px solid #aaa;
    }
    padding: 10px;
    .inner-text {
      font-size: 12px;
      margin-bottom: 3px;
      &.bold {
        font-weight: bold;
        text-decoration-line: underline;
        font-size: 14px;
      }
    }
  }
`
const AgreeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .agree-title {
    font-weight: bold;
    font-size: 14px;
    margin: 20px 0px 10px 0px;
  }
  .check-box {
    margin-top: 20px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    .check {
      cursor: pointer;
      font-size: 16px;
      color: #aaa;
      padding: 1px;
      border: 1.5px solid #ddd;
      border-radius: 50%;
      margin-right: 5px;
      &.active {
        background-color: var(--color);
        border: 1.5px solid var(--color);
        color: #fff;
      }
    }
    .check-text {
      font-size: 14px;
    }
  }
`


// 인풋
const InputBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  .input-title {
    font-size: 15px;
    color: #777;
    width: 150px;
  }
  .top {
    margin-bottom: auto;
    padding-top: 10px;
  }
  &.hide {
    display: none;
  }
  .check-box {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    .check-title {
      font-size: 14px;
      &.ml {
        margin-left: 10px;
      }
    }
    .check {
      cursor: pointer;
      font-size: 16px;
      color: #aaa;
      padding: 1px;
      border: 1.5px solid #ddd;
      border-radius: 50%;
      margin-left: 5px;
      &.active {
        background-color: var(--color);
        border: 1.5px solid var(--color);
        color: #fff;
      }
    }
  }
  label {
    cursor: pointer;
    width: 500px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #ddd;
    border-radius: 8px;
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
  &.preview-box {
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
    .preview-item {
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

`
const Input = styled.input`
  border: none;
  border-bottom: 1.5px solid #ddd;
  width: 500px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.25s;
  &:focus {
    outline: none;
    border-bottom: 1.5px solid var(--color);
  }
  &::placeholder {
    font-weight: initial;
    color: #ddd;
  }
  &[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  &[type=file] {
    display: none;
  }
`
const Textarea = styled.textarea`
  width: 480px;
  height: 150px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  transition: all 0.25s;
  font-size: 14px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1.5px solid var(--color);
  }
  resize: none;
`

// 모달
const Overley = styled.div`
  z-index: 999;
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
const ZipCodeModal = styled.div`
  position: relative;
  z-index: 1000;
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245, 245, 245);
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  padding: 30px;
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
  .modal-title {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
  .mt {
    margin-top: auto;
  }
`



const PartnerShip = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [openZipCode, setOpenZipcode] = useState(false);
  const [address, setAddress] = useState('');
  const [subAddress, setSubAddress] = useState('');
  const [isURL, setIsURL] = useState(true);
  const [image, setImage] = useState([]);
  const [imageName, setImageName] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    setAddress(fullAddress);
    setOpenZipcode(false);
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
  };
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
    <FormBox>
      <Overley className={openZipCode ? 'show' : 'hide'}>
        <ZipCodeModal>
          <span className="modal-title">우편번호 검색</span>
          <MdClose className="close" onClick={() => { setOpenZipcode(false); }} />
          <DaumPostcodeEmbed
            onComplete={handleComplete}
            autoClose={false}
          />
        </ZipCodeModal>
      </Overley>
      <FormHeader>
        <span className="header-title">제휴문의</span>
        <span className="header-sub-title">당사와비즈니스 제휴 또는 협업 시너지 가능한 제품/솔루션/서비스를 제안해주시면 검토 후 담당자를 통해서 연락 드리겠습니다.</span>
      </FormHeader>

      <FormItem>
        <span className="item-header-title">고객 정보</span>
        <InputBox>
          <span className="input-title">사업자등록번호</span>
          <Input type="number" spellCheck="false" placeholder="사업자등록번호를 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title">기업/사업체명</span>
          <Input type="text" spellCheck="false" />
        </InputBox>
        <InputBox>
          <span className="input-title">대표자 명</span>
          <Input type="text" spellCheck="false" />
        </InputBox>
        <InputBox>
          <span className="input-title">사업장 주소</span>
          <Input type="text" spellCheck="false" value={address} readOnly />
          <OutlineButton onClick={() => { setOpenZipcode(!openZipCode); }}>주소 검색</OutlineButton>
        </InputBox>
        <InputBox className={address === '' ? 'hide' : ''}>
          <span className="input-title"></span>
          <Input type="text" spellCheck="false" placeholder="상세주소를 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title">이름</span>
          <Input type="text" spellCheck="false" placeholder="이름을 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title">휴대폰 번호</span>
          <Input type="number" spellCheck="false" placeholder="숫자만 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title">이메일</span>
          <Input type="email" spellCheck="false" placeholder="이메일 주소를 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title">홈페이지 주소</span>
          <div className="check-box">
            <span className="check-title">있음</span>
            <MdCheck className={`check ${isURL ? ' active' : ''}`} onClick={() => { setIsURL(true); }} />
          </div>
          <div className="check-box">
            <span className="check-title ml">없음</span>
            <MdCheck className={`check ${isURL ? '' : ' active'}`} onClick={() => { setIsURL(false); }} />
          </div>
        </InputBox>
        <InputBox className={isURL ? '' : 'hide'}>
          <span className="input-title"></span>
          <Input type="text" spellCheck="false" placeholder="URL을 입력해 주세요" />
        </InputBox>
      </FormItem>

      <FormItem>
        <span className="item-header-title">제품 정보</span>
        <InputBox>
          <span className="input-title">제목</span>
          <Input type="text" spellCheck="false" placeholder="문의 제목을 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title top">상세 설명</span>
          <Textarea spellCheck="false" />
        </InputBox>
        <InputBox>
          <span className="input-title">첨부파일</span>
          <label htmlFor="file">
            <MdAddAPhoto className="icon" />
            <span className="upload-text">이미지형식(JPG, JPEG, PNG)만 첨부 가능합니다</span>
            <span className="upload-text">이미지는 최대 10장까지 첨부 가능합니다</span>
          </label>
          <Input id="file" type="file" onChange={handleImage} multiple />
        </InputBox>
        <InputBox className={imagePreview.length < 0 ? 'hide' : 'preview-box'}>
          {
            imagePreview.length > 0
              ? imagePreview.map((item, i) => {
                return (
                  <div className="preview-item" key={i}>
                    <img src={item.image} alt={item.name} />
                    <MdClose className="delete" onClick={() => { handleDeleteImage(i); }} />
                  </div>
                )
              })
              : null
          }
        </InputBox>
      </FormItem>

      <FormItem>
        <span className="item-header-title">견적 문의 서비스 약관동의</span>
        <AgreeBox>
          <span className="agree-title">개인정보 수집 및 이용 동의</span>
          <ScrollBox>
            <span className="scroll-text">※ 귀하께서는 필수항목 수집·이용에 대한 동의를 거부하실 수 있으나, 이는 서비스 제공에 필수적으로 제공되어야 하는 정보이므로, 동의를 거부하실 경우 견적문의 신청 서비스 이용을 하실 수 없습니다.</span>
            <ScrollInner>
              <InnerItem width="30%">
                <div className="inner-title">수집항목</div>
                <div className="inner-text-box">
                  <p className="inner-text">□ 사업자등록번호, 기업/사업체명, 대표자명, 사업장 주소, 이름, 휴대폰번호, 이메일, 제목, 상세설명, 홈페이지 주소</p>
                </div>
              </InnerItem>
              <InnerItem width="40%">
                <div className="inner-title">수집목적</div>
                <div className="inner-text-box">
                  <p className="inner-text">□ 비즈니스 제휴 문의 서비스 제공</p>
                  <p className="inner-text">□ 서비스 개선 및 신규 서비스 개발</p>
                  <p className="inner-text">□ 고객 문의 응대 및 분쟁 처리</p>
                </div>
              </InnerItem>
              <InnerItem width="30%">
                <div className="inner-title br">보유기간</div>
                <div className="inner-text-box br">
                  <p className="inner-text bold">수집일로부터 3개월</p>
                </div>
              </InnerItem>
            </ScrollInner>
          </ScrollBox>
          <div className="check-box">
            <MdCheck className={`check ${agree ? ' active' : ''}`} onClick={() => { setAgree(!agree); }} />
            <span className="check-text">위의 개인정보 수집 및 이용에 동의합니다. (필수)</span>
          </div>
        </AgreeBox>
      </FormItem>
      <ButtonBox>
        <Button onClick={() => { navigate(-1); }}>취소</Button>
        <Button onClick={() => {

        }}>보내기</Button>
      </ButtonBox>
    </FormBox>
  )
};

export default PartnerShip;