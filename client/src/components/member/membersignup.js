import { useState } from "react";
import { MdCheck, MdSearch } from "react-icons/md";
import styled from "styled-components";

const MemberSignupBox = styled.div`
  padding: 100px 0px 100px 0px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .signup-box {
    width: 600px;
    height: fit-content;
    padding: 20px 20px 20px 20px;
    border-top: 2px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item {
      width: 100%;
      height: 40px;
      margin-bottom: 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .input-title {
        width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }
  }
  .agree-box {
    border-top: 1.5px solid #ddd;
    padding: 20px;
    margin-bottom: 30px;
    width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    .agree-title {
      font-size: 14px;
    }
    .button-box {
      width: 420px;
      height: fit-content;
      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        margin-bottom: 10px;
        .edge {
          color: #aaa;
        }
      }
    }
  }
`

const Input = styled.input`
  margin: 0px 10px 0px 10px;
  width: 300px;
  height: 34.5px;
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
  &[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

const Button = styled.div`
  margin-left: auto;
  cursor: pointer;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: var(--color);
  background-color: #fff;
  border: 1px solid var(--color);
  border-radius: 3px;
  transition: all 0.2s;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.2);
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`
const ButtonSub = styled(Button)`
  margin-left: 10px;
  width: 314px;
  padding-right: 15px;
  .icon {
    font-size: 18px;
    margin-right: 5px;
  }
`
const SubmitButton = styled.div`
  cursor: pointer;
  width: 200px;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.2);
  transition: all 0.2s;
  &:hover {
    opacity: 0.7;
  }
`

const CheckButton = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 2px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1.5px solid #ddd;
  color: #aaa;
  font-size: 16px;
  margin-right: 8px;
  &.on {
    background-color: var(--color);
    color: #fff;
    border: 1.5px solid transparent;
  }
`

const MemberSignup = () => {
  const [check, setCheck] = useState([
    { title: '본인은 만 14세 이상입니다', compulsory: true, agree: false },
    { title: '이용약관 동의', compulsory: true, agree: false },
    { title: '개인정보 수집 및 이용 동의', compulsory: true, agree: false },
    { title: '무료배송, 할인쿠폰 등 혜택/정보 수신 동의', compulsory: false, agree: false }
  ]);
  const [checkData, setCheckData] = useState([]);
  const [allAgree, setAllAgree] = useState(false);

  const handleCheck = (i) => {
    const updatedCheck = check.map((item, index) => {
      if (index === i) {
        return { ...item, agree: !item.agree };
      }
      return item;
    });
  
    setCheck(updatedCheck);
  
    const updatedCheckData = updatedCheck.filter(item => item.agree).map(item => ({
      title: item.title,
      agree: true
    }));
    setCheckData(updatedCheckData);
  
    const isAllChecked = updatedCheck.every(item => item.agree);
    setAllAgree(isAllChecked);
  };

  const handleAllCheck = () => {
    const updatedAllAgree = !allAgree;

    const updatedCheck = check.map(item => ({ ...item, agree: updatedAllAgree }));
    setCheck(updatedCheck);
  
    const updatedCheckData = updatedAllAgree
      ? check.map(item => ({ title: item.title, agree: true }))
      : [];
    setCheckData(updatedCheckData);
  
    setAllAgree(updatedAllAgree);
  };


  return (
    <MemberSignupBox>
      <span className="title">회원가입</span>
      <div className="signup-box">
        <div className="item">
          <div className="input-title">아이디</div>
          <Input type="text" placeholder="아이디를 입력해 주세요" />
          <Button>중복확인</Button>
        </div>
        <div className="item">
          <div className="input-title">비밀번호</div>
          <Input type="password" placeholder="비밀번호를 입력해 주세요" />
        </div>
        <div className="item">
          <div className="input-title">비밀번호확인</div>
          <Input type="password" placeholder="비밀번호를 한번 더 입력해 주세요" />
        </div>
        <div className="item">
          <div className="input-title">이름</div>
          <Input type="text" placeholder="이름을 입력해 주세요" />
          <Button>중복확인</Button>
        </div>
        <div className="item">
          <div className="input-title">이메일</div>
          <Input type="email" placeholder="이메일을 입력해 주세요" />
          <Button>중복확인</Button>
        </div>
        <div className="item">
          <div className="input-title">휴대폰</div>
          <Input type="number" placeholder="숫자만 입력해 주세요" />
          <Button>인증번호 받기</Button>
          {/* 
            얘를 누르면 밑에 타이틀 뺀 긴 인풋하나에 우측에 인증번호 확인 버튼 만들어야함
          */}
        </div>
        <div className="item">
          <div className="input-title">주소</div>
          <ButtonSub>
            <MdSearch className="icon" />
            <span>주소검색</span>
          </ButtonSub>
          {/* 
            얘를 누르면 카카오 주소 띄우고, 상세주소 받아서 클릭하면
            인풋 리드온리에 메인주소 , 그 밑에 상세주소 인풋창 만들고
            상단 리드온리 우측에 재검색 버튼으로 폼 변경해야함
          */}
        </div>
        <div className="item">
          <div className="input-title">성별</div>
        </div>
        <div className="item">
          <div className="input-title">생년월일</div>
        </div>
      </div>
      <div className="agree-box">
        <span className="agree-title">이용약관 동의</span>
        <div className="button-box">
          <div className="item">
            <CheckButton className={allAgree ? 'on' : null} onClick={()=>{ handleAllCheck(); }}>
              <MdCheck />
            </CheckButton>
            <span className="check-title">전체 동의합니다.</span>
          </div>
          {
            check.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <CheckButton className={check[i].agree ? 'on' : null} onClick={() => {
                    handleCheck(i);
                  }}>
                    <MdCheck />
                  </CheckButton>
                  <span className="check-title">{item.title}&nbsp;</span>
                  <p className="edge">
                    {
                      item.compulsory
                        ? '(필수)'
                        : '(선택)'
                    }
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
      <SubmitButton>가입하기</SubmitButton>
    </MemberSignupBox>
  )
};

export default MemberSignup;