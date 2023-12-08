import { useState } from "react";
import { MdAdd, MdCheck, MdClose, MdFilterAlt, MdRemove, MdSearch } from "react-icons/md";
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
    &.mb {
      margin-bottom: 0;
    }
    &.hide {
      display: none;
    }
  }
`

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
`
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
    width: 150px;
    height: 150px;
    border: 1px solid #ddd;
  }
  .img-title {
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

const Product = () => {

  const [createProduct, setCreateProduct] = useState(true);
  const [choiceCategory, setChoiceCategory] = useState('대분류 선택');
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);
  const [openSubCategoryFilter, setOpenSubCategoryFilter] = useState(false);
  const [choiceSubCategory, setChoiceSubCategory] = useState('소분류 선택');
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(false);
  const [discountValue, setDiscountValue] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(false);
  const [shippingChargeValue, setShippingChargeValue] = useState(0);
  const [option, setOption] = useState(false);
  const [optionValue, setOptionValue] = useState([]);
  const [mainFile, setMainFile] = useState(null);
  const [mainPreview, setMainPreview] = useState('');
  const [mainImageName, setMainImageName] = useState('');
  const [subFile, setSubFile] = useState([]);
  const [subPreview, setSubPreview] = useState([]);
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
  }
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
  }
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
  const formattedPrice = price.toLocaleString("ko-KR");
  const totalPrice = handleDiscountPrice();
  const formattedTotalPrice = totalPrice.toLocaleString("ko-KR");
  const formattedShippingCharge = shippingChargeValue.toLocaleString("ko-KR");
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
  }
  const formattedOptionDiscountPrice = (price) => {
    const totalPrice = price - ((parseFloat(price) / 100) * discountValue);
    return isNaN(Math.trunc(totalPrice)) || price === '' ? 0 : Math.trunc(totalPrice);
  }
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
                <FilterBox onClick={() => { setOpenCategoryFilter(!openCategoryFilter); }}>
                  {choiceCategory}
                </FilterBox>
                <FilterList open={openCategoryFilter}>
                  {
                    initCategory.map((item, i) => {
                      return (
                        <div className="item" onClick={() => {
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
                        <div className="item" onClick={() => { setChoiceSubCategory(item.name); setOpenSubCategoryFilter(false); }}>{item.name}</div>
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
                        <span className="row-title">할인적용가</span>
                        <span className="won">{formattedOptionDiscountPrice(item.optionPrice)}원</span>
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