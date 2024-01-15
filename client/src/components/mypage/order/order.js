import { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled from "styled-components";
import ReviewModal from "./reviewmodal";

const PartsBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`
const PartsHeader = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  .title {
    color: #555;
    font-weight: bold;
    font-size: 24px;
    margin-right: 10px;
  }
  .sub-title {
    font-size: 14px;
    color: #aaa;
  }
`

const ItemBox = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  border-top: 2px solid black;
`

const Item = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  .status {
    font-weight: bold;
    color: #555;
  }
  .img-box {
    margin: 15px 0px 15px 0px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 15px;
    }
    .text-box {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      .text-item {
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 0px 4px 0px;
        .item-title {
          width: 70px;
          color: #555;
        }
        .item-text {
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .button-box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .button {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: 1.5px solid var(--color);
      color: var(--color);
      border-radius: 6px;
      transition: all 0.25s;
      font-size: 14px;
      font-weight: bold;
      &.long {
      width: 360px;
      height: 38px;
      }
      &:hover {
        background-color: var(--color);
        color: #fff;
      }
    }
  }
`

const DialBox = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1.5px solid var(--color);
  color: var(--color);
  border-radius: 6px;
  transition: all 0.25s;
  width: 38px;
  height: 38px;
  font-size: 20px;
  &.active {
    border: 1.5px solid #fff;
  }
  &.active:hover {
    background-color: #fff;
    color: var(--color);
  }
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`

const DialItem = styled.div`
  position: absolute;
  width: 100px;
  height: 30px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
  font-size: 14px;
  font-weight: bold;
  border: 1.5px solid var(--color);
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
  &.show {
    visibility: visible;
    opacity: 1;
  }
  &.hide {
    visibility: hidden;
    opacity: 0;
  }
  &.y1 {
    transform: translateY(-45px);
    transition: all 0.20s;
  }
  &.y2 {
    transform: translateY(-85px);
    transition: all 0.26s;
  }
  &.y3 {
    transform: translateY(-125px);
    transition: all 0.32s;
  }
`

const Order = () => {
  const [openReviewModal, setOpenReivewModal] = useState(false);
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openDial, setOpenDial] = useState([]);
  const [selectedData, setSelectedData] = useState('');
  const initCount = [0, 0];

  const handleDial = (i) => {
    var copyOpenDial = [...openDial];
    copyOpenDial[i] = !copyOpenDial[i];
    setOpenDial(copyOpenDial);
  }

  useEffect(() => {
    const copyOpenDial = Array(initCount.length).fill(false);
    setOpenDial(copyOpenDial);
  }, []);

  return (
    <>
      <ReviewModal open={openReviewModal} onClose={() => { setOpenReivewModal(false); }} />
      <PartsBox>
        <PartsHeader>
          <span className="title">주문내역</span>
          <span className="sub-title">최대 지난 3년간의 주문 내역까지 확인할 수 있습니다</span>
        </PartsHeader>
        <ItemBox>
          {
            initCount.map((item, i) => {
              return (
                <Item key={i}>
                  <span className="status">배송완료</span>
                  <div className="img-box">
                    <img src={process.env.PUBLIC_URL + '/압정.png'} alt="product" />
                    <div className="text-box">
                      <div className="text-item">
                        <span className="item-title">결제일자</span>
                        <span className="item-text">2024-01-13 13시 47분</span>
                      </div>
                      <div className="text-item">
                        <span className="item-title">상품명</span>
                        <span className="item-text">[Norgen] Excelon Plus box set (FRL) for extreme applications, G1/2, automatic drain, with shut-off valve</span>
                      </div>
                      <div className="text-item">
                        <span className="item-title">상품가격</span>
                        <span className="item-text">13500원</span>
                      </div>
                    </div>
                  </div>
                  <div className="button-box">
                    <div className="button long" onClick={() => { setOpenReivewModal(!openReviewModal); }}>리뷰</div>
                    <div className="button long">재구매</div>
                    <DialBox className={openDial[i] ? 'active' : ''} onClick={() => { handleDial(i); }}>
                      <MdMoreHoriz />
                      <DialItem className={openDial[i] ? 'show y3' : 'hide'}>
                        <span className="text">주문상세</span>
                      </DialItem>
                      <DialItem className={openDial[i] ? 'show y2' : 'hide'}>
                        <span className="text">배송조희</span>
                      </DialItem>
                      <DialItem className={openDial[i] ? 'show y1' : 'hide'}>
                        <span className="text">1:1 문의</span>
                      </DialItem>
                    </DialBox>
                  </div>
                </Item>
              )
            })
          }
        </ItemBox>
      </PartsBox>
    </>

  )
};

export default Order;