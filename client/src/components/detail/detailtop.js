import { useState } from "react";
import { MdAdd, MdClose, MdFavorite, MdHome, MdKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdRemove } from "react-icons/md";
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
  .product-img {
    width: 500px;
    height: 500px;
  }
  .itembox {
    width: 500px;
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
          font-size: 14px;
        }
        .info-text {
          font-size: 14px;
        }
      }
    }
    .total {
      width: 100%;
      height: fit-content;
      margin: 50px 0px 30px 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      .total-title {
        font-size: 18px;
        color: #666;
      }
      .total-price {
        font-weight: bold;
        margin-left: 10px;
        font-size: 26px;
        color: #444;
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
  margin-right: 15px;
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

const OptionBox = styled.div`
  width: 480px;
  height: 40px;
  position: relative;
`
const OptionDropdownBox = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  padding: 0px 10px 0px 10px;
  font-size: 14px;
  .down {
    font-size: 16px;
    transition: all 0.2s;
    &.active {
      transform: rotate(180deg);
    }
  }
`
const OptionMenu = styled.div`
  z-index: 1001;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 40px;
  width: 100%;
  height: 500px;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: all 0.1s;
  &.show {
    height: 160px;
    visibility: visible;
    opacity: 1;
  }
  &.hide {
    height: 0px;
    visibility: hidden;
    opacity: 0;
  }
  .option-item {
    cursor: pointer;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    font-size: 14px;
    padding-left: 10px;
    &:hover {
      background-color: #eee;
    }
    .icon {
      color: rgb(255, 165, 0);
    }
    .ot {
      max-width: 290px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .op {
      margin-left: 10px;
      font-weight: bold;
    }
  }
`

const OptionCountBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`
const OptionItem = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 10px 0px 10px 0px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  .option-price {
    margin-left: auto;
  }
  .option-title {
    max-width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .delete {
    cursor: pointer;
    border-radius: 50%;
    padding: 2px;
    font-size: 14px;
    background-color: var(--color);
    color: #fff;
    margin-left: 10px;
  }
`

const ButtonBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Button = styled.div`
  cursor: pointer;
  width: 160px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
  background-color: var(--color);
  border: 1.5px solid transparent;
  box-shadow: 0px 0px 2px 1px rgb(0, 0, 0, 0.1);
  transition: all 0.2s;
`
const CartButton = styled(Button)`
  background-color: #fff;
  border: 1.5px solid var(--color);
  color: var(--color);
`
const WishButton = styled(Button)`
  margin-left: auto;
  margin-right: 0;
  width: 40px;
  background-color: #aaa;
  color: #eee;
  &:hover {
    color: var(--color);
    background-color: #fff;
  }
`

const DetailTop = () => {

  const [option, setOption] = useState('옵션을 선택하세요');
  const [optionActive ,setOptionActive] = useState(false);
  const [totalOption, setTotalOption] = useState([]);

  const increaseOptionCount = (index) => {
    const updatedOptions = [...totalOption];
    updatedOptions[index].count += 1;
    setTotalOption(updatedOptions);
  };

  const decreaseOptionCount = (index) => {
    const updatedOptions = [...totalOption];
    if (updatedOptions[index].count > 1) {
      updatedOptions[index].count -= 1;
      setTotalOption(updatedOptions);
    }
  };

  const initData = [
    {name: 'L Size', price: 10000, count: 1},
    {name: 'XL Size', price: 20000, count: 1},
    {name: 'XXL Size', price: 30000, count: 1},
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const AddOption = (name, price, count) => {
    const isOptionExists = totalOption.some((option) => option.name === name && option.price === price);
  
    if (!isOptionExists) {
      const newOption = { name, price, count };
      setTotalOption([...totalOption, newOption]);
    }
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    totalOption.forEach((option) => {
      totalPrice += option.price * option.count;
    });
    return totalPrice;
  };

  const removeOption = (index) => {
    const updatedOptions = [...totalOption];
    updatedOptions.splice(index, 1);
    setTotalOption(updatedOptions);
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
            <span className="price">99,999원</span>
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
            <span className="item-title">상품옵션</span>
            <OptionBox>
              <OptionDropdownBox onClick={() => { setOptionActive(!optionActive) }}>
                <span>{option}</span>
                <MdKeyboardArrowDown className={'down ' + `${optionActive ? 'active' : ''}`} />
              </OptionDropdownBox>
              <OptionMenu className={optionActive ? 'show' : 'hide'}>
                <div className="option-item" onClick={() => { setOption('옵션을 선택하세요'); setOptionActive(false) }}>옵션을 선택하세요</div>
                {
                  initData.map((item, i)=>{
                    const formattedPrice = formatPrice(item.price);
                    return (
                      <div className="option-item" key={i} onClick={() => { setOption('옵션을 선택하세요'); setOptionActive(false); AddOption(item.name, item.price, item.count); }}>
                        <span className="ot">{item.name}</span>
                        <span className="op">{formattedPrice}원</span>
                      </div>
                    )
                  })
                }
              </OptionMenu>
            </OptionBox>
          </div>
          <OptionCountBox>
            {
              totalOption&&totalOption.map((item, i)=>{
                return (
                  <OptionItem key={i}>
                    <CountBox>
                      <div className="box cp" onClick={()=>{decreaseOptionCount(i)}}>
                        <MdRemove className="icon"/>
                      </div>
                      <div className="box">
                        <span className="count">{item.count}</span>
                      </div>
                      <div className="box cp" onClick={()=>{increaseOptionCount(i);}}>
                        <MdAdd className="icon"/>
                      </div>
                    </CountBox>
                    <span className="option-title">{item.name}</span>
                    <span className="option-price">{formatPrice(parseInt(item.price) * parseInt(item.count))}원</span>
                    <MdClose className="delete" onClick={() => {removeOption(i);}} />
                  </OptionItem>
                )
              })
            }
          </OptionCountBox>
          <div className="total">
            <span className="total-title">총 상품금액<span className="total-price">{formatPrice(calculateTotalPrice())}</span>원</span>           
          </div>
          <ButtonBox>
            <CartButton>장바구니</CartButton>
            <Button>구매하기</Button>
            <WishButton><MdFavorite/></WishButton>
          </ButtonBox>
        </div>
      </ImgBox>
    </DetailTopBox>
  )
};

export default DetailTop;

