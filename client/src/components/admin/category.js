import { useEffect, useState } from "react";
import { MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import styled from "styled-components";

const CategoryBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
`
const CategoryNav = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
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
const TabBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const TabItem = styled.div`
  cursor: pointer;
  width: 80px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #ddd;
  font-size: 14px;
  font-weight: bold;
  background-color: #eee;
  &.active {
    background-color: #fff;
    color: var(--color);
    border: 1.5px solid transparent;
  }
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
  .num {
    width: 5%;
  }
  .category {
    width: 15%;
  }
  .text {
    width: 45%;
  }
  .img {
    width: 20%;
  }
  .button {
    width: 15%;
  }
`

const ItemOuter = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: max-height 0.25s ease-in-out;
  max-height: ${(props) => (props.open ? '500px' : '40px')};
  background-color: rgb(245, 245, 245);
`

const CategoryItem = styled(Header)`
  cursor: pointer;
  padding: 0;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  color: initial;
  div {
    font-size: 13px;
    font-weight: initial;
  }
  .text {
    justify-content: start;
  }
`

const SubCategoryItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ddd;
  .icon {
    font-size: 20px;
    margin-left: 50px;
  }
  .row-box {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
    &.la {
      margin-left: auto;
    }
    .row-title {
      font-weight: bold;
      font-size: 13px;
      margin-right: 5px;
    }
    .row-text {
      font-size: 13px;
    }
  }
  .fs {
    font-size: 12px;
  }
`

const Button = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border: 1.5px solid black;
  border-radius: 3px;
  padding: 4px;
  margin: 0px 4px 0px 4px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: #fff;
  }
`

const GreenButton = styled(Button)`
  border: 1.5px solid #28a745;
  color: #28a745;
  &:hover {
    background-color: #28a745;
    color: #fff;
  }
`
const RedButton = styled(Button)`
  border: 1.5px solid #dc3545;
  color: #dc3545;
  &:hover {
    background-color: #dc3545;
    color: #fff;
  }
`

const Overley = styled.div`
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
const CategoryModal = styled.div`
  position: relative;
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
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
  .row {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .input-title {
      font-size: 14px;
      font-weight: bold;
    }
    &.button {
      margin-top: 10px;
      margin-bottom: 0;
      justify-content: end;
      input[type=file] {
        display: none;
      }
      label {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        border: 1.5px solid #aaa;
        color: #666;
        border-radius: 3px;
        padding: 5px 8px 5px 8px;
        font-size: 14px;
        font-weight: bold;
        &:hover {
          background-color: #aaa;
          color: #fff;
        }
      }
    }
  }
`
const Input = styled.input`
  width: 230px;
  height: 28px;
  font-size: 12px;
  border: 1.5px solid #ddd;
  border-radius: 3px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
`
const Textarea = styled.textarea`
  width: 230px;
  height: 60px;
  padding-left: 5px;
  font-size: 12px;
  border: 1.5px solid #ddd;
  resize: none;
  &:focus {
    outline: none;
  }
`
const BlueButton = styled(Button)`
  border: 1.5px solid var(--color);
  margin: 0;
  margin-left: 10px;
  padding: 5px 8px 5px 8px;
  color: var(--color);
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`

const ModifyButton = styled(GreenButton)`
  margin: 0;
  margin-left: 10px;
  padding: 5px 8px 5px 8px;
`


const SubCategoryModal = styled(CategoryModal)`
  .re {
    position: relative;
  }
`

const FilterBox = styled.div`
  cursor: pointer;
  width: 240px;
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
  width: 240px;
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
      color: #fff;
      background-color: var(--color);
    }
  }
