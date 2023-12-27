import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
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
  height: 1200px;
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
`
const Input = styled.input`
  border: none;
  border-bottom: 1.5px solid #ddd;
  width: 400px;
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
`
const Textarea = styled.textarea`
  width: 380px;
  height: 80px;
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

const Product = () => {
  const navigate = useNavigate();
  return (
    <FormBox>
      <FormHeader>
        <span className="header-title">견적문의</span>
        <span className="header-sub-title">문의하시는 내용을 자세히 입력해 주시면 보다 신속하게 연락 받으실 수 있습니다.</span>
      </FormHeader>

      <FormItem>
        <span className="item-header-title">고객 정보</span>
        <InputBox>
          <span className="input-title">이름</span>
          <Input type="text" spellCheck="false" placeholder="이름을 입력해 주세요"/>
        </InputBox>
        <InputBox>
          <span className="input-title">휴대폰 번호</span>
          <Input type="number" spellCheck="false" placeholder="숫자만 입력해 주세요"/>
        </InputBox>
        <InputBox>
          <span className="input-title">이메일</span>
          <Input type="email" spellCheck="false" placeholder="이메일 주소를 입력해 주세요"/>
        </InputBox>
      </FormItem>

      <FormItem>
        <span className="item-header-title">제품 정보</span>
        <InputBox>
          <span className="input-title">제목</span>
          <Input type="text" spellCheck="false" placeholder="문의 제목을 입력해 주세요"/>
        </InputBox>
        <InputBox>
          <span className="input-title">제품</span>
          <Input type="text" spellCheck="false" placeholder="필터자리"/>
        </InputBox>
        <InputBox>
          <span className="input-title top">상세 설명</span>
          <Textarea spellCheck="false"/>
        </InputBox>
      </FormItem>

      <FormItem>
        <span className="item-header-title">견적 문의 서비스 약관동의</span>
      </FormItem>
      <ButtonBox>
        <Button onClick={() => { navigate(-1); }}>취소</Button>
        <Button onClick={() => {

        }}>보내기</Button>
      </ButtonBox>
    </FormBox>
  )
};

export default Product;