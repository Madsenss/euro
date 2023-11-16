import { useState } from "react";
import { MdClose, MdFilterAlt, MdSearch } from "react-icons/md";
import styled from "styled-components";
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

const ProductBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
`
const TableBox = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0.5px rgb(0, 0, 0, 0.1);
  padding: 30px;
`
const ToolBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const FilterBox = styled.div`
  cursor: pointer;
  width: fit-content;
  height: 35px;
  padding: 0px 10px 0px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.3);
  border: 1px solid #ddd;
  .filter {
    font-size: 20px;
    margin-right: 3px;
  }
  span {
    font-weight: bold;
  }
  &:hover {
    border: 1px solid #aaa;
  }
`
const FilterList = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.3);
  top: 50px;
  left: 0;
  transition: all 0.25s;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? 1 : 0)};
  .item {
    cursor: pointer;
    width: 100%;
    height: fit-content;
    padding: 7px 8px 7px 8px;
    font-size: 16px;
    font-weight: bold;
    &:hover {
      color: #fff;
      background-color: var(--color);
    }
  }
`
const SearchBox = styled.div`
  width: 240px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .search {
    font-size: 24px;
    position: absolute;
    right: 10px;
    color: #666;
  }
  input {
    background-color: transparent;
    border-radius: 20px;
    box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.1);
    border: 1.5px solid #ddd;
    width: 100%;
    height: 100%;
    padding-left: 13px;
    font-size: 14px;
    &:hover {
      border: 1.5px solid var(--color);
    }
  }
  input:focus {
    outline: none;
    border: 1.5px solid var(--color);
  }
`
const Table = styled.table`
  margin-top: 30px;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

const TableHeader = styled.thead`
  background-color: var(--color);
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
`;
const TableRowHover = styled(TableRow)`
  &:hover {
    background-color: #eee;
  }
`;
const TableCell = styled.td`
  padding: 8px 0px 8px 0px;
  text-align: center;
`;

const TableHeaderCell = styled.th`
  padding: 14px 0px 14px 0px;
  text-align: center;
  color: #fff;
  border-bottom: 2px solid #aaa;
  
`;

const BlueButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  border-radius: 3px;
  border: none;
  padding: 5px;
  border: 1.5px solid var(--color);
  cursor: pointer;
  color: var(--color);
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`
const GreenButton = styled(BlueButton)`
  border: 1.5px solid green;
  color: green;
  margin-right: 5px;
  &:hover {
    background-color: green;
    color: #fff;
  }
`

const RedButton = styled(BlueButton)`
  border: 1.5px solid red;
  color: red;
  &:hover {
    background-color: red;
    color: #fff;
  }
`

const Overley = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: rgb(0, 0, 0, 0.5);
  &.show {
    opacity: 1;
    visibility: visible;
  }
  &.hide {
    visibility: hidden;
    opacity: 0;
  }
`
const SubOverley = styled(Overley)`

`

const CategoryModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &.show {
    opacity: 1;
    visibility: visible;
  }
  &.hide {
    visibility: hidden;
    opacity: 0;
  }
`
const ModalInner = styled.div`
  position: relative;
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 0px 4px 0.5px rgb(255, 255, 255);
  .close {
    position: absolute;
    right: 5px;
    top: 13px;
    cursor: pointer;
    font-size: 24px;
    &:hover {
      color: var(--color);
    }
  }
`
const ModalHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  .write-box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`

const InputBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .input-title {
    font-size: 14px;
    font-weight: bold;
    color: #666;
  }
`

const Input = styled.input`
  width: 250px;
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
  width: 250px;
  height: 60px;
  padding-left: 5px;
  font-size: 12px;
  border: 1.5px solid #ddd;
  resize: none;
  &:focus {
    outline: none;
  }
`

const FileBox = styled(InputBox)`
  justify-content: end;
  input[type=file] {
    display: none;
  }
  label {
    cursor: pointer;
    width: 100px;
    height: 29px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1.5px solid #aaa;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    color: #777;
    &:hover {
      background-color: #aaa;
      color: #fff;
    }
  }
