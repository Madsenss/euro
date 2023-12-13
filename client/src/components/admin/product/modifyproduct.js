import { useEffect, useState } from "react";
import styled from "styled-components"
import { MdAdd, MdCheck, MdClose, MdRemove } from "react-icons/md";

// 모달
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


// 아이템 DIV
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
      font-weight: bold;
      margin-left: 5px;
    }
  }
  .dis-title {
    font-weight: bold;
    font-size: 16px;
    margin: 20px 0px 15px 0px;
  }
`


// 아이템 - 설명부분
const ContentBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
`
const ContentItem = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  .content-title {
    font-weight: bold;
    margin-right: 10px;
  }
`


// 아이템 - 할인부분
const DiscountBox = styled.div`
  margin-top: 20px;
  width: fit-content;
  height: fit-content;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  .input-box {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    height: fit-content;
    margin-bottom: 15px;
    .input-title {
      font-weight: bold;
      font-size: 16px;
      margin-right: 10px;
    }
    .percent {
      position: absolute;
      right: 5px;
      font-size: 14px;
    }
  }
  .total-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    height: fit-content;
    margin-bottom: 15px;
    .total-title {
      font-weight: bold;
      font-size: 16px;
      margin-right: 10px;
      color: var(--color);
    }
    .total-price {
      font-weight: bold;
      font-size: 16px;
    }
  }
  .alert {
    color: red;
    margin-bottom: 5px;
  }
`


// 아이템 - 배송비부분
const ShippingChargeBox = styled.div`
  margin-top: 20px;
  width: fit-content;
  height: fit-content;
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  .sc-title {
    font-weight: bold;
    margin-right: 10px;
  }
  .sc-price {
    font-weight: bold;
    margin-left: 10px;
  }
`


// 아이템 - 옵션부분
const OptionBox = styled.div`
  margin-top: 20px;
  width: fit-content;
  height: fit-content;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
`
const OptionItem = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.1);
  padding: 20px 20px 20px 50px;
  margin-bottom: 20px;
  .row {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    .row-title {
      width: 100px;
      font-weight: bold;
    }
    .won {
      font-weight: bold;
      margin-left: 10px;
      &.ml {
        margin-left: 0;
      }
    }
    .total {
      font-weight: bold;
      color: var(--color);
    }
    &.mb {
      margin-bottom: 0;
    }
    &.hide {
      display: none;
    }
  }
`


// 아이템 - 이미지부분
const ImgBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .row {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    .row-title {
      font-weight: bold;
      font-size: 16px;
      margin-right: 10px;
    }
    .label {
      cursor: pointer;
      background-color: var(--color);
      font-weight: bold;
      color: #fff;
      font-size: 14px;
      border-radius: 6px;
      padding: 10px 15px 10px 15px;
    }
  }
  .grid {
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`
const ImgPreview = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .img {
    width: 100px;
    height: 100px;
    border: 1px solid #ddd;
  }
  .img-title {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px 0px 5px 0px;
    font-size: 13px;
  }
  .mr {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
  .empty {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    font-size: 12px;
    font-weight: bold;
  }
  margin-bottom: 20px;
`


// 툴 - 체크박스
const CheckBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
`
const CheckItem = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  .item-title {
    font-weight: bold;
    margin-right: 5px;
  }
  .radio {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    border-radius: 50%;
    background-color: #eee;
    border: 1px solid #ddd;
    &.active {
      background-color: var(--color);
    }
    .check {
      color: #ddd;
      padding: 2px;
      font-size: 16px;
      &.icon-active {
        color: blue;
        color: #fff;
      }
    }
  }
`


// 툴 - 추가, 삭제 버튼
const AddButton = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  .icon {
    cursor: pointer;
    font-size: 18px;
    border-radius: 50%;
    padding: 2px;
    background-color: var(--color);
    color: #fff;
    box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.15);
  }
  .btn-title {
    font-weight: bold;
    font-size: 16px;
    margin-right: 10px;
  }
