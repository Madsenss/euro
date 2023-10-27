import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MemberLoginBox = styled.div`
  padding: 200px 0px 200px 0px;
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 40px;
  }
  .find {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    margin-bottom: 20px;
    .dash {
      font-size: 12px;
      color: #aaa;
      margin: 0px 5px 0px 5px;
    }
    .find-item {
      cursor: pointer;
      font-size: 13px;
      transition: all 0.3s;
      &:hover {
        color: var(--color);
      }
    }
  }
`

const Input = styled.input`
  width: 335px;
  height: 45px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-top: 3px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.2);
  font-size: 14px;
  &:focus {
    outline: none;
    border: 1px solid var(--color);
  }
  &::placeholder {
    font-size: 14px;
  }
`

const Button = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
  background-color: var(--color);
  border: 1px solid var(--color);
  border-radius: 3px;
`
const SignupButton = styled(Button)`
  margin-bottom: 0;
  background-color: #fff;
  color: var(--color);
`
const MemberLogin = () => {

  const navigate = useNavigate();

  return (
    <MemberLoginBox>
      <span className="title">로그인</span>
      <Input type="text" placeholder="아이디를 입력해주세요"/>
      <Input type="password" placeholder="비밀번호를 입력해주세요"/>
      <div className="find">
        <span className="find-item">아이디 찾기</span>
        <span className="dash">|</span>
        <span className="find-item">비밀번호 찾기</span>
      </div>
      <Button>로그인</Button>
      <SignupButton onClick={()=>{navigate('/member/signup'); window.scrollTo({top: 0, behavior: 'auto'}); }}>회원가입</SignupButton>
    </MemberLoginBox>
  )
};

export default MemberLogin;