`
const ButtonBlue = styled(RedButton)`
  width: 100px;
  margin-left: 10px;
  color: var(--color);
  border: 1.5px solid var(--color);
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`
const ButtonGreen = styled(ButtonBlue)`
  border: 1.5px solid green;
  color: green;
  &:hover {
    background-color: green;
    color: #fff;
  }
`
const ButtonRed = styled(ButtonBlue)`
  border: 1.5px solid red;
  color: red;
  &:hover {
    background-color: red;
    color: #fff;
  }
`

const CardOuter = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
const Card = styled(ModalHeader)`
  margin-bottom: 20px;
  padding: 15px;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  &:hover {
    border: 1.5px solid #aaa;
  }
  input, textarea {
    width: 200px;
  }
  .mn {
    margin-bottom: 0;
  }
  .write-box {
    .title {
      font-size: 13px;
    }
    .resize {
      font-size: 12px;
      width: 80px;
    }
  }
`

const SubCategoryModal = styled(CategoryModal)`
`

const SubInner = styled(ModalInner)`
  width: 300px;
  height: fit-content;
  border: 1px solid black;
  .sub {
    width: 152px;
  }
`
const SubHeader = styled(ModalHeader)`
  .mn {
    margin-bottom: 0;
  }
`
const SubFilterBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`
const CategoryFilter = styled(FilterBox)`
  padding: 0;
  width: 160px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
`
const CategoryFilterList = styled(FilterList)`
  left: auto;
  top: 40px;
  right: 0px;
  width: 160px;
  .item {
    font-size: 14px;
  }
`

const SubCardBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`
const SubCardHeader = styled.div`
  width: 100%;
  height: 40px;

  border: 1px solid black;
