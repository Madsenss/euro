import { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled from "styled-components";
import ReviewModal from "./reviewmodal";
import { useNavigate } from "react-router-dom";

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
  padding: 25px 20px 25px 20px;
  .img-box {
    margin: 10px 0px 10px 0px;
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
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .button {
      cursor: pointer;
      width: 70px;
      height: 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: 1.5px solid var(--color);
      color: var(--color);
      border-radius: 3px;
      transition: all 0.25s;
      font-size: 12px;
      font-weight: bold;
      &:hover {
        background-color: var(--color);
        color: #fff;
      }
      &.mr {
        margin-right: 10px;
      }
    }
  }
`

const ItemHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  .ordernum {
    font-weight: bold;
    color: #555;
  }
`
const Status = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color);
  color: #fff;
  font-size: 12px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  margin-right: 5px;
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
  width: 30px;
  height: 30px;
  font-size: 20px;
  margin-left: auto;
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
    transform: translateY(40px);
    transition: all 0.20s;
  }
  &.y2 {
    transform: translateY(80px);
    transition: all 0.26s;
  }
  &.y3 {
    transform: translateY(120px);
    transition: all 0.32s;
  }
`

const DetailOrder = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`
const DetailItem = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  .item-title {
    width: 100%;
    height: fit-content;
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
  }
  .product-outer {
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }
  .row {
    margin: 10px 0px 0px 0px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    .row-title {
      width: 80px;
      color: #666;
    }
    .row-text {
      font-weight: bold;
      color: #555;
    }
  }
