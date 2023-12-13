import { useEffect, useState } from "react";
import styled from "styled-components";
import CreateProduct from "./createproduct";
import ModifyProduct from "./modifyproduct";

// 최상위 Outer
const ProductBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
`


// 상단버튼
const ProductNav = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
  display: flex;
`
const NavItem = styled.div`
  cursor: pointer;
  width: 110px;
  height: 40px;
  background-color: var(--color);
  color: #fff;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.2);
  transition: all 0.25s;
  &:hover {
    opacity: 0.7;
  }
`


const WhiteBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0.5px rgb(0, 0, 0, 0.1);
  padding: 30px;
`

const Header = styled.div`
  padding: 15px 0px 15px 0px;
  width: 100%;
  height: fit-content;
  background-color: var(--color);
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }
  .number {
    width: 15%;
  }
  .category {
    width: 15%;
  }
  .sub-category {
    width: 15%;
  }
  .name {
    width: 20%;
  }
  .price {
    width: 10%;
  }
  .count {
    width: 5%;
  }
  .button {
    width: 20%;
  }
`
const TableItem = styled(Header)`
  padding: 0;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  color: initial;
  div {
    font-weight: initial;
  }
`

const BlueButton = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border: 1.5px solid var(--color);
  color: var(--color);
  border-radius: 3px;
  padding: 4px;
  margin: 0px 4px 0px 4px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`

const GreenButton = styled(BlueButton)`
  border: 1.5px solid #28a745;
  color: #28a745;
  &:hover {
    background-color: #28a745;
    color: #fff;
  }
`
const RedButton = styled(BlueButton)`
  border: 1.5px solid #dc3545;
  color: #dc3545;
  &:hover {
    background-color: #dc3545;
    color: #fff;
  }
`

const Product = () => {
  // 모달 오픈
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openModifyModal, setopenModifyModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 임시데이터 나중에 리액트쿼리로 바꿔야함
  const initCategory = [
    { id: 0, name: '명품', text: '명품들을 모아뒀습니다.', src: 'A.PNG' },
    { id: 1, name: '라면', text: '라면들을 모아뒀습니다.', src: 'B.PNG' },
    { id: 2, name: '담배', text: '담배들을 모아뒀습니다.', src: 'C.PNG' },
  ];
  const initSubCategory = [
    { id: 0, category: '명품', name: '프라다', productcount: 1 },
    { id: 1, category: '명품', name: '구찌', productcount: 2 },
    { id: 2, category: '라면', name: '농심', productcount: 3 },
    { id: 3, category: '라면', name: '오뚜기', productcount: 4 },
    { id: 4, category: '담배', name: '말보로', productcount: 5 },
    { id: 5, category: '담배', name: '에쎄', productcount: 6 }
  ];
  const initProduct = [
    {
      id: 0,
      number: 'A_A-1_1_20231209',
      category: '라면',
      subCategory: '농심',
      name: 'AProduct',
      brand: 'ABrand',
      price: 10000,
      discount: true,
      discountValue: 0,
      count: 240,
      contentValue: [
        { id: 1, contentTitle: 'PortSize', contentText: 'G1/2' },
        { id: 2, contentTitle: 'PortSize2', contentText: 'G1/2/2' },
      ],
      option: true,
      optionValue: [
        { id: 1, optionName: 'L Size', optionPrice: 3000 },
        { id: 2, optionName: 'XL Size', optionPrice: 6000 },
      ],
      shippingCharge: true,
      shippingChargeValue: 3000,
      mainImg: 'main.png',
      subImg: ['a.png', 'b.png', 'c.png'],
      createDate: '2000-00-00'
    },
    {
      id: 0,
      number: 'B_B-1_1_20231209',
      category: '담배',
      subCategory: '에쎄',
      name: 'BProduct',
      brand: 'BBrand',
      price: 10000,
      discount: true,
      discountValue: 0,
      count: 2360,
      contentValue: [
        { id: 1, contentTitle: 'PortSize', contentText: 'G1/2' },
        { id: 2, contentTitle: 'PortSize2', contentText: 'G1/2/2' },
      ],
      option: true,
      optionValue: [
        { id: 1, optionName: 'L Size', optionPrice: 3000 },
        { id: 2, optionName: 'XL Size', optionPrice: 6000 },
      ],
      shippingCharge: true,
      shippingChargeValue: 3000,
      mainImg: 'main.png',
      subImg: ['a.png', 'b.png', 'c.png'],
      createDate: '2000-00-00'
    },
  ];
  useEffect(() => {

  }, []);

  return (
    <ProductBox>
      <CreateProduct open={openCreateModal} initCategory={initCategory} initSubCategory={initSubCategory} onClose={() => setOpenCreateModal(false)} />
      <ModifyProduct open={openModifyModal} productData={selectedProduct} onClose={() => setopenModifyModal(false)} />
      <ProductNav>
        <NavItem onClick={() => { setOpenCreateModal(true); }}>상품 등록</NavItem>
      </ProductNav>
      <WhiteBox>
        <Header>
          <div className="number">상품번호</div>
          <div className="category">대분류</div>
          <div className="sub-category">소분류</div>
          <div className="name">상품명</div>
          <div className="price">가격</div>
          <div className="count">재고</div>
          <div className="button">상세정보</div>
        </Header>
        {
          initProduct.map((item, i) => {
            return (
              <TableItem key={i}>
                <div className="number">{item.number}</div>
                <div className="category">{item.category}</div>
                <div className="sub-category">{item.subCategory}</div>
                <div className="name">{item.name}</div>
                <div className="price">{item.price.toLocaleString("ko-KR")}원</div>
                <div className="count">{item.count}개</div>
                <div className="button">
                  <BlueButton onClick={() => {
                    setSelectedProduct(item);
                    setopenModifyModal(true);
                  }}>상세보기</BlueButton>
                </div>
              </TableItem>
            )
          })
        }
      </WhiteBox>
    </ProductBox>


  )
};

export default Product;