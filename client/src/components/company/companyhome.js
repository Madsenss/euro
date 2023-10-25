import styled from "styled-components";
import Nav from "../home/nav";
import Footer from "../home/footer";
import { useState } from "react";
import About from "./about";
import Location from "./location";

const CompanyBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CompanyBanner = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: fit-content;
  background-image: url(${process.env.PUBLIC_URL + '/cb3.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  .dark {
    width: 100%;
    height: fit-content;
    background-color: rgb(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner {
    position: relative;
    width: 1100px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .banner-title {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 10px;
    }
    .banner-subtitle {
      font-size: 20px;
      color: #fff;
    }
  }
`
const TabBox = styled.div`
  position: absolute;
  bottom: 0px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  .item {
    cursor: pointer;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #ddd;
    &.active {
      border-bottom: 1px solid #fff;
      color: var(--color);
    }
  }
`
const Container = (props) => {
  const tabContents = {
    '회사소개' : <About/>,
    '찾아오시는 길': <Location/>
  };
  const content = tabContents[props.tab]
  return (
    <div>{content}</div>
  )
}

const CompanyHome = () => {

  const [tab, setTab] = useState('회사소개');

  return (
    <CompanyBox>
      <Nav/>
      <CompanyBanner>
        <div className="dark">
          <div className="inner">
            <span className="banner-title">회사소개</span>
            <span className="banner-subtitle">Breakthrough Engineering you can count on</span>
            <TabBox>
              <div className={'item ' + `${tab === '회사소개' ? 'active' : ''}`} onClick={()=>{setTab('회사소개')}}>회사소개</div>
              <div className={'item ' + `${tab === '찾아오시는 길' ? 'active' : ''}`} onClick={()=>{setTab('찾아오시는 길')}}>찾아오시는 길</div>
            </TabBox>
          </div>
        </div>
      </CompanyBanner>
      <Container tab={tab}/>
      <Footer/>
    </CompanyBox>
  )
};

export default CompanyHome;