import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "./container";

const MyPageBox = styled.div`
  padding-top: 80px;
  width: 1100px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const SideNav = styled.div`
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .title {
    color: #555;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    margin: 0px 0px 20px 0px;
  }
  .outer {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  }
`
const SideNavItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;
  .icon {
    font-size: 20px;
  }
  &.active {
    font-weight: bold;
    color: var(--color);
    background-color: rgb(243, 243, 243);
    border: 1px solid transparent;
    &:hover {
      background-color: rgb(243, 243, 243);
    }
  }
  &:hover {
    font-weight: bold;
    color: var(--color);
    background-color: rgb(243, 243, 243);
  }
`

const MyPageMain = ({ path, orderNumber }) => {

  const navigate = useNavigate();
  const [nav, setNav] = useState('order');

  return (
    <MyPageBox>
      <SideNav>
        <div className="title">마이페이지</div>
        <div className="outer">
          <SideNavItem className={nav === 'order' ? 'active' : ''} onClick={() => { setNav('order'); navigate('/mypage/order'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
            <span>주문내역</span>
            <MdOutlineKeyboardArrowRight className="icon" />
          </SideNavItem>
          <SideNavItem className={nav === 'pick' ? 'active' : ''} onClick={() => { setNav('pick'); navigate('/mypage/pick'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
            <span>찜한상품</span>
            <MdOutlineKeyboardArrowRight className="icon" />
          </SideNavItem>
          <SideNavItem className={nav === 'address' ? 'active' : ''} onClick={() => { setNav('address'); navigate('/mypage/address'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
            <span>배송지 관리</span>
            <MdOutlineKeyboardArrowRight className="icon" />
          </SideNavItem>
          <SideNavItem className={nav === 'inquiry' ? 'active' : ''} onClick={() => { setNav('inquiry'); navigate('/mypage/inquiry'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
            <span>상품문의</span>
            <MdOutlineKeyboardArrowRight className="icon" />
          </SideNavItem>
          <SideNavItem className={nav === 'review' ? 'active' : ''} onClick={() => { setNav('review'); navigate('/mypage/review'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
            <span>상품후기</span>
            <MdOutlineKeyboardArrowRight className="icon" />
          </SideNavItem>
          <SideNavItem className={nav === 'info' ? 'active' : ''} onClick={() => { setNav('info'); navigate('/mypage/info'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
            <span>개인정보 수정</span>
            <MdOutlineKeyboardArrowRight className="icon" />
          </SideNavItem>
        </div>
      </SideNav>
      <Container path={path} orderNumber={orderNumber}/>
    </MyPageBox>
  )
};

export default MyPageMain;