import { useEffect, useState } from "react";
import { MdArrowRight, MdCall, MdForward, MdKeyboardArrowDown, MdKeyboardArrowRight, MdMessage, MdOutlineAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FAQ from "./faq";
import Notice from "./notice";
import QNA from "./qna"

const ContainerBox = styled.div`
  width: 850px;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100);
  border: 1px solid red;
`
const Card = styled.div`
  margin: 0% 0% 0% 3%;
  width: 47%;
  height: 220px;
  display: inline-flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ddd;
    margin-bottom: 10px;
    .header-title {
      color: #555;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .morebox {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #666;
    .icon {
      font-size: 18px;
    }
    &:hover {
      color: var(--color);
    }
  }
`
const CardItem = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`

const BottomCard = styled(Card)`
  padding: 20px;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.1);
  border-radius: 6px;
  height: fit-content;
  color: #666;
  .icon-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .title {
      font-weight: bold;
      font-size: 20px;
    }
    .icon {
      font-size: 20px;
      margin-right: 5px;
    }
  }
  .main-text {
    font-size: 22px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .sub-textbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    .text-icon {
      font-size: 18px;
      margin-right: 5px;
      color: var(--color);
    }
    .sub-text {
      font-size: 16px;
    }
  }
`

const PartsBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

const PartsHeader = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  .title {
    color: #555;
    font-weight: bold;
    font-size: 24px;
    margin-right: 10px;
  }
  .sub-title {
    font-size: 14px;
    color: #aaa;
  }
`


const Container = ({ path, setNav }) => {
  const navigate = useNavigate();
  const initCount = [
    { name: '공지사항', url: 'notice' },
    { name: '자주묻는 질문', url: 'faq' },
    { name: '1:1 문의', url: 'qna' },
    { name: '상품후기', url: 'review' }
  ];
  let result;
  if (path === 'notice') {
    result = <Notice/>
  } else if (path === 'faq') {
    result = <FAQ/>
  } else if (path === 'qna') {
    result = <QNA/>
  } else if (path === 'estimate') {
    result =
      <PartsBox>
        <PartsHeader>
          <span className="title">상품후기</span>
          <span className="sub-title">미정</span>
        </PartsHeader>
      </PartsBox>
  }

  return (
    <ContainerBox>
      {result}
    </ContainerBox>
  )

};

export default Container;