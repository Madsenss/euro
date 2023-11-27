import { useState } from "react";
import { MdClose, MdFilterAlt, MdSearch } from "react-icons/md";
import styled from "styled-components";

const ProductBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
`

const ProductNav = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
  display: flex;
  border: 1px solid black;
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

const Overley = styled.div`
  z-index: 999;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: rgb(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
  &.show {
    visibility: visible;
    opacity: 1;
  }
  &.hide {
    visibility: hidden;
    opacity: 0;
  }
`
const ProductModal = styled.div`
  position: relative;
  z-index: 1000;
  width: 1100px;
  height: calc(var(--vh, 1vh) * 95);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245, 245, 245);
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  padding: 20px 15px 20px 15px;
  .close {
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 13px;
    font-size: 24px;
    &:hover {
      color: var(--color);
    }
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`

const ProductItem = styled.div`
  background-color: #fff;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px 1px rgb(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 30px;
  .pi-title {
    font-weight: bold;
    font-size: 20px;
    border-bottom: 1.5px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .category-box {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    .cb-title {
      font-weight: bold;
      margin-right: 10px;
    }
    .ml {
      margin-left: 30px;
    }
  }
  .price-box {
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    .won {
      font-size: 14px;
      font-weight: bold;
      margin-left: 5px;
    }
  }
`

const FilterOuter = styled.div`
  z-index: 1001;
  position: relative;
  width: fit-content;
  height: fit-content;
`

const FilterBox = styled.div`
  cursor: pointer;
  width: 200px;
  height: 32px;
  padding: 0px 10px 0px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1.5px solid #ddd;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    border: 1.5px solid #aaa;
  }
`

const FilterList = styled.div`
  position: absolute;
  width: 200px;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.3);
  top: 35px;
  right: 0;
  transition: all 0.25s;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? 1 : 0)};
  .item {
    cursor: pointer;
    width: 100%;
    height: fit-content;
    padding: 7px 8px 7px 8px;
    font-size: 14px;
    font-weight: bold;
    &:hover {
      background-color: var(--color);
      color: #fff;
    }
  }
`
const Input = styled.input`
  width: 250px;
  height: 28px;
  font-size: 14px;
  border: 1.5px solid #ddd;
  border-radius: 3px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
  &[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  &.price-input {
    width: 124px;
    text-align: end;
    padding-left: 0;
    padding-right: 5px;
  }
`

const Product = () => {

  const [createProduct, setCreateProduct] = useState(true);
  const [choiceCategory, setChoiceCategory] = useState('대분류 선택');
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);
  const [openSubCategoryFilter, setOpenSubCategoryFilter] = useState(false);
  const [choiceSubCategory, setChoiceSubCategory] = useState('소분류 선택');
  const [price, setPrice] = useState(0);
  const initCategory = [
    { id: 0, name: '명품', text: '명품들을 모아뒀습니다.', src: 'A.PNG' },
    { id: 1, name: '라면', text: '라면들을 모아뒀습니다.', src: 'B.PNG' },
    { id: 2, name: '담배', text: '담배들을 모아뒀습니다.', src: 'C.PNG' },
  ]
  const initSubCategory = [
    { id: 0, category: '명품', name: '프라다', productcount: 1 },
    { id: 1, category: '명품', name: '구찌', productcount: 2 },
    { id: 2, category: '라면', name: '농심', productcount: 3 },
    { id: 3, category: '라면', name: '오뚜기', productcount: 4 },
    { id: 4, category: '담배', name: '말보로', productcount: 5 },
    { id: 5, category: '담배', name: '에쎄', productcount: 6 }
  ];

  const showSub = initSubCategory.filter((v) => v.category === choiceCategory);
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPrice(value);
  };

  const formattedPrice = price.toLocaleString("ko-KR");

  return (
    <>
      <Overley className={createProduct ? 'show' : 'hide'}>
        <ProductModal>
          <MdClose className="close" onClick={() => { setCreateProduct(false); }} />
          <span className="title">상품등록</span>
          <ProductItem>
            <span className="pi-title">카테고리</span>
            <div className="category-box">
              <span className="cb-title">대분류</span>
              <FilterOuter>
                <FilterBox onClick={()=>{setOpenCategoryFilter(!openCategoryFilter);}}>
                  {choiceCategory}
                </FilterBox>
                <FilterList open={openCategoryFilter}>
                  {
                    initCategory.map((item, i)=>{
                      return (
                        <div className="item" onClick={()=>{
                          setChoiceCategory(item.name);
                          setOpenCategoryFilter(false);
                          setChoiceSubCategory('소분류 선택');
                        }}>{item.name}</div>
                      )
                    })
                  }
                </FilterList>
              </FilterOuter>
              <span className="cb-title ml">소분류</span>
              <FilterOuter>
                <FilterBox onClick={()=>{
                  showSub.length > 0
                  ? setOpenSubCategoryFilter(!openSubCategoryFilter)
                  : setOpenSubCategoryFilter(false);
                }}>
                  {choiceSubCategory}
                </FilterBox>
                <FilterList open={openSubCategoryFilter}>
                  {                    
                    showSub?.map((item, i)=>{
                      return (
                        <div className="item" onClick={()=>{setChoiceSubCategory(item.name); setOpenSubCategoryFilter(false);}}>{item.name}</div>
                      )
                    })
                  }
                </FilterList>
              </FilterOuter>
            </div>
          </ProductItem>
          <ProductItem>
            <span className="pi-title">상품명</span>
            <Input type="text" placeholder="상품명을 입력해 주세요"/>
          </ProductItem>
          <ProductItem>
            <span className="pi-title">브랜드[제조사]</span>
            <Input type="text" placeholder="브랜드를 입력해주세요"/>
          </ProductItem>
          <ProductItem>
            <span className="pi-title">상품설명</span>
            <input />
            <input />
          </ProductItem>
          <ProductItem>
            <span className="pi-title">가격</span>
            <div className="price-box">
              <Input
                className="price-input"
                type="number"
                onChange={handlePriceChange}
                placeholder="가격을 입력해 주세요"
              />
              <span className="won">{formattedPrice}원</span>
            </div>
            <div className="dis-box">
              <span className="dis-title">할인설정</span>
              <div className="dis-item">
                <span className="dis-title"></span>
              </div>
            </div>
          </ProductItem>
          <ProductItem>
            <span className="pi-title">배송비</span>
          </ProductItem>
          <ProductItem>
            <span className="pi-title">상품옵션</span>
          </ProductItem>
          <ProductItem>
            <span className="pi-title">이미지 등록</span>
          </ProductItem>
        </ProductModal>
      </Overley>
      <ProductBox>
        <ProductNav>
          <NavItem onClick={() => { setCreateProduct(true); }}>상품 등록</NavItem>
        </ProductNav>
      </ProductBox>
    </>

  )
};

export default Product;