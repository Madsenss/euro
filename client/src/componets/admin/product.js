import { useState } from "react";
import { MdArrowDropDown, MdArrowRight, MdFilterAlt, MdSearch } from "react-icons/md";
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
  padding: 10px 0px 10px 0px;
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

const Product = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState('전체');
  const filterInit = ['전체', '일', '아동복', '세미정장', '진공청소기', '전자가전기기', '여덟글자테스트임'];
  const theadInit = ['카테고리', '제조사', '제품명', '가격', '수량', '상세정보', '수정 및 삭제'];
  const tableDataInit = [
    { 카테고리: '라면1', 제조사: '오뚜기1', 제품명: '진라면1', 가격: '3000원1', 수량: '1개'},
    { 카테고리: '라면2', 제조사: '오뚜기2', 제품명: '진라면2', 가격: '3000원2', 수량: '2개'},
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개'},
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개'},
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개'},
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개'},
    { 카테고리: '라면3', 제조사: '오뚜기3', 제품명: '진라면', 가격: '3000원3', 수량: '3개'},
  ]
  return (
    <>
      <ProductBox>
        <ProductNav>
          <NavItem>카테고리 생성</NavItem>
          <NavItem>카테고리 수정</NavItem>
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
                tableDataInit.map((item, i)=>{
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