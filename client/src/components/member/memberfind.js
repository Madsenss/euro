import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MemberFindBox = styled.div`
  padding: 150px 0px 200px 0px;
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 40px;
  }
`
const TabBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  .item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 40px;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: #666;
  }
  .active {
    border-bottom: 2px solid var(--color);
    color: var(--color);
  }
`

const InputBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .input-title {
    margin-bottom: 15px;
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
  cursor: pointer;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  background-color: var(--color);
  border: 1px solid var(--color);
  border-radius: 3px;
`

const MemberFind = () => {
  const {whatfind} = useParams();
  const [tab, setTab] = useState('phone');

  const initData = [
    {title: '휴대폰 번호', placeholder: '휴대폰 번호를 입력해 주세요'},
    {title: '이메일', placeholder: '이메일을 입력해주세요'}
  ]
  return (
    <MemberFindBox>
      <span className="title">{whatfind === 'id' ? '아이디 찾기' : '비밀번호 찾기'}</span>
      <TabBox>
        <div className={`item ${tab === 'phone' ? 'active' : ''}`} onClick={() => { setTab('phone'); }}>휴대폰 인증</div>
        <div className={`item ${tab === 'email' ? 'active' : ''}`} onClick={() => { setTab('email'); }}>이메일 인증</div>
      </TabBox>
      <InputBox>
        <span className="input-title">{whatfind === 'id' ? '이름' : '아이디'}</span>
        <Input type="text" placeholder={whatfind === 'id' ? '이름을 입력해 주세요' : '아이디를 입력해 주세요'}/>
      </InputBox>
      <InputBox>
        <span className="input-title">{tab === 'phone' ? '휴대폰 인증' : '이메일'}</span>
        <Input type={tab === 'phone' ? 'number' : 'email'} placeholder={tab === 'phone' ? '휴대폰 번호를 입력해 주세요' : '이메일을 입력해 주세요'}/>
      </InputBox>
      <Button>{tab === 'phone' ? '인증번호 받기' : '확인'}</Button>
    </MemberFindBox>
  )
};

export default MemberFind;