`
const RemoveButton = styled(AddButton)`
  position: absolute;
  left: 10px;
  margin-bottom: 0;
  .icon {
    background-color: red;
  }
`
const RemoveButtonInitial = styled(RemoveButton)`
  position: initial;
  margin-right: 10px;
`


// 툴 - 필터
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


// 툴 - 인풋
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
  &[type=file] {
    display: none;
  }
  &.price-input {
    width: 124px;
    text-align: end;
    padding-left: 0;
    padding-right: 5px;
  }
  &.discount-input {
    width: 30px;
    text-align: end;
    padding-left: 0;
    padding-right: 18px;
  }
  &.shipping-input {
    width: 55px;
    text-align: end;
    padding-left: 0;
    padding-right: 5px;
  }
  &.option-input {
  }
  &.option-price-input {
    width: 120px;
    text-align: end;
    padding-left: 0;
    padding-right: 5px;
  }
  &.content-input {
    width: 120px;
    margin-right: 20px;
  }
`

// 툴 - 등록버튼

const SubmitButton = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--color);
  color: #fff;
  box-shadow: 0px 0px 8px 1px rgb(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: bold;
  padding: 8px 20px 8px 20px;
  transition: all 0.2s;
  &:hover {
    opacity: 0.7;
  }
`
const ModifyProduct = ({ productData, open, onClose, initCategory, initSubCategory }) => {
  const [choiceCategory, setChoiceCategory] = useState('대분류 선택');
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);
  const [openSubCategoryFilter, setOpenSubCategoryFilter] = useState(false);
  const [choiceSubCategory, setChoiceSubCategory] = useState('소분류 선택');


  // 설명
  const [contentValue, setContentValue] = useState([]);


  // 가격
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(false);
  const [discountValue, setDiscountValue] = useState(0);

  // 배송비
  const [shippingCharge, setShippingCharge] = useState(false);
  const [shippingChargeValue, setShippingChargeValue] = useState(0);

  // 옵션
  const [option, setOption] = useState(false);
  const [optionValue, setOptionValue] = useState([]);


  // 이미지
  const [mainFile, setMainFile] = useState(null);
  const [mainPreview, setMainPreview] = useState('');
  const [mainImageName, setMainImageName] = useState('');
  const [subFile, setSubFile] = useState([]);
  const [subPreview, setSubPreview] = useState([]);


  // const showSub = initSubCategory.filter((v) => v.category === choiceCategory);

  // 모달창 닫기
  const handleClose = () => {
    onClose();
  }

  
  // 가격 부분 함수
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    const deleteNaN = value !== '' && !isNaN(value) ? parseInt(value) : 0;
    setPrice(deleteNaN);
  };
  const handleDiscount = (e) => {
    const value = parseInt(e.target.value);
    if (value > 100 || value < 0) {
      alert('할인율은 0 ~ 100 % 사이로만 설정 가능합니다');
      e.target.value = '';
    } else {
      setDiscountValue(value);
    }
  }
  const handleDiscountPrice = () => {
    const totalPrice = price - ((parseFloat(price) / 100) * discountValue);
    return isNaN(totalPrice) ? price : Math.trunc(totalPrice);
  }
  const handleShippingCharge = (e) => {
    const value = parseInt(e.target.value);
    const deleteNaN = value !== '' && !isNaN(value) ? parseInt(value) : 0;
    setShippingChargeValue(deleteNaN);
  }

  // 한국 원단위 표기 변환 변수
  const formattedPrice = price.toLocaleString("ko-KR");
  const totalPrice = handleDiscountPrice();
  const formattedTotalPrice = totalPrice.toLocaleString("ko-KR");
  const formattedShippingCharge = shippingChargeValue.toLocaleString("ko-KR");

  // 설명 부분 함수
  const addNewContent = () => {
    const newId = optionValue.length > 0 ? optionValue[optionValue.length - 1].id + 1 : 1;
    const newContent = { id: newId, contentTitle: '', contentText: '' };
    setContentValue([...contentValue, newContent]);
  };
  const removeContent = (idToRemove) => {
    const updatedContents = contentValue.filter((item) => item.id !== idToRemove);
    setContentValue(updatedContents.map((item, i) => ({ ...item, id: i + 1 })));
  }
  const handleContentTitleChange = (e, id) => {
    const updatedOptions = contentValue.map(item => {
      if (item.id === id) {
        return { ...item, contentTitle: e.target.value };
      }
      return item;
    });
    setContentValue(updatedOptions);
  };
  const handleContentTextChange = (e, id) => {
    const updatedOptions = contentValue.map(item => {
      if (item.id === id) {
        return { ...item, contentText: e.target.value };
      }
      return item;
    });
    setContentValue(updatedOptions);
  };


  // 옵션 부분 함수
  const addNewOption = () => {
    const newId = optionValue.length > 0 ? optionValue[optionValue.length - 1].id + 1 : 1;
    const newOption = { id: newId, optionName: '', optionPrice: 0 };
    setOptionValue([...optionValue, newOption]);
  };
  const removeOption = (idToRemove) => {
    const updatedOptions = optionValue.filter((item) => item.id !== idToRemove);
    setOptionValue(updatedOptions.map((item, i) => ({ ...item, id: i + 1 })));
  };
  const handleOptionNameChange = (e, id) => {
    const updatedOptions = optionValue.map(item => {
      if (item.id === id) {
        return { ...item, optionName: e.target.value };
      }
      return item;
    });
    setOptionValue(updatedOptions);
  };
  const handleOptionPriceChange = (e, id) => {
    const value = parseInt(e.target.value);
    const updatedOptions = optionValue.map(item => {
      if (item.id === id) {
        return { ...item, optionPrice: value };
      }
      return item;
    });
    setOptionValue(updatedOptions);
  };
  const formattedOptionPrice = (price) => {
    return isNaN(price) || price === '' ? 0 : price.toLocaleString("ko-KR");
  };
  const formattedOptionDiscountPrice = (price) => {
    const totalPrice = price - ((parseFloat(price) / 100) * discountValue);
    return isNaN(Math.trunc(totalPrice)) || price === '' ? 0 : Math.trunc(totalPrice);
  };


  // 이미지 관련 함수
  const handleMainChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainFile(file);
      setMainImageName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setMainPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubChange = (e) => {
    const file = e.target.files;
    const fileArray = Array.from(file);

    setSubFile(fileArray);

    const previewArray = [];
    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previewArray.push({
          name: file.name,
          image: reader.result
        });
        if (previewArray.length === fileArray.length) {
          setSubPreview([...previewArray]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  
  const td = {
    // id: 0,안바뀜
    // number: 'A_A-1_1_20231209',안바뀜
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
    // createDate: '2000-00-00'안바뀜
  }

  useEffect(() => {
    
  }, [productData])
  return (
    <Overley className={open ? 'show' : 'hide'}>
      <ProductModal>
        <MdClose className="close" onClick={() => { handleClose(); }} />
        <span className="title">상품등록</span>
        {/* <ProductItem>
          <span className="pi-title">카테고리</span>
          <div className="category-box">
            <span className="cb-title">대분류</span>
            <FilterOuter>
              <FilterBox onClick={() => { setOpenCategoryFilter(!openCategoryFilter); }}>
                {productData && productData.category}
              </FilterBox>
              <FilterList open={openCategoryFilter}>
                {
                  initCategory && initCategory.map((item, i) => {
                    return (
                      <div key={i} className="item" onClick={() => {
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
              <FilterBox onClick={() => {
                showSub.length > 0
                  ? setOpenSubCategoryFilter(!openSubCategoryFilter)
                  : setOpenSubCategoryFilter(false);
              }}>
                {choiceSubCategory}
              </FilterBox>
              <FilterList open={openSubCategoryFilter}>
                {
                  showSub?.map((item, i) => {
                    return (
                      <div key={i} className="item" onClick={() => { setChoiceSubCategory(item.name); setOpenSubCategoryFilter(false); }}>{item.name}</div>
                    )
                  })
                }
              </FilterList>
            </FilterOuter>
          </div>
        </ProductItem>
        <ProductItem>
          <span className="pi-title">상품명</span>
          <Input type="text" placeholder="상품명을 입력해 주세요" />
        </ProductItem>
        <ProductItem>
          <span className="pi-title">브랜드[제조사]</span>
          <Input type="text" placeholder="브랜드를 입력해주세요" />
        </ProductItem>
        <ProductItem>
          <span className="pi-title">상품설명</span>
          <AddButton onClick={addNewContent}>
            <span className="btn-title">설명 추가</span>
            <MdAdd className="icon" />
          </AddButton>
          <ContentBox>
            {
              contentValue.map((item, i) => {
                return (
                  <ContentItem key={i}>
                    <RemoveButtonInitial>
                      <MdRemove className="icon" onClick={() => { removeContent(item.id) }} />
                    </RemoveButtonInitial>
                    <span className="content-title">제목</span>
                    <Input
                      className="content-input"
                      type="text"
                      onChange={(e) => { handleContentTitleChange(e, item.id) }}
                      placeholder="ex) PortSize"
                    />
                    <span className="content-title">설명</span>
                    <Input
                      className="content-input"
                      type="text"
                      onChange={(e) => { handleContentTextChange(e, item.id) }}
                      placeholder="ex) G1/2"
                    />
                    <span className="content-title">[ {item.contentTitle} : {item.contentText} ]</span>
                  </ContentItem>
                )
              })
            }
          </ContentBox>
        </ProductItem>
        <ProductItem>
          <span className="pi-title">가격</span>
          <div className="price-box">
            <Input
              className="price-input"
              type="number"
              onChange={handlePriceChange}
            />
            <span className="won">{formattedPrice}원</span>
          </div>

          <span className="dis-title">할인설정</span>

          <CheckBox>

            <CheckItem>
              <span className="item-title">적용</span>
              <div className={'radio ' + `${discount ? 'active' : ''}`} onClick={() => { setDiscount(true); }}>
                <MdCheck className={'check ' + `${discount ? 'icon-active' : ''}`} />
              </div>
            </CheckItem>

            <CheckItem>
              <span className="item-title">미적용</span>
              <div className={'radio ' + `${discount ? '' : 'active'}`} onClick={() => { setDiscount(false); }}>
                <MdCheck className={'check ' + `${discount ? '' : 'icon-active'}`} />
              </div>
            </CheckItem>

          </CheckBox>
          <DiscountBox show={discount}>
            <div className="input-box">
              <span className="input-title">할인율</span>
              <Input type="number" className="discount-input" onChange={handleDiscount} />
              <span className="percent">%</span>
            </div>
            <div className="total-box">
              <span className="total-title">할인적용가</span>
              <span className="total-price">{formattedTotalPrice}원</span>
            </div>
            <span className="alert">옵션 선택시 옵션가격 포함 할인적용됩니다</span>
            <span className="alert">[상품가격 + 옵션추가금액 - 할인율]</span>
          </DiscountBox>
        </ProductItem>
        <ProductItem>
          <span className="pi-title">배송비</span>
          <CheckBox>

            <CheckItem>
              <span className="item-title">유료배송</span>
              <div className={'radio ' + `${shippingCharge ? 'active' : ''}`} onClick={() => { setShippingCharge(true); }}>
                <MdCheck className={'check ' + `${shippingCharge ? 'icon-active' : ''}`} />
              </div>
            </CheckItem>

            <CheckItem>
              <span className="item-title">무료배송</span>
              <div className={'radio ' + `${shippingCharge ? '' : 'active'}`} onClick={() => { setShippingCharge(false); }}>
                <MdCheck className={'check ' + `${shippingCharge ? '' : 'icon-active'}`} />
              </div>
            </CheckItem>

          </CheckBox>
          <ShippingChargeBox show={shippingCharge} onChange={handleShippingCharge}>
            <span className="sc-title">배송비</span>
            <Input type="number" className="shipping-input" />
            <span className="sc-price">{formattedShippingCharge}원</span>
          </ShippingChargeBox>
        </ProductItem>
        <ProductItem>
          <span className="pi-title">상품옵션</span>
          <CheckBox>
            <CheckItem>
              <span className="item-title">있음</span>
              <div className={'radio ' + `${option ? 'active' : ''}`} onClick={() => { setOption(true); }}>
                <MdCheck className={'check ' + `${option ? 'icon-active' : ''}`} />
              </div>
            </CheckItem>
            <CheckItem>
              <span className="item-title">없음</span>
              <div className={'radio ' + `${option ? '' : 'active'}`} onClick={() => { setOption(false); }}>
                <MdCheck className={'check ' + `${option ? '' : 'icon-active'}`} />
              </div>
            </CheckItem>
          </CheckBox>
          <OptionBox show={option}>
            <AddButton onClick={addNewOption}>
              <span className="btn-title">옵션 추가</span>
              <MdAdd className="icon" />
            </AddButton>
            {
              optionValue.map((item, i) => {
                return (
                  <OptionItem key={i}>
                    <div className="row">
                      <span className="row-title">번호</span>
                      <span className="option-number">{item.id}번 옵션</span>
                    </div>
                    <div className="row">
                      <span className="row-title">옵션명</span>
                      <Input className="option-input" type="text" onChange={(e) => handleOptionNameChange(e, item.id)} />
                    </div>
                    <div className={'row ' + `${discount ? '' : 'mb'}`}>
                      <span className="row-title">옵션가격</span>
                      <Input className="option-price-input" type="number" onChange={(e) => handleOptionPriceChange(e, item.id)} />
                      <span className="won">{formattedOptionPrice(item.optionPrice)}원</span>
                    </div>
                    <div className={'row ' + `${discount ? 'mb' : 'hide'}`}>
                      <span className="row-title total">할인적용가</span>
                      <span className="won ml">{formattedOptionDiscountPrice(item.optionPrice)}원</span>
                    </div>
                    <RemoveButton onClick={() => { removeOption(item.id) }}>
                      <MdRemove className="icon" />
                    </RemoveButton>
                  </OptionItem>
                )
              })
            }
          </OptionBox>
        </ProductItem>
        <ProductItem>
          <span className="pi-title">이미지 등록</span>
          <ImgBox>
            <div className="row">
              <span className="row-title">대표 이미지</span>
              <label className="label" for="main">이미지 등록</label>
              <Input type="file" id="main" onChange={handleMainChange} />
            </div>
            <ImgPreview>
              {
                mainPreview && mainPreview
                  ? <img className="img" src={mainPreview} alt="mainPreview" />
                  : <div className="empty">파일 없음</div>
              }
              {
                mainImageName && mainImageName
                  ? <span className="img-title">{mainImageName}</span>
                  : null
              }
            </ImgPreview>
            <div className="row">
              <span className="row-title">상세 이미지</span>
              <label className="label" for="sub">이미지 등록</label>
              <Input type="file" id="sub" multiple onChange={handleSubChange} />
            </div>
            <div className="grid">
              {
                subPreview && subPreview.length > 0
                  ? subPreview.map((item, i) => {
                    return (
                      <ImgPreview>
                        <img className="img mr" key={i} src={item.image} alt={`subPreview ${i}`} />
                        <span className="img-title">{item.name}</span>
                      </ImgPreview>
                    )
                  })
                  : <ImgPreview><div className="empty">파일 없음</div></ImgPreview>
              }
            </div>
          </ImgBox>
        </ProductItem> */}
        <SubmitButton>상품등록</SubmitButton>
      </ProductModal>
    </Overley>
  )
};

export default ModifyProduct;