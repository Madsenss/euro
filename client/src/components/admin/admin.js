import styled from "styled-components";
import { MdOutlinePowerSettingsNew , MdArrowRight, MdRestartAlt, MdOutlineFormatListBulleted, MdLocalShipping, MdPerson, MdLightbulbOutline, MdOutlineStickyNote2, MdSettings, MdHome, MdSell } from "react-icons/md";
import { useState } from "react";
import Main from "./main";
import Product from "./product/product";
import Category from "./category";
const AdminBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
`
const SideMenuBox = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0px;
  background-color: rgb(30, 35, 46);
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 200px;
    filter: brightness(1.7);
    margin: 30px 0px 30px 0px;
    cursor: pointer;
  }
`
const MenuItem = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  padding: 10px 0px 10px 10px;
  cursor: pointer;
  .icon {
    font-size: 30px;
    margin-right: 10px;
  }
  .itemtitle {
    font-size: 18px;
  }
  &:hover {
    background-color: var(--color);
  }
`

const ContentNavBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    width: 100%;
    height: 50px;
    padding-left: 10px;
    border-bottom: 1.5px solid #ddd;
    display: flex;
    align-items: center;
    .icon {
      font-size: 30px;
    }
    .menu {
      font-size: 24px;
      font-weight: bold;
    }
  }
  .iconbox {
    position: absolute;
    right: 25px;
    .icon {
      cursor: pointer;
      font-size: 28px;
      margin-left: 10px;
      transition: all 0.2s;
      &:hover {
        color: var(--color);
      }
    }
  }
`

const ContentBox = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  margin-left: 250px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`
const Admin = () => {

  const [tab, setTab] = useState('홈');
  const menuItems = [
    { icon: <MdHome className="icon" />, title: "홈" },
    { icon: <MdOutlineFormatListBulleted className="icon" />, title: "카테고리 관리" },
    { icon: <MdSell className="icon" />, title: "상품관리" },
    { icon: <MdLocalShipping className="icon" />, title: "주문/배송관리" },
    { icon: <MdPerson className="icon" />, title: "회원관리" },
    { icon: <MdOutlineStickyNote2 className="icon" />, title: "문의내역" },
    { icon: <MdLightbulbOutline className="icon" />, title: "공지사항" },
    { icon: <MdSettings className="icon" />, title: "설정" },
  ];
  return (
    <AdminBox>
      <SideMenuBox>
        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} onClick={()=>{setTab('홈')}} alt="logo"/>
        {
          menuItems.map((item, i)=>{
            return (
              <MenuItem key={i} onClick={()=>{setTab(item.title)}}>
                {item.icon}
                <span className="itemtitle">{item.title}</span>
              </MenuItem>
            )
          })
        }       
      </SideMenuBox>
      <ContentBox>
        <ContentNavBox>
          <div className="inner">
            <MdArrowRight className="icon"/>
            <span className="menu">{tab}</span>
            {/* <button onClick={()=>{setTab('a')}}>A</button>
            <button onClick={()=>{setTab('b')}}>B</button>      */}
          </div>
          <div className="iconbox">
            <MdRestartAlt className="icon"/>
            <MdOutlinePowerSettingsNew className="icon"/>
          </div>
        </ContentNavBox>
        <Container tab={tab}/>
      </ContentBox>
    </AdminBox>
  )
};

const Container = ({ tab }) => {

  const tabMapping = {
    '홈': <Main />,
    '카테고리 관리': <Category />,
    '상품관리': <Product/>,
    '주문/배송관리': <span>3</span>,
    '회원관리': <span>4</span>,
    '문의내역': <span>5</span>,
    '공지사항': <span>6</span>,
    '설정': <span>7</span>,
  };
  const componentToRender = tabMapping[tab] || null;
  return <div>{componentToRender}</div>
}


export default Admin;