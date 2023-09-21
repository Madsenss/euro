import { MdBusiness, MdDescription, MdEmail, MdFax, MdLocationOn, MdLockPerson, MdPhone } from "react-icons/md";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const FooterBox = styled.div`
  width: 1350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

const FooterInner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 20px 0px;
  .logo {
    width: 230px;
  }
`
const InfoBox = styled.div`
  .row {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
  }
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3px 0px 3px 0px;
    .icon {
      font-size: 16px;
      margin-right: 5px;
    }
    span {
      color: #666;
      font-size: 14px;
    }
  }
`
const SNSBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .icon {
    cursor: pointer;
    margin-left: 15px;
    font-size: 24px;
    border-radius: 50%;
    padding: 8px;
    background-color: #aaa;
    color: #fff;
    transition: all 0.25s;
    &:hover {
      background-color: var(--color);
      opacity: 0.7;
    }
  }
`
const ImgBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  .es {
    width: 40px;
  }
  .es2 {
    width: 45px;
    margin-left: 15px;
  }
`

const Edge = styled.div`
  width: 100%;
  height: fit-content;
  border-top: 1.5px solid #ddd;
  border-bottom: 1.5px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    width: 1350px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: start;
    .item {
      cursor: pointer;
      font-size: 14px;
      padding: 10px 0px 10px 0px;
      margin-right: 30px;
      &:hover {
        font-weight: bold;
      }
    }
  }
`

const Copyright = styled.div`
  width: 100%;
  height: fit-content;
  background-color: var(--color);
  color: #eee;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  border-radius: 2px;
  padding: 4px 0px 4px 0px;
`



const Footer = () => {
  return (
    <>
      <Edge>
        <div className="inner">
          <div className="item">이용약관</div>
          <div className="item">개인정보처리방침</div>
        </div>
      </Edge>
      <FooterBox>
        <FooterInner>
          <img className="logo" src={process.env.PUBLIC_URL + '/logo2.png'} alt="logo" />
          <InfoBox>
            <div className="row">
              <div className="col">
                <div className="item">
                  <MdBusiness className="icon" />
                  <span>EuroSystem | 대표이사 김규한</span>
                </div>
                <div className="item">
                  <MdLocationOn className="icon" />
                  <span>경기 안산시 단원구 ??로 ???</span>
                </div>
              </div>
              <div className="col">
                <div className="item">
                  <MdPhone className="icon" />
                  <span>031-123-4567&nbsp;|&nbsp;</span>
                  <MdFax className="icon" />
                  <span>031-123-4567</span>
                </div>
                <div className="item">
                  <MdEmail className="icon" />
                  <span>eurosystems@eurosystems.co.kr</span>
                </div>
              </div>
              <div className="col">
                <div className="item">
                  <MdDescription className="icon" />
                  <span>사업자등록번호 : 123-45-67890</span>
                </div>
                <div className="item">
                  <MdDescription className="icon" />
                  <span>통신판매업신고번호 : 2023-경기안산-??호</span>
                </div>
              </div>
            </div>
          </InfoBox>
          <SNSBox>
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaTwitter className="icon" />
          </SNSBox>
          <ImgBox>
            <img className="es" src={process.env.PUBLIC_URL + '/es.png'} />
            <img className="es2" src={process.env.PUBLIC_URL + '/es2.png'} />
          </ImgBox>
        </FooterInner>
      </FooterBox>
      <Copyright>Copyright 2023 EuroSystem. All Rights Reserved.</Copyright>
    </>
  )
};

export default Footer;