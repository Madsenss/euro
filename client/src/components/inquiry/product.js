import { useState } from "react";
import { MdClose, MdKeyboardArrowDown, MdOutlineRemoveCircle, MdRemove, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FormBox = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0.5px rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`
const FormHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .header-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .header-sub-title {
    font-size: 14px;
    color: #777;
  }
`
const FormItem = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  .item-header-title {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
  }
`

const ButtonBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
const Button = styled.div`
  cursor: pointer;
  width: 90px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color);
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  border-radius: 50px;
  margin: 0px 10px 0px 10px;
  transition: all 0.25s;
  &:hover {
    opacity: 0.7;
  }
`

const InputBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  .input-title {
    font-size: 15px;
    color: #777;
    width: 150px;
  }
  .top {
    margin-bottom: auto;
    padding-top: 10px;
  }
`
const Input = styled.input`
  border: none;
  border-bottom: 1.5px solid #ddd;
  width: 500px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.25s;
  &:focus {
    outline: none;
    border-bottom: 1.5px solid var(--color);
  }
  &::placeholder {
    font-weight: initial;
    color: #ddd;
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
`
const Textarea = styled.textarea`
  width: 480px;
  height: 80px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  transition: all 0.25s;
  font-size: 14px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1.5px solid var(--color);
  }
  resize: none;
`
const SearchBox = styled.div`
  cursor: pointer;
  width: 500px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid #ddd;
  font-size: 14px;
  color: #ddd;

  &:hover {
    .search {
      color: var(--color);
    }
  }
  .search {
    transition: all 0.25s;
    color: black;
    font-size: 20px;
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
const SearchModal = styled.div`
  position: relative;
  z-index: 1000;
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245, 245, 245);
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  padding: 30px;
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
  .modal-title {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
  .mt {
    margin-top: auto;
  }
`
const FilterOuter = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin-bottom: 20px;
`
const FilterBox = styled(SearchBox)`
  width: 100%;
  color: #aaa;
  .arrow {
    color: black;
    font-size: 20px;
    transition: all 0.25s;
    transform: rotate(${props => props.rotate ? '180deg' : '0'});
  }
  &.disabled {
    .arrow {
      color: #aaa;
    }
  }
`
const FilterList = styled.div`
  z-index: 1002;
  position: absolute;
  top: 35px;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  background-color: #fff;
  border: 1.5px solid #ddd;
  transition: all 0.25s;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? 1 : 0)};
  .item {
    cursor: pointer;
    width: 100%;
    height: fit-content;
    padding: 7px 8px 7px 8px;
    font-size: 14px;
    /* font-weight: bold; */
    &:hover {
      background-color: var(--color);
      color: #fff;
    }
  }
`
const SelectedBox = styled.div`
  width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .empty {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
const SelectedHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 5px 0px 5px 0px;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid black;
  }
  .category {
    width: 25%;
  }
  .subCategory {
    width: 25%;
  }
  .name {
    width: 40%;
  }
  .delete {
    width: 10%;
    justify-content: center;
  }
`
const SelectedItem = styled(SelectedHeader)`
  div {
    padding: 10px 0px 10px 0px;
    font-weight: initial;
    font-size: 12px;
    border-bottom: 1px solid #aaa;
  }
  .remove {
    font-size: 16px;
    cursor: pointer;
    color: var(--color);
  }
`
const Product = () => {
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);

  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [product, setProduct] = useState('');
  const [selectedProduct, setSelectedProduct] = useState([]);

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
      discountValue: 10,
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
      discountValue: 10,
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
  const handleAddItem = () => {
    const newProduct = { id: selectedProduct.length > 0 ? Math.max(...selectedProduct.map(item => item.id)) + 1 : 0, category, subCategory, product };
    const updatedProduct = selectedProduct.filter(item =>
      item.category !== newProduct.category ||
      item.subCategory !== newProduct.subCategory ||
      item.product !== newProduct.product
    );
    if (category === '' || subCategory === '' || product === '') {
      alert('제품을 선택하셔야합니다');
    } else {
      setSelectedProduct([...updatedProduct, newProduct]);
      setOpenSearch(false);
    }
  };
  const handleRemoveItem = (id) => {
    const updatedProducts = selectedProduct.filter(item => item.id !== id);
    const reIndexedProducts = updatedProducts.map((item, i) => ({ ...item, id: i }));
    setSelectedProduct(reIndexedProducts);
  };
  return (
    <FormBox>
      <Overley className={openSearch ? 'show' : 'hide'}>
        <SearchModal>
          <span className="modal-title">제품 선택</span>
          <MdClose className="close" onClick={() => { setOpenSearch(false); }} />
          {/* 대분류 */}
          <FilterOuter>
            <FilterBox rotate={openCategory} onClick={() => { setOpenCategory(!openCategory); }}>
              <span className="filter-text">{category === '' ? '대분류를 선택해주세요' : category}</span>
              <MdKeyboardArrowDown className="arrow" />
            </FilterBox>
            <FilterList open={openCategory}>
              {
                initCategory.map((item, i) => {
                  return (
                    <div className="item" key={i} onClick={() => {
                      setOpenCategory(false);
                      setCategory(item.name);
                      setSubCategory('');
                      setProduct('');
                    }}>{item.name}</div>
                  )
                })
              }
            </FilterList>
          </FilterOuter>
          {/* 소분류 */}
          <FilterOuter>
            <FilterBox
              className={category === '' ? 'disabled' : ''}
              rotate={openSubCategory}
              onClick={(e) => { category === '' ? e.stopPropagation() : setOpenSubCategory(!openSubCategory); }}
            >
              <span className="filter-text">{subCategory === '' ? '소분류를 선택해주세요' : subCategory}</span>
              <MdKeyboardArrowDown className="arrow" />
            </FilterBox>
            <FilterList open={openSubCategory}>
              {
                initSubCategory.filter(v => v.category === category).map((item, i) => {
                  return (
                    <div className="item" key={i} onClick={() => {
                      setOpenSubCategory(false);
                      setSubCategory(item.name);
                    }}>{item.name}</div>
                  )
                })
              }
            </FilterList>
          </FilterOuter>
          {/* 제품 */}
          <FilterOuter>
            <FilterBox
              className={subCategory === '' ? 'disabled' : ''}
              rotate={openProduct}
              onClick={(e) => { subCategory === '' ? e.stopPropagation() : setOpenProduct(!openProduct); }}
            >
              <span className="filter-text">{product === '' ? '제품을 선택해주세요' : product}</span>
              <MdKeyboardArrowDown className="arrow" />
            </FilterBox>
            <FilterList open={openProduct}>
              {
                initProduct.filter(v => v.subCategory === subCategory).map((item, i) => {
                  return (
                    <div className="item" key={i} onClick={() => {
                      setOpenProduct(false);
                      setProduct(item.name);
                    }}>{item.name}</div>
                  )
                })
              }
            </FilterList>
          </FilterOuter>
          <Button className="mt" onClick={() => { handleAddItem(); }}>등록</Button>
        </SearchModal>
      </Overley>
      <FormHeader>
        <span className="header-title">견적문의</span>
        <span className="header-sub-title">문의하시는 내용을 자세히 입력해 주시면 보다 신속하게 연락 받으실 수 있습니다.</span>
      </FormHeader>

      <FormItem>
        <span className="item-header-title">고객 정보</span>
        <InputBox>
          <span className="input-title">이름</span>
          <Input type="text" spellCheck="false" placeholder="이름을 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title">휴대폰 번호</span>
          <Input type="number" spellCheck="false" placeholder="숫자만 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title">이메일</span>
          <Input type="email" spellCheck="false" placeholder="이메일 주소를 입력해 주세요" />
        </InputBox>
      </FormItem>

      <FormItem>
        <span className="item-header-title">제품 정보</span>
        <InputBox>
          <span className="input-title">제목</span>
          <Input type="text" spellCheck="false" placeholder="문의 제목을 입력해 주세요" />
        </InputBox>
        <InputBox>
          <span className="input-title">제품</span>
          <SearchBox onClick={() => { setOpenSearch(true); }}>
            <span className="filter-text">제품을 검색해주세요</span>
            <MdSearch className="search" />
          </SearchBox>
        </InputBox>
        <InputBox>
          <span className="input-title"></span>
          <SelectedBox>
            <SelectedHeader>
              <div className="category">대분류</div>
              <div className="subCategory">소분류</div>
              <div className="name">제품명</div>
              <div className="delete">삭제</div>
            </SelectedHeader>
            {
              selectedProduct && selectedProduct.length > 0
                ? selectedProduct && selectedProduct.map((item, i) => {
                  return (
                    <SelectedItem key={i}>
                      <div className="category">{item.category}</div>
                      <div className="subCategory">{item.subCategory}</div>
                      <div className="name">{item.product}</div>
                      <div className="delete"><MdOutlineRemoveCircle className="remove" onClick={() => { handleRemoveItem(i); }}/></div>
                    </SelectedItem>
                  )
                })
                : <div className="empty">선택된 상품이 없습니다</div>
            }
          </SelectedBox>
        </InputBox>
        <InputBox>
          <span className="input-title top">상세 설명</span>
          <Textarea spellCheck="false" />
        </InputBox>
      </FormItem>

      <FormItem>
        <span className="item-header-title">견적 문의 서비스 약관동의</span>
      </FormItem>
      <ButtonBox>
        <Button onClick={() => { navigate(-1); }}>취소</Button>
        <Button onClick={() => {

        }}>보내기</Button>
      </ButtonBox>
    </FormBox>
  )
};

export default Product;