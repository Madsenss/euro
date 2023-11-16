import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdStarRate } from "react-icons/md";
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
    color: var(--color);
  }
`
const SortMenu = styled.div`
  z-index: 1000;
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
      color: var(--color);
    }
  }
`
const ReviewBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

const ReviewHeader = styled.div`
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
  .star {
    width: 13%;
  }
  .review {
    width: 51%;
  }
  .writer {
    width: 13%;
  }
  .date {
    width: 13%;
  }
`
const ReviewOuter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ReviewItem = styled(ReviewHeader)`
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
  .review {
    justify-content: start;
  }
  &:hover {
    background-color: #eee;
  }
`
const ReviewHide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 13px;
    margin-bottom: 20px;
  }
  img {
    width: 400px;
  }
  &.show {
    padding: 20px 16.35% 20px 16.35%;
    height: fit-content;
    border-bottom: 1px solid #ddd;
  }
  &.hide {
    height: 0px;
  }
`
const NoneReview = styled.div`
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

const DetailReview = () => {

  const [sort, setSort] = useState('별점순 보기');
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
  const [reviewShow, setReviewShow] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(initCount.length / itemsPerPage);
  const maxPageNumbersToShow = 5;
  const minPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const maxPage = Math.min(totalPageCount, minPage + maxPageNumbersToShow - 1);
  const pageNumberArray = Array.from({ length: maxPage - minPage + 1 }, (_, index) => minPage + index);

  useEffect(() => {
    const copyReivewShow = Array(itemsPerPage).fill(false);
    setReviewShow(copyReivewShow);
  }, [itemsPerPage]);

  const handleShow = (i) => {
    const copyReivewShow = [...reviewShow];
    copyReivewShow[i] = !copyReivewShow[i];
    setReviewShow(copyReivewShow);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) {
      newPage = 1;
    }
    if (newPage > Math.ceil(initCount.length / itemsPerPage)) {
      newPage = Math.ceil(initCount.length / itemsPerPage);
    }
    const newReviewShow = Array(initCount.length).fill(false);
    setReviewShow(newReviewShow);
  
    setCurrentPage(newPage);
  };

  const getReviewsForCurrentPage = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return initCount.slice(start, end);
  };

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
      <ReviewBox>
        <ReviewHeader>
          <div className="star">별점</div>
          <div className="review">구매후기</div>
          <div className="writer">작성자</div>
          <div className="date">작성일</div>
        </ReviewHeader>
        {
          getReviewsForCurrentPage().map((item, i) => (
            <ReviewOuter key={item.id}>
              <ReviewItem onClick={() => { handleShow(i); }}>
                <div className="star"><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /><MdStarRate className="icon" /></div>
                <div className="review">배송이 빨라요 제품이 하자가 없어요{item.name}</div>
                <div className="writer">Madsens***</div>
                <div className="date">2023-11-09</div>
              </ReviewItem>
              <ReviewHide className={reviewShow[i] ? 'show' : 'hide'}>
                <p className="text">배송이 빨라요{item.name}</p>
                <img src={process.env.PUBLIC_URL + '/air.png'} alt="reivewimg" />
              </ReviewHide>
            </ReviewOuter>
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
        <NoneReview>
          작성된 상품 후기가 존재하지 않습니다.(없을시 랜더링)
        </NoneReview>
      </ReviewBox>
    </DetailReviewBox>
  )
};

export default DetailReview;