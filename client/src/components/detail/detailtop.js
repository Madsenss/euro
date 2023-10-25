import { MdHome, MdOutlineKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

const DetailTopBox = styled.div`
  width: 1100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
`
const RootBox = styled.div`
  padding: 15px 0px 15px 0px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  .icon {
    font-size: 18px;
    margin-right: 3px;
    color: var(--color);
  }
  .roottext {
    font-size: 14px;
    font-weight: bold;
    color: #555;
  }
`

const ImgBox = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid #eee;
  border-bottom: 2px solid #eee;
  .product-img {
    width: 450px;
  }
  .itembox {
    width: 600px;
    height: fit-content;
    .item {
      padding: 15px 0px 15px 0px;
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid #eee;
      &.v {
        align-items: start;
      }
      &.bn {
        border-bottom: none;
      }
      .item-title {
        width: 120px;
        font-weight: bold;
      }
      .item-text {
      }
      .pd-name {
        font-weight: bold;
      }
      .price {
        color: var(--color);
        font-weight: bold;
      }
      .total {
        font-size: 18px;
        font-weight: bold;
        margin-left: auto;
      }
    }
    
    .infobox {
      display: flex;
      flex-direction: column;
      .info-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 3px;
        .info-title {
        }
        .info-text {

        }
      }
    }
    .button-box {
      margin-top: 20px;
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      .btn {
        cursor: pointer;
        margin-left: 20px;
        width: 140px;
        height: 38px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: var(--color);
        border: 1.5px solid var(--color);
        border-radius: 3px;
        color: #fff;
        font-weight: bold;
        box-shadow: 0px 0px 4px 0.5px rgb(0, 0, 0, 0.1);
        transition: all 0.2s;
        &:hover {
          opacity: 0.7;
        }
      }
      .line {
        background-color: #fff;
        border: 1.5px solid var(--color);
        color: var(--color);
      }
    }
  }
`


const DetailTop = () => {
  return (
    <DetailTopBox>
      <RootBox>
        <MdHome className="icon" />
        <span className="roottext">Home</span>
        <MdOutlineKeyboardArrowRight className="icon" />
        <span className="roottext">Category</span>
        <MdOutlineKeyboardArrowRight className="icon" />
        <span className="roottext">SubCategory</span>
        <MdOutlineKeyboardArrowRight className="icon" />
        <span className="roottext">Air Preparation</span>
      </RootBox>
      <ImgBox>
        <img className="product-img" src={process.env.PUBLIC_URL + '/air.png'} alt="img" />
        <div className="itembox">
          <div className="item">
            <span className="item-title">상품명</span>
            <span className="item-text pd-name">Air Preparation</span>
          </div>
          <div className="item">
            <span className="item-title">판매가</span>
            <span className="price">99,999원</span>
          </div>
          <div className="item">
            <span className="item-title">브랜드</span>
            <span className="item-text">Norgren</span>
          </div>
          <div className="item v">
            <span className="item-title">상품설명</span>
            <div className="infobox">
              <div className="info-item">
                <span className="info-title">Port Size&nbsp;:&nbsp;</span>
                <span className="info-text">G1/2</span>
              </div>
              <div className="info-item">
                <span className="info-title">Drain type&nbsp;:&nbsp;</span>
                <span className="info-text">Auto drain</span>
              </div>
              <div className="info-item">
                <span className="info-title">Filter element&nbsp;:&nbsp;</span>
                <span className="info-text">40.00µm</span>
              </div>
              <div className="info-item">
                <span className="info-title">Outlet Pressure adjustment&nbsp;:&nbsp;</span>
                <span className="info-text">0.3 ... 10 bar</span>
              </div>
              <div className="info-item">
                <span className="info-title">Gauge&nbsp;:&nbsp;</span>
                <span className="info-text">Integrated gauge</span>
              </div>
            </div>
          </div>
          <div className="item">
            <span className="item-title">상품옵션</span>
          </div>
          <div className="item bn">
            <span className="item-title">총 판매가</span>
            <span className="total">99,999원</span>
          </div>
          <div className="button-box">
            <div className="btn line">위시리스트</div>
            <div className="btn line">장바구니 담기</div>
            <div className="btn">구매하기</div>
          </div>
        </div>
      </ImgBox>
    </DetailTopBox>
  )
};

export default DetailTop;

