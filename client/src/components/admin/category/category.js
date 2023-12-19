import { useEffect, useState } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import styled from "styled-components";
import ModifyCategory from "./modifycategory";
import DeleteCategory from "./deletecategory";
import CreateCategory from "./createcategory";
import CreateSubCategory from "./createsubcategory";
import DeleteSubCategory from "./deletesubcategory";
import ModifySubCategory from "./modifysubcategory";


// 최상단 DIV
const CategoryBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
`

// NAV 버튼
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

// 아이템 BOX
const WhiteBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0.5px rgb(0, 0, 0, 0.1);
  padding: 30px;
`

// TAB BOX
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

// 아이템 - 메인
const ItemOuter = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: max-height 0.25s ease-in-out;
  max-height: ${(props) => (props.open ? '500px' : '40px')};
  background-color: rgb(245, 245, 245);
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

// 아이템 - 서브
const SubHeader = styled(Header)`
  .num {
    width: 5%;
  }
  .category {
    width: 15%;
  }
  .name {
    width: 15%;
  }
  .count {
    width: 10%;
  }
  .button {
    width: 10%;
  }
  .sort {
    width: 10%;
    .re {
      width: fit-content;
      height: fit-content;
      position: relative;
    }
  }
`
const SubCategoryItemBox = styled(SubHeader)`
  cursor: initial;
  padding: 0;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  color: initial;
  div {
    font-size: 13px;
    font-weight: initial;
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

const Category = () => {
  const [tab, setTab] = useState('대분류');
  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  const [openModifyCategory, setOpenModifyCategory] = useState(false);
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);
  const [openCreateSubCategory, setOpenCreateSubCategory] = useState(false);
  const [openModifySubCategory, setOpenModifySubCategory] = useState(false);
  const [openDeleteSubCategory, setOpenDeleteSubCategory] = useState(false);
  const [accordion, setAccordion] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
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

  const [openSort, setOpenSort] = useState(false);
  const [sort, setSort] = useState('대분류 선택');

  useEffect(() => {
    const copyAccordion = Array(initCategory.length).fill(false);
    setAccordion(copyAccordion);
  }, []);

  return (
    <>
      <CreateCategory open={openCreateCategory} onClose={() => { setOpenCreateCategory(false); }} />
      <ModifyCategory open={openModifyCategory} selectedData={selectedData} onClose={() => { setOpenModifyCategory(false); }} />
      <DeleteCategory open={openDeleteCategory} selectedData={selectedData} onClose={() => { setOpenDeleteCategory(false); }} />
      <CreateSubCategory open={openCreateSubCategory} category={initCategory} onClose={() => { setOpenCreateSubCategory(false); }} />
      <ModifySubCategory open={openModifySubCategory} category={initCategory} selectedData={selectedData} onClose={() => { setOpenModifySubCategory(false); }} />
      <DeleteSubCategory open={openDeleteSubCategory} selectedData={selectedData} onClose={() => { setOpenDeleteSubCategory(false); }} />
      <CategoryBox>
        <CategoryNav>
          <NavItem onClick={() => { setOpenCreateCategory(true); }}>대분류 생성</NavItem>
          <NavItem onClick={() => { setOpenCreateSubCategory(true); }}>소분류 생성</NavItem>
        </CategoryNav>
        <TabBox>
          <TabItem className={tab === '대분류' ? 'active' : ''} onClick={() => { setTab('대분류') }}>대분류</TabItem>
          <TabItem className={tab === '소분류' ? 'active' : ''} onClick={() => { setTab('소분류') }}>소분류</TabItem>
        </TabBox>
        <WhiteBox>
          {
            tab === '대분류'
              ?
              <>
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
                              setSelectedData(item);
                              setOpenModifyCategory(true);
                            }}>수정</GreenButton>
                            <RedButton onClick={(e) => {
                              e.stopPropagation();
                              setSelectedData(item);
                              setOpenDeleteCategory(true);
                            }}>삭제</RedButton>
                          </div>
                        </CategoryItem>
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
              </>
              :
              <>
                <SubHeader>
                  <div className="num">번호</div>
                  <div className="category">대분류</div>
                  <div className="name">소분류명</div>
                  <div className="count">보유 상품 개수</div>
                  <div className="button">수정 및 삭제</div>
                </SubHeader>
                {
                  initSubCategory.map((item, i) => {
                    return (
                      <>
                        <SubCategoryItemBox key={i}>
                          <div className="num">{i + 1}</div>
                          <div className="category">{item.category}</div>
                          <div className="name">{item.name}</div>
                          <div className="count">{item.productcount}</div>
                          <div className="button">
                            <GreenButton onClick={() => {
                              setSelectedData(item);
                              setOpenModifySubCategory(true);
                            }}>수정</GreenButton>
                            <RedButton onClick={() => {
                              setSelectedData(item);
                              setOpenDeleteSubCategory(true);
                            }}>삭제</RedButton>
                          </div>
                        </SubCategoryItemBox>
                      </>
                    )
                  })
                }
              </>
          }
        </WhiteBox>
      </CategoryBox>
    </>
  )
};

export default Category;