`

const Order = ({ orderNumber }) => {
  const [openReviewModal, setOpenReivewModal] = useState(false);
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openDial, setOpenDial] = useState([]);
  const [selectedData, setSelectedData] = useState('');
  const navigate = useNavigate();
  const initCount = [0, 0];
  const initOrder = [
    {
      BuyerID: 'madsens1111',
      id: 0,
      orderNumber: 202401160001,
      date: '2024-01-18',
      status: '구매완료',
      review: true,
      productInfo: [
        {
          productNumber: 'A_A-1_1_20231209',
          name: 'AProduct',
          brand: 'ABrand',
          price: 10000,
          option: true,
          optionValue: [
            { id: 1, optionName: 'M Size', optionPrice: 0, count: 1 },
            { id: 2, optionName: 'L Size', optionPrice: 3000, count: 1 },
            { id: 3, optionName: 'XL Size', optionPrice: 6000, count: 1 },
          ],
          shippingCharge: true,
          shippingChargeValue: 3000,
          discount: true,
          discountValue: 10,
          totalPrice: 88888,
          mainImg: 'mainA.png',
          review: '좋아요'
        },
        {
          productNumber: 'B_B-1_1_20231209',
          name: 'BProduct',
          brand: 'BBrand',
          price: 12000,
          option: true,
          optionValue: [
            { id: 1, optionName: 'M Size', optionPrice: 0, count: 1 },
            { id: 2, optionName: 'L Size', optionPrice: 2000, count: 1 },
            { id: 3, optionName: 'XL Size', optionPrice: 4000, count: 1 },
          ],
          shippingCharge: true,
          shippingChargeValue: 3000,
          discount: false,
          discountValue: 0,
          totalPrice: 99999,
          mainImg: 'mainB.png',
          review: ''
        }
      ],
      shippingChargeDiscount: true,
      totalCount: 5,
      orderTotalPrice: 65100,
      addressInfo: {
        name: 'HGD',
        phone: '010-1111-1111',
        address: '경기도 안양시'
      },
      payment: {
        type: '신용카드',
        number: '1111-1111-1111-1111',
        installment: {
          use: true,
          month: 12
        }
      },
    },
    {
      BuyerID: 'madsens1111',
      id: 0,
      orderNumber: 202401160002,
      date: '2024-01-18',
      status: '취소완료',
      review: true,
      productInfo: [
        {
          productNumber: 'C_C-1_1_20231209',
          name: 'CProduct',
          brand: 'CBrand',
          price: 10000,
          option: true,
          optionValue: [
            { id: 1, optionName: 'M Size', optionPrice: 0, count: 1 },
            { id: 2, optionName: 'L Size', optionPrice: 3000, count: 1 },
            { id: 3, optionName: 'XL Size', optionPrice: 6000, count: 1 },
          ],
          shippingCharge: true,
          shippingChargeValue: 3000,
          discount: true,
          discountValue: 10,
          totalPrice: 38100,
          mainImg: 'mainC.png',
          review: ''
        }
      ],
      shippingChargeDiscount: true,
      totalCount: 5,
      orderTotalPrice: 35100,
      addressInfo: {
        name: 'HGD',
        phone: '010-1111-1111',
        address: '경기도 안양시'
      },
      payment: {
        type: '신용카드',
        number: '1111-1111-1111-1111',
        installment: {
          use: true,
          month: 12
        }
      },
    }
  ];
  const initSelectedOrder = initOrder.filter(item => item.orderNumber === parseInt(orderNumber));
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
      {
        orderNumber
          ? <>
            <DetailOrder>
              {/* 주문정보 */}
              <DetailItem>
                <div className="item-title">주문정보</div>
                <div className="row">
                  <span className="row-title">주문번호</span>
                  <span className="row-text">{initSelectedOrder[0]?.orderNumber}</span>
                </div>
                <div className="row">
                  <span className="row-title">결제일시</span>
                  <span className="row-text">{initSelectedOrder[0]?.date}</span>
                </div>
              </DetailItem>
              {/* 상품정보 */}
              <DetailItem>
                <div className="item-title">상품정보</div>
                {
                  initSelectedOrder[0].productInfo.map((item, i) => {
                    return (
                      <div className="product-outer" key={i}>
                        <div className="row">
                          <span className="row-title">상품명</span>
                          <span className="row-text">{item.name}</span>
                        </div>
                        <div className="row">
                          <span className="row-title">상품금액</span>
                          <span className="row-text">{item.price}원</span>
                        </div>
                        {
                          item.option
                            ? item.optionValue.map((item2, j) => {
                              return (
                                <div className="row">
                                  <span className="row-title"></span>
                                  <span className="row-text">&nbsp;&nbsp;- 선택옵션 : {item2.optionName}(+{item2.optionPrice}) {item2.count}개</span>
                                </div>
                              )
                            })
                            : null
                        }
                      </div>
                    )
                  })
                }
              </DetailItem>
              {/* 결제정보 */}
              <DetailItem>
                <div className="item-title">결제정보</div>
                <div className="row">
                  <span className="row-title">상품금액</span>
                  <span className="row-text">{initSelectedOrder[0].orderTotalPrice}원</span>
                </div>
                <div className="row">
                  <span className="row-title">할인금액</span>
                  <span className="row-text">-5원</span>
                </div>
                <div className="row">
                  <span className="row-title">배송비</span>
                  <span className="row-text">3000원</span>
                </div>
                <div className="row">
                  <span className="row-title">결제금액</span>
                  <span className="row-text">3005원</span>
                </div>
                <div className="row">
                  <span className="row-title">결제방법</span>
                  <span className="row-text">{initSelectedOrder[0].payment.type}</span>
                </div>
                <div className="row">
                  <span className="row-title"></span>
                  <span className="row-text"></span>
                </div>
              </DetailItem>
              {/* 배송정보 */}
              <DetailItem>
                <div className="item-title">배송정보</div>
                <div className="row">
                  <span className="row-title">수령인</span>
                  <span className="row-text">{initSelectedOrder[0].addressInfo.name}</span>
                </div>
                <div className="row">
                  <span className="row-title">연락처</span>
                  <span className="row-text">{initSelectedOrder[0].addressInfo.address}</span>
                </div>
                <div className="row">
                  <span className="row-title">배송지</span>
                  <span className="row-text">{initSelectedOrder[0].addressInfo.phone}</span>
                </div>
                <div className="row">
                  <span className="row-title">요청사항</span>
                  <span className="row-text">부재시 연락주세요</span>
                </div>
              </DetailItem>
            </DetailOrder>
          </>
          : <>
            <ReviewModal open={openReviewModal} onClose={() => { setOpenReivewModal(false); }} />
            <PartsBox>
              <PartsHeader>
                <span className="title">주문내역</span>
                <span className="sub-title">최대 지난 3년간의 주문 내역까지 확인할 수 있습니다</span>
              </PartsHeader>
              <ItemBox>
                {
                  initOrder.map((item, i) => {
                    return (
                      <Item key={i}>
                        <ItemHeader>
                          <Status>{item.status}</Status>
                          <span className="ordernum">주문번호 {item.orderNumber}</span>
                          <DialBox className={openDial[i] ? 'active' : ''} onClick={() => { handleDial(i); }}>
                            <MdMoreHoriz />
                            <DialItem className={openDial[i] ? 'show y1' : 'hide'} onClick={() => { navigate('/mypage/order/' + item.orderNumber) }}>
                              <span className="text">주문상세</span>
                            </DialItem>
                            <DialItem className={openDial[i] ? 'show y2' : 'hide'}>
                              <span className="text">배송조희</span>
                            </DialItem>
                            <DialItem className={openDial[i] ? 'show y3' : 'hide'} onClick={() => { navigate('/community/qna'); }}>
                              <span className="text">1:1 문의</span>
                            </DialItem>
                          </DialBox>
                        </ItemHeader>
                        {
                          item.productInfo.map((item2, j) => {
                            return (
                              <div className="img-box" key={j}>
                                <img src={process.env.PUBLIC_URL + '/' + item2.mainImg} alt={item2.mainImg} />
                                <div className="text-box">
                                  <div className="text-item">
                                    <span className="item-title">상품명</span>
                                    <span className="item-text">{item2.name}</span>
                                  </div>
                                  <div className="text-item">
                                    <span className="item-title">상품금액</span>
                                    <span className="item-text">{item2.totalPrice}원</span>
                                  </div>
                                  <div className="button-box">
                                    {
                                      (item.status === '취소완료' || item.status === '취소중')
                                        ? null
                                        : item2.review === '' ? <div className="button mr" onClick={() => { setOpenReivewModal(!openReviewModal); }}>후기작성</div> : null
                                    }
                                    <div className="button">재구매</div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </Item>
                    )
                  })
                }
              </ItemBox>
            </PartsBox>
          </>
      }

    </>

  )
};

export default Order;