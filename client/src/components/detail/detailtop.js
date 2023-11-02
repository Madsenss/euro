import { useState } from "react";
import { MdAdd, MdHome, MdOutlineKeyboardArrowRight, MdRemove } from "react-icons/md";
import styled from "styled-components";

const DetailTopBox = styled.div`
  width: 1100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
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
  .product-img {
    width: 450px;
  }
  .itembox {
    border: 1px solid red;
    width: 600px;
    height: fit-content;
    .item {
      padding: 20px 0px 20px 0px;
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
        font-size: 14px;
        width: 120px;
        color: #777;
      }
      .title {
        font-size: 24px;
        font-weight: bold;
      }
      .item-text {
        font-size: 14px;
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
  }
`
const CountBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  .box {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .icon {
      font-size: 18px;
      color: #666;
      &:hover {
        color: black;
      }
    }
    .count {
      font-size: 14px;
    }
  }
  .cp {
    cursor: pointer;
  }
`

const DetailTop = () => {

  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };
  
  const handleRemove = () => {
    if (count === 1) {
      return null;
    } else {
      setCount(count - 1);
    }
  };

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
        <img className="product-img" src={process.env.PUBLIC_URL + '/itemimg.png'} alt="img" />
        <div className="itembox">
          <div className="item">
            <span className="title">[Norgren]&nbsp;Air Preparation</span>
          </div>
          <div className="item">
            <span className="item-title">판매가</span>
            <span className="price">99,999</span>
          </div>
          <div className="item">
            <span className="item-title">배송비</span>
            <span className="item-text">무료배송</span>
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
            <span className="item-title">상품수량</span>
            <CountBox>
              <div className="box cp" onClick={()=>{handleRemove();}}>
                <MdRemove className="icon"/>
              </div>
              <div className="box">
                <span className="count">{count}</span>
              </div>
              <div className="box cp" onClick={()=>{handleAdd();}}>
                <MdAdd className="icon"/>
              </div>
            </CountBox>
          </div>
        </div>
      </ImgBox>
    </DetailTopBox>
  )
};

export default DetailTop;

