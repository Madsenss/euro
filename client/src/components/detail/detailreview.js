import { useState } from "react";
import { MdKeyboardArrowDown, MdStarRate } from "react-icons/md";
import styled from "styled-components";

const DetailReviewBox = styled.div`
  border-top: 2px solid #ddd;
  padding-top: 50px;
  margin-bottom: 50px;
  width: 1100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

const Table = styled.table`
  width: 1100px;
  border-collapse: collapse;
  font-size: 14px;
  border: 1px solid #ddd;
  .n {
    max-width: 10px;
  }
  .s {
    max-width: 25px;
  }
  .w {
    max-width: 25px;
  }
  .icon {
    color: rgb(255, 165, 0);
  }
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
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
const TableCell = styled.td`
  padding: 15px 0px 15px 0px;
  text-align: center;
`;

const TableHeaderCell = styled.th`
  padding: 12px 0px 12px 0px;
  text-align: center;
  color: #fff;
`;

const Writer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  span {
    margin-bottom: 3px;
    margin-left: 10px;
  }
`
const SortBox = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .iconbox {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    .icon {
      font-size: 30px;
      margin-left: 5px;
      cursor: pointer;
      color: #aaa;
      &:hover {
        color: #666;
      }
    }
    .active {
      color: var(--color);
      &:hover {
        color: var(--color);
      }
    }
  }
  .title {
    width: fit-content;
    height: fit-content;
    border: 2px solid var(--color);
    border-radius: 100px;
    padding: 6px 13px 6px 13px;
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }
`

const SortDropdownBox = styled.div`
  cursor: pointer;
  width: 150px;
  height: 35px;
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
  .icon {
    color: rgb(255, 165, 0);
  }
`
const SortMenu = styled.div`
  z-index: 999;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 40px;
  width: 150px;
  height: 500px;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: all 0.1s;
  &.show {
    height: 210px;
    visibility: visible;
    opacity: 1;
  }
  &.hide {
    height: 0px;
    visibility: hidden;
    opacity: 0;
  }
  .item {
    cursor: pointer;
    width: 100%;
    height: 35px;
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
  }
`

const DetailReview = () => {
  const initCount = [0, 0, 0, 0];

  const [sort, setSort] = useState('별점순 보기');
  const [sortActive, setSortActive] = useState(false);

  return (
    <DetailReviewBox>
      <SortBox>
        <div className="title">상품후기 내역</div>
        <SortDropdownBox onClick={() => { setSortActive(!sortActive) }}>
          <span>{sort}</span>
          <MdKeyboardArrowDown className={'down ' + `${sortActive ? 'active' : ''}`} />
        </SortDropdownBox>
        <SortMenu className={sortActive ? 'show' : 'hide'}>
          <div className="item" onClick={() => { setSort('별점순 보기'); setSortActive(false) }}>별점순 보기</div>
          <div className="item" onClick={() => { setSort(<><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /></>); setSortActive(false) }}><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /></div>
          <div className="item" onClick={() => { setSort(<><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /></>); setSortActive(false) }}><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /></div>
          <div className="item" onClick={() => { setSort(<><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /></>); setSortActive(false) }}><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /></div>
          <div className="item" onClick={() => { setSort(<><MdStarRate className="icon" /><MdStarRate className="icon" /></>); setSortActive(false) }}><MdStarRate className="icon" /><MdStarRate className="icon" /></div>
          <div className="item" onClick={() => { setSort(<><MdStarRate className="icon" /></>); setSortActive(false) }}><MdStarRate className="icon" /></div>
        </SortMenu>
      </SortBox>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell className="n">번호</TableHeaderCell>
            <TableHeaderCell>상품후기</TableHeaderCell>
            <TableHeaderCell className="s">별점</TableHeaderCell>
            <TableHeaderCell className="w">작성자</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {
            initCount.map((item, i) => {
              return (
                <TableRowHover key={i}>
                  <TableCell className="n">{i}</TableCell>
                  <TableCell>배송이 너무 빨라서 좋아요</TableCell>
                  <TableCell className="s">
                    <MdStarRate className="icon" />
                    <MdStarRate className="icon" />
                    <MdStarRate className="icon" />
                    <MdStarRate className="icon" />
                    <MdStarRate className="icon" />
                  </TableCell>
                  <TableCell className="w">
                    <Writer>
                      <span className="">IDIDIDID***</span>
                      <span className="">2023-12-12 12:12</span>
                      <span className="">조회수&nbsp;:&nbsp;5</span>
                    </Writer>
                  </TableCell>
                </TableRowHover>
              )
            })
          }
        </tbody>
      </Table>
    </DetailReviewBox>
  )
};

export default DetailReview;