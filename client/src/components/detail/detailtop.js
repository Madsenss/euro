import { MdHome, MdOutlineKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

const DetailTopBox = styled.div`
  width: 1350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
`
const TitleBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #ddd;
  padding: 0px 0px 10px 0px;
  font-size: 28px;
  font-weight: bold;
`

const ImgBox = styled.div`
  padding-top: 20px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  .product-img {
    width: 450px;
  }
  .itembox {
    width: 900px;
    height: fit-content;
    .item {
      padding: 15px 0px 15px 0px;
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 2px solid #eee;
      &.v {
        align-items: start;
      }
      .item-title {
        width: 120px;
        font-weight: bold;
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
          font-weight: bold;
        }
        .info-text {

        }
      }
    }
  }
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

      <TitleBox>
        Air Preparation
      </TitleBox>
      <ImgBox>
        <img className="product-img" src={process.env.PUBLIC_URL + '/air.png'} alt="img" />
        <div className="itembox">
          <div className="item">
            <span className="item-title">판매가</span>
            <span className="price">99,999원</span>
          </div>
          <div className="item">
            <span className="item-title">브랜드</span>
            <span className="brand">Norgren</span>
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
          <div className="item">
            <span className="item-title">총 판매가</span>
          </div>
        </div>
      </ImgBox>
    </DetailTopBox>
  )
};

export default DetailTop;

