import styled from "styled-components";
import { MdOutlinePowerSettingsNew , MdArrowRight, MdRestartAlt, MdOutlineListAlt, MdOutlineFormatListBulleted, MdLocalShipping, MdPerson, MdLightbulbOutline, MdOutlineStickyNote2, MdSettings } from "react-icons/md";
import { useState } from "react";
import Main from "./main";
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
        opacity: 0.5;
      }
    }
  }
`

const ContentBox = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: 250px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`
const Admin = () => {

  const [tab, setTab] = useState('a');

  return (
    <AdminBox>
      <SideMenuBox>
        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}/>
        <MenuItem>
          <MdOutlineFormatListBulleted className="icon"/>
          <span className="itemtitle">상품관리</span>
        </MenuItem>
        <MenuItem>
          <MdLocalShipping className="icon"/>
          <span className="itemtitle">주문/배송관리</span>
        </MenuItem>
        <MenuItem>
          <MdPerson className="icon"/>
          <span className="itemtitle">회원관리</span>
        </MenuItem>
        <MenuItem>
          <MdOutlineStickyNote2 className="icon"/>
          <span className="itemtitle">문의내역</span>
        </MenuItem>
        <MenuItem>
          <MdLightbulbOutline className="icon"/>
          <span className="itemtitle">공지사항</span>
        </MenuItem>
        <MenuItem>
          <MdSettings className="icon"/>
          <span className="itemtitle">설정</span>
        </MenuItem>
        
      </SideMenuBox>
      <ContentBox>
        <ContentNavBox>
          <div className="inner">
            <MdArrowRight className="icon"/>
            <span className="menu">Home</span>
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
  let componentToRender;

  if (tab === 'a') {
    componentToRender = <Main/>;
  } else if (tab === 'b') {
    componentToRender = <span>2</span>;
  } else if (tab === 'c') {
    componentToRender = <span>3</span>;
  }
  return <div>{componentToRender}</div>
}


export default Admin;