import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdMessage, MdStarRate } from "react-icons/md";
import styled from "styled-components";

const DetailQNABox = styled.div`
  border-top: 2px solid #ddd;
  padding-top: 50px;
  margin-bottom: 50px;
  width: 1100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
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
    border: 2px solid rgb(255, 200, 0);
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
  z-index: 1000;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 40px;
  width: 150px;
  height: 140px;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: all 0.1s;
  &.show {
    height: 140px;
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
const QNABox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

const QNAHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #eee;
  border-bottom: 1.5px solid #eee;
  background-color: rgb(250, 250, 250);
  padding: 15px 0px 15px 0px;
  div {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: 13px;
  }
  .category {
    width: 10%;
  }
  .status {
    width: 10%;
  }
  .title {
    width: 50%;
  }
  .writer {
    width: 10%;
  }
  .date {
    width: 10%;
  }
`
const QNAOuter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const QNAItem = styled(QNAHeader)`
  cursor: pointer;
  z-index: 999;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #ddd;
  .star {
    .icon {
      font-size: 15px;
      color: var(--color);
    }
  }
  .title{
    justify-content: start;
  }
  &:hover {
    background-color: #eee;
  }
`
const QNAHide = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  .icon {
    position: absolute;
    left: 30px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    .m {
      color: var(--color);
      font-size: 20px;
      margin-right: 2px;
    }
    .r {
      color: #aaa;
      font-size: 16px;
      margin-bottom: 3px;
    }
  }
  .answer {
    width: 100%;
    font-size: 13px;
    p {
      margin-bottom: 5px;
    }
  }
  &.show {
    padding: 30px 80px 30px 80px;
    height: fit-content;
    border-bottom: 1px solid #ddd;
  }
  &.hide {
    height: 0px;
  }
`
const NoneQNA = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #666;
`

const PageBox = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const PageButton = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 2px 1px rgb(0, 0, 0, 0.1);
  font-size: 24px;
  border-radius: 4px;
  margin: 0px 5px 0px 5px;
  &.active {
    color: var(--color);
  }
  &.none-active {
    color: #ddd;
  }
`
const PageNumber = styled(PageButton)`
  font-size: 14px;
  font-weight: bold;
  color: #888;
  &.active {
    box-shadow: 0px 0px 3px 0.5px var(--color);
  }
`

const DetailQNA = () => {

  const [sort, setSort] = useState('문의유형');
  const [sortActive, setSortActive] = useState(false);
  const initCount = [
    { id: 0, name: 'a0' },
    { id: 1, name: 'a1' },
    { id: 2, name: 'a2' },
    { id: 3, name: 'a3' },
    { id: 4, name: 'a4' },
    { id: 5, name: 'a5' },
    { id: 6, name: 'a6' },
    { id: 7, name: 'a7' },
    { id: 8, name: 'a8' },
    { id: 9, name: 'a9' },
    { id: 10, name: 'a10' },
    { id: 11, name: 'a11' },
  ];
  const [qnaShow, setQNAShow] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(initCount.length / itemsPerPage);
  const maxPageNumbersToShow = 5;
  const minPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const maxPage = Math.min(totalPageCount, minPage + maxPageNumbersToShow - 1);
  const pageNumberArray = Array.from({ length: maxPage - minPage + 1 }, (_, index) => minPage + index);

  useEffect(() => {
    const copyQNAShow = Array(itemsPerPage).fill(false);
    setQNAShow(copyQNAShow);
  }, [itemsPerPage]);

  const handleShow = (i) => {
    const copyQNAShow = [...qnaShow];
    copyQNAShow[i] = !copyQNAShow[i];
    setQNAShow(copyQNAShow);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) {
      newPage = 1;
    }
    if (newPage > Math.ceil(initCount.length / itemsPerPage)) {
      newPage = Math.ceil(initCount.length / itemsPerPage);
    }
    const newQNAShow = Array(initCount.length).fill(false);
    setQNAShow(newQNAShow);
  
    setCurrentPage(newPage);
  };

  const getReviewsForCurrentPage = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return initCount.slice(start, end);
  };

  return (
    <DetailQNABox>
      <SortBox>
        <div className="title">상품문의 내역</div>
        <SortDropdownBox onClick={() => { setSortActive(!sortActive) }}>
          <span>{sort}</span>
          <MdKeyboardArrowDown className={'down ' + `${sortActive ? 'active' : ''}`} />
        </SortDropdownBox>
        <SortMenu className={sortActive ? 'show' : 'hide'}>
          <div className="item" onClick={() => { setSort('문의유형'); setSortActive(false) }}>문의유형</div>
          <div className="item" onClick={() => { setSort('상품문의'); setSortActive(false) }}>상품문의</div>
          <div className="item" onClick={() => { setSort('견적/재고문의'); setSortActive(false) }}>견적/재고문의</div>
          <div className="item" onClick={() => { setSort('기타문의'); setSortActive(false) }}>기타문의</div>
        </SortMenu>
      </SortBox>
      <QNABox>
        <QNAHeader>
          <div className="category">문의유형</div>
          <div className="status">답변상태</div>
          <div className="title">제목</div>
          <div className="writer">문의자</div>
          <div className="date">등록일</div>
        </QNAHeader>
        {
          getReviewsForCurrentPage().map((item, i) => (
            <QNAOuter key={item.id}>
              <QNAItem onClick={() => { handleShow(i); }}>
                <div className="category">상품/배송</div>
                <div className="status">[답변완료]</div>
                <div className="title">상품에 문제가 있어요{item.name}</div>
                <div className="writer">Madsens***</div>
                <div className="date">2023-11-09</div>
              </QNAItem>
              <QNAHide className={qnaShow[i] ? 'show' : 'hide'}>
                <div className="icon">
                  <MdMessage className="m"/>
                  <MdKeyboardArrowRight className="r"/>
                </div>
                <div className="answer">
                  <p>안녕하세요 고객님. EUROSYSYEM입니다. {item.id}</p>
                  <p>문의하신 내용을 확인하였습니다. 예정대로 새 상품으로 교환 예정이오니 너그러이 양해 부탁드리겠습니다.</p>
                  <p>빠른 시일 내에 처리 완료하겠습니다. 감사합니다.</p>
                </div>
              </QNAHide>
            </QNAOuter>
          ))
        }
        <PageBox>
          <PageButton
            className={currentPage === 1 ? "none-active" : "active"}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <MdKeyboardArrowLeft />
          </PageButton>
          {
            pageNumberArray.map((pageNumber) => (
              <PageNumber
                key={pageNumber}
                className={currentPage === pageNumber ? "active" : ""}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </PageNumber>
            ))
          }
          <PageButton
            className={currentPage === Math.ceil(initCount.length / itemsPerPage) ? "none-active" : "active"}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <MdKeyboardArrowRight />
          </PageButton>
        </PageBox>
        <NoneQNA>
          작성된 상품 문의가 존재하지 않습니다.(없을시 랜더링)
        </NoneQNA>
      </QNABox>
    </DetailQNABox>
  )
};

export default DetailQNA;