`

const Product = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState('');
  const [categoryFileName, setCategoryFileName] = useState('');

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [subCategoryOpen, setSubCategoryOpen] = useState(false);

  const tableDataInit = [
    { 카테고리: '라면1', 제조사: '오뚜기1', 제품명: '진라면1', 가격: '3000원1', 수량: '1개' },
    { 카테고리: '라면2', 제조사: '오뚜기2', 제품명: '진라면2', 가격: '3000원2', 수량: '2개' },
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개' },
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개' },
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개' },
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개' },
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개' },
  ];
  const filterInit = ['CategoryA', 'CategoryB', 'CategoryC', 'CategoryD', 'CategoryE', 'CategoryF'];
  const theadInit = ['카테고리', '제조사', '제품명', '가격', '수량', '상세정보', '수정 및 삭제'];
  const a = [0, 0, 0, 0, 0];

  const handleCategoryFile = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setCategoryFileName(uploadedFile.name);
    }
  };

  return (
    <>
      <Overley className={categoryOpen ? 'show' : 'hide'} />
      <CategoryModal className={categoryOpen ? 'show' : 'hide'}>
        <ModalInner>
          <MdClose className="close" onClick={() => { setCategoryOpen(false) }} />
          <ModalHeader>
            <span className="title">대분류 관리</span>
            <div className="write-box">
              <InputBox>
                <span className="input-title">대분류명</span>
                <Input type="text" />
              </InputBox>
              <InputBox>
                <span className="input-title">카테고리 설명</span>
                <Textarea spellCheck="false" />
              </InputBox>
              <InputBox>
                <span className="input-title">이미지명</span>
                <Input type="text" readOnly value={categoryFileName} />
              </InputBox>
              <FileBox>
                <label for="file">이미지 찾기</label>
                <input type="file" id="file" onChange={handleCategoryFile} />
                <ButtonBlue>생성</ButtonBlue>
              </FileBox>
            </div>
          </ModalHeader>
          <CardOuter>
            {
              a.map((item, i) => {
                return (
                  <Card key={i}>
                    <div className="write-box">
                      <InputBox>
                        <span className="input-title">대분류명</span>
                        <Input type="text" value={'Category' + i} />
                      </InputBox>
                      <InputBox>
                        <span className="input-title">카테고리 설명</span>
                        <Textarea spellCheck="false" value={'Text' + i} />
                      </InputBox>
                      <InputBox>
                        <span className="input-title">이미지명</span>
                        <Input type="text" readOnly value={i + '.png'} />
                      </InputBox>
                      <FileBox className="mn">
                        <label className="resize" for="file">이미지 변경</label>
                        <input type="file" id="file" onChange={handleCategoryFile} />
                        <ButtonGreen className="resize">수정</ButtonGreen>
                        <ButtonRed className="resize">삭제</ButtonRed>
                      </FileBox>
                    </div>
                  </Card>
                )
              })
            }
          </CardOuter>
        </ModalInner>
      </CategoryModal>

      <SubOverley className={subCategoryOpen ? 'show' : 'hide'} />
      <SubCategoryModal className={subCategoryOpen ? 'show' : 'hide'}>
        <SubInner>
          <MdClose className="close" onClick={() => { setSubCategoryOpen(false) }} />
          <SubHeader>
            <span className="title">소분류 관리</span>
            <div className="write-box">
              <InputBox>
                <span className="input-title">대분류 선택</span>
                <SubFilterBox>
                  <CategoryFilter onClick={() => { setOpenFilter(!openFilter) }}>
                    {filter}
                  </CategoryFilter>
                  <CategoryFilterList open={openFilter}>
                    {
                      filterInit.map((item, i) => {
                        return (
                          <div key={i} className="item" onClick={() => { setFilter(item); setOpenFilter(false); }}>{item}</div>
                        )
                      })
                    }
                  </CategoryFilterList>
                </SubFilterBox>
              </InputBox>
              <InputBox>
                <span className="input-title">소분류명</span>
                <Input className="sub" type="text" />
              </InputBox>
              <FileBox className="mn">
                <ButtonBlue>생성</ButtonBlue>
              </FileBox>
            </div>
          </SubHeader>
          <SubCardBox>
            <SubCardHeader></SubCardHeader>
          </SubCardBox>
        </SubInner>
      </SubCategoryModal>
      <ProductBox>
        <ProductNav>
          <NavItem onClick={() => { setCategoryOpen(true); }}>대분류 관리</NavItem>
          <NavItem onClick={() => { setSubCategoryOpen(true); }}>소분류 관리</NavItem>
          <NavItem>카테고리 삭제</NavItem>
          <NavItem>상품 등록</NavItem>
        </ProductNav>
        <TableBox>
          <ToolBox>
            <FilterBox onClick={() => { setOpenFilter(!openFilter) }}>
              <MdFilterAlt className="filter" />
              <span>필터&nbsp;:&nbsp;</span>
              <span>{filter}</span>
            </FilterBox>
            <FilterList open={openFilter}>
              {
                filterInit.map((item, i) => {
                  return (
                    <div key={i} className="item" onClick={() => { setFilter(item); setOpenFilter(false); }}>{item}</div>
                  )
                })
              }
            </FilterList>
            <SearchBox>
              <input type="text" placeholder="제품명" />
              <MdSearch className="search" />
            </SearchBox>
          </ToolBox>

          <Table>
            <TableHeader>
              <TableRow>
                {
                  theadInit.map((item, i) => {
                    return (
                      <TableHeaderCell key={i}>{item}</TableHeaderCell>
                    )
                  })
                }
              </TableRow>
            </TableHeader>
            <tbody>
              {
                tableDataInit.map((item, i) => {
                  return (
                    <TableRowHover key={i}>
                      <TableCell>{item.카테고리}</TableCell>
                      <TableCell>{item.제조사}</TableCell>
                      <TableCell>{item.제품명}</TableCell>
                      <TableCell>{item.가격}</TableCell>
                      <TableCell>{item.수량}</TableCell>
                      <TableCell><BlueButton>자세히 보기</BlueButton></TableCell>
                      <TableCell><GreenButton>수정</GreenButton><RedButton>삭제</RedButton></TableCell>
                    </TableRowHover>
                  )
                })
              }
            </tbody>
          </Table>
        </TableBox>
      </ProductBox>
    </>

  )
};

export default Product;