`


const Category = () => {
  const [tab, setTab] = useState('대분류');
  const [accordion, setAccordion] = useState([]);
  const [createCategory, setCreateCategory] = useState(false);
  const [createSubCategory, setCreateSubCategory] = useState(false);
  const [categoryFileName, setCategoryFileName] = useState('');
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);
  const [choiceCategory, setChoiceCategory] = useState('대분류 선택');
  const [openModifyCategory, setOpenModifyCategory] = useState([]);
  const [openModifySubCategory, setOpenModifySubCategory] = useState([]);
  const initCategory = [
    { id: 0, name: '명품', text: '명품들을 모아뒀습니다.', src: 'A.PNG' },
    { id: 1, name: '라면', text: '라면들을 모아뒀습니다.', src: 'B.PNG' },
    { id: 2, name: '담배', text: '담배들을 모아뒀습니다.', src: 'C.PNG' },
  ]
  const initSubCategory = [
    { id: 0, category: '명품', name: '프라다' },
    { id: 1, category: '명품', name: '구찌' },
    { id: 2, category: '라면', name: '농심' },
    { id: 3, category: '라면', name: '오뚜기' },
    { id: 4, category: '담배', name: '말보로' },
    { id: 5, category: '담배', name: '에쎄' }
  ];

  useEffect(() => {
    const copyAccordion = Array(initCategory.length).fill(false);
    const copyOpenModifyCategory = Array(initCategory.length).fill(false);
    const copyOpenModifySubCategory = Array(initSubCategory.length).fill(false);
    setAccordion(copyAccordion);
    setOpenModifyCategory(copyOpenModifyCategory);
    setOpenModifySubCategory(copyOpenModifySubCategory);
  }, []);

  const handleCategoryFile = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setCategoryFileName(uploadedFile.name);
    }
  };

  return (
    <>
      <Overley className={createCategory ? 'show' : 'hide'}>
        <CategoryModal>
          <MdClose className="close" onClick={() => { setCreateCategory(false); }} />
          <span className="title">대분류 생성</span>
          <div className="row">
            <span className="input-title">대분류명</span>
            <Input type="text" spellCheck="false" />
          </div>
          <div className="row">
            <span className="input-title">설명</span>
            <Textarea spellCheck="false" />
          </div>
          <div className="row">
            <span className="input-title">이미지명</span>
            <Input readOnly defaultValue={categoryFileName} />
          </div>
          <div className="row button">
            <label for="file">이미지 찾기</label>
            <BlueButton>생성</BlueButton>
            <input id="file" type="file" onChange={handleCategoryFile} />
          </div>
        </CategoryModal>
      </Overley>
      <Overley className={createSubCategory ? 'show' : 'hide'}>
        <SubCategoryModal>
          <MdClose className="close" onClick={() => { setCreateSubCategory(false); }} />
          <span className="title">소분류 생성</span>
          <div className="row re">
            <span className="input-title">대분류</span>
            <FilterBox onClick={() => { setOpenCategoryFilter(!openCategoryFilter) }}>
              {choiceCategory}
            </FilterBox>
            <FilterList open={openCategoryFilter}>
              {
                initCategory.map((item, i) => {
                  return (
                    <div key={i} className="item" onClick={() => { setChoiceCategory(item.name); setOpenCategoryFilter(false); }}>{item.name}</div>
                  )
                })
              }
            </FilterList>
          </div>
          <div className="row">
            <span className="input-title">소분류명</span>
            <Input type="text" spellCheck="false" />
          </div>
          <div className="row button">
            <BlueButton>생성</BlueButton>
          </div>
        </SubCategoryModal>
      </Overley>
      <CategoryBox>
        <CategoryNav>
          <NavItem onClick={() => { setCreateCategory(true); }}>대분류 생성</NavItem>
          <NavItem onClick={() => { setCreateSubCategory(true); }}>소분류 생성</NavItem>
        </CategoryNav>
        <TabBox>
          <TabItem className={tab === '대분류' ? 'active' : ''} onClick={()=>{setTab('대분류')}}>대분류</TabItem>
          <TabItem className={tab === '소분류' ? 'active' : ''} onClick={()=>{setTab('소분류')}}>소분류</TabItem>
        </TabBox>
        <WhiteBox>
          <Header>
            <div className="num">번호</div>
            <div className="category">대분류명</div>
            <div className="text">설명</div>
            <div className="img">이미지명</div>
            <div className="button">수정 및 삭제</div>
          </Header>
          {
            initCategory.map((item, i) => {
              const filter = initSubCategory.filter((subCategoryItem) => subCategoryItem.category === item.name);
              return (
                <ItemOuter key={i} open={accordion[i]}>
                  <CategoryItem onClick={() => {
                    var copyAccordion = [...accordion];
                    copyAccordion[i] = !copyAccordion[i];
                    setAccordion(copyAccordion);
                  }}>
                    <div className="num">{item.id}</div>
                    <div className="category">{item.name}</div>
                    <div className="text">{item.text}</div>
                    <div className="img">{item.src}</div>
                    <div className="button">
                      <GreenButton onClick={(e) => {
                        e.stopPropagation();
                        var copyOpenModifyCategory = [...openModifyCategory];
                        copyOpenModifyCategory[i] = !copyOpenModifyCategory[i];
                        setOpenModifyCategory(copyOpenModifyCategory);
                      }}>수정</GreenButton>
                      <RedButton>삭제</RedButton>
                    </div>
                  </CategoryItem>
                  <Overley className={openModifyCategory[i] ? 'show' : 'hide'}>
                    <CategoryModal>
                      <MdClose className="close" onClick={(e) => {
                        e.stopPropagation();
                        var copyOpenModifyCategory = [...openModifyCategory];
                        copyOpenModifyCategory[i] = !copyOpenModifyCategory[i];
                        setOpenModifyCategory(copyOpenModifyCategory);
                      }} />
                      <span className="title">대분류 수정</span>
                      <div className="row">
                        <span className="input-title">대분류명</span>
                        <Input type="text" spellCheck="false" defaultValue={item.name} />
                      </div>
                      <div className="row">
                        <span className="input-title">설명</span>
                        <Textarea spellCheck="false" defaultValue={item.text} />
                      </div>
                      <div className="row">
                        <span className="input-title">이미지명</span>
                        <Input readOnly defaultValue={item.src} />
                      </div>
                      <div className="row button">
                        <label for="file">이미지 변경</label>
                        <ModifyButton>수정</ModifyButton>
                        <input id="file" type="file" onChange={handleCategoryFile} />
                      </div>
                    </CategoryModal>
                  </Overley>
                  {
                    filter.map((item2, j) => {
                      return (
                        <SubCategoryItem key={item2.id}>
                          <div className="row-box">
                            <MdOutlineSubdirectoryArrowRight className="icon" />
                          </div>
                          <div className="row-box">
                            <span className="row-title">대분류</span>
                            <span className="row-text">{item2.category}</span>
                          </div>
                          <div className="row-box">
                            <span className="row-title">소분류명</span>
                            <span className="row-text">{item2.name}</span>
                          </div>
                        </SubCategoryItem>

                      )
                    })
                  }
                </ItemOuter>
              )
            })
          }
        </WhiteBox>
      </CategoryBox>
    </>
  )
};

export default Category;
