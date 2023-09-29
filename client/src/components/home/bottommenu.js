import { MdBusiness, MdNewspaper, MdOutlineAccountBalance, MdOutlineCall, MdPerson } from "react-icons/md";
import styled from "styled-components";

const MenuBox = styled.div`
  margin: 30px 0px 30px 0px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    padding: 20px 0px 20px 0px;
    width: 1350px;
    height: 180px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.1);
  }
  .item {
    vertical-align: top;
    padding: 0px 20px 0px 20px;
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1.5px solid #eee;
    .titlebox {
      width: fit-content;
      height: fit-content;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .icon {
        font-size: 26px;
        margin-right: 5px;
      }
    }
    .text {
      color: #666;
      margin-bottom: 8px;
    }
    .call, .master {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .edge {
      color: red;
    }
    .bold {
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }
`

const BottomMenu = () => {
  return (
    <MenuBox>
      <div className="inner">

        <div className="item">
          <div className="titlebox">
            <MdBusiness className="icon" />
            <span className="title">회사소개</span>
          </div>
          <span className="text bold">회사소개</span>
          <span className="text bold">찾아오시는길</span>
        </div>

        <div className="item">
          <div className="titlebox">
            <MdNewspaper className="icon" />
            <span className="title">뉴스센터</span>
          </div>
          <span className="text bold">공지사항</span>
          <span className="text bold">뉴스</span>
        </div>

        <div className="item">
          <div className="titlebox">
            <MdPerson className="icon" />
            <span className="title">고객센터</span>
          </div>
          <span className="text bold">카탈로그 신청</span>
          <span className="text bold">온라인 문의</span>
          <span className="text bold">상품후기</span>
        </div>

        <div className="item">
          <div className="titlebox">
            <MdOutlineCall className="icon" />
            <span className="title">상담안내</span>
          </div>
          <span className="call">031-333-3333</span>
          <span className="text">평일  09:00 ~ 18:00</span>
          <span className="text">점심시간  12:00 ~ 13:00</span>
          <span className="text edge">주말 및 공휴일 휴무</span>
        </div>

        <div className="item" style={{ borderRight: 'none' }}>
          <div className="titlebox">
            <MdOutlineAccountBalance className="icon" />
            <span className="title">입금계좌</span>
          </div>
          <span className="master">예금주 : (주)유로시스템즈</span>
          <span className="text">기업은행 031-366-5433</span>
          <span className="text">우리은행 1005-703-290234</span>
          <span className="text">국민은행 647701-04-032896</span>
        </div>

      </div>
    </MenuBox>
  )
};

export default BottomMenu;