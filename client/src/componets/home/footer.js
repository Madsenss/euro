import { MdBusiness, MdDescription, MdEmail, MdFax, MdLocationOn, MdLockPerson, MdPhone } from "react-icons/md";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const FooterBox = styled.div`
  width: 1350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`

const FooterInner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
`
const LogoBox = styled.div`
  padding: 0px 0px 0px 50px;
  width: 450px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .logo {
    width: 240px;
    margin-bottom: 60px;
  }
  .textbox {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      align-items: center;
      margin-top: 8px;
      .icon {
        font-size: 18px;
        margin-right: 5px;
      }
      span {
        font-size: 16px;
      }
    }
  }
`
const InfoBox = styled.div`
  width: 400px;
  height: fit-content;
  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .inner {
    display: inline-flex;
    width: 50%;
    height: fit-content;
    flex-direction: column;
    vertical-align: top;
    margin-bottom: 20px;
    .item {
      width: fit-content;
      cursor: pointer;
      font-size: 16px;
      margin-top: 8px;
      &:hover {
        font-weight: bold;
      }
    }
  }

`

const CallBox = styled.div`
  width: 450px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .topbox {
    display: flex;
    flex-direction: row;
    .left {
      width: 50%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }
    .right {
      width: 50%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      .head {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .text {
    font-size: 16px;
    margin-top: 8px;
    font-weight: bold;
  }
  .call {
    display: flex;
    align-items: center;
    .icon {
      font-size: 24px;
      margin-right: 5px;
    }
    font-size: 22px;
    font-weight: bold;
    margin-top: 7px;
    margin-bottom: 10px;
  }
  .edge {
    color: var(--color);
    font-weight: bold;
  }
  .snsbox {
    margin-top: 40px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .snstitle {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .iconbox {
      display: flex;
      flex-direction: row;
      .snsicon {
        cursor: pointer;
        font-size: 30px;
        margin: 0px 5px 0px 5px;
        border-radius: 50%;
        padding: 7px;
        background-color: #aaa;
        color: #fff;
        transition: all 0.25s;
        &:hover {
          background-color: var(--color);
        }
      }
    }
  }
`
const Copyright = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #444;
  color: #eee;
  text-align: center;
  font-weight: bold;
  /* border-radius: 10px; */
  padding: 3px 0px 3px 0px;
  margin-top: 20px;
`

const Edge = styled(Copyright)`
  margin-bottom: 20px;
  margin-top: 0;
`

const Footer = () => {
  return (
    <FooterBox>
      <Edge>
        We are a team of designers and developers that create high quality Magento, Prestashop, Opencart...
      </Edge>
      <FooterInner>
        <LogoBox>
          <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
          <div className="textbox">
            <div className="item">
              <MdBusiness className="icon" />
              <span>Euro Systems | 대표이사 홍길동</span>
            </div>
            <div className="item">
              <MdLocationOn className="icon" />
              <span>경기 안산시 단원구 산단로 242</span>
            </div>
            <div className="item">
              <MdPhone className="icon" />
              <span>031-489-6500&nbsp;|&nbsp;</span>
              <MdFax className="icon" />
              <span>031-489-6229</span>
            </div>
            <div className="item">
              <MdEmail className="icon" />
              <span>eurosystems@eurosystems.co.kr</span>
            </div>
            <div className="item">
              <MdDescription className="icon"/>
              <span>통신판매업신고번호 : 2023-경기안산-11호</span>
              <span></span>
            </div>
            <div className="item">
              <MdLockPerson className="icon"/>
              <span>개인정보책임자 : 홍길동</span>
            </div>
          </div>
        </LogoBox>

        <InfoBox>
          <div className="inner">
            <span className="title">회사안내</span>
            <span className="item">회사소개</span>
            <span className="item">찾아오시는길</span>
            <span className="item">개인정보처리방침</span>
            <span className="item">이용안내</span>
          </div>
          <div className="inner">
            <span className="title">뉴스센터</span>
            <span className="item">공지사항</span>
            <span className="item">이벤트</span>
          </div>
          <div className="inner">
            <span className="title">고객센터</span>
            <span className="item">상품문의</span>
            <span className="item">상품후기</span>
            <span className="item">업무제휴</span>
            <span className="item">카탈로그 신청</span>
          </div>
          <div className="inner">
            <span className="title">배송관련</span>
            <span className="item">배송조회</span>
            <span className="item">주문취소</span>
            <span className="item">자주묻는질문</span>
          </div>
        </InfoBox>

        <CallBox>
          <div className="topbox">
            <div className="left">
              <span className="title">상담센터</span>
              <div className="call">
                <MdPhone className="icon"/>
                <span>031-111-1111</span>
              </div>
              <span className="text">평일 09:00 ~ 18:00</span>
              <span className="text">점심시간 12:00 ~ 13:00</span>
              <span className="text edge">주말 및 공휴일 휴무</span>
            </div>
            <div className="right">
              <span className="title">입금은행</span>
              <span className="text head">예금주 : (주)유로시스템즈</span>
              <span className="text">기업은행 031-366-5433</span>
              <span className="text">우리은행 1005-703-290234</span>
              <span className="text">국민은행 647701-04-032896</span>
              <span className="text">농협 301-0366-5433-91</span>

            </div>
          </div>

          <div className="snsbox">
            <span className="snstitle">EuroSystems와 소통하세요!</span>
            <div className="iconbox">
              <FaInstagram className="snsicon"/>
              <FaYoutube className="snsicon"/>
              <FaTwitter className="snsicon"/>
            </div>
          </div>
        </CallBox>
      </FooterInner>
      <Copyright>Copyright 2023 Euro Systems. All Rights Reserved.</Copyright>
    </FooterBox>
  )
};

export default Footer;