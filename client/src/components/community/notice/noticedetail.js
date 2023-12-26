import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoticeDetailBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: #555;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .sub-title {
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
`
const NoticeItemHeader = styled.div`
  width: 100%;
  height: fit-content;
  border-top: 2px solid black;
  .header-item {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .header-text {
      padding-left: 20px;
      color: #666;
      font-size: 14px;
    }
    .header-title {
      width: 130px;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #b0d6f5;
    }
    .header-content {
      width: fit-content;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #fff;
    }
  }
`
const NoticeItem = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  .item-text {
    margin-bottom: ${props => props.true ? '50px' : '0px'};
  }
  border-bottom: 1px solid black;
  padding: 50px 10px 100px 10px;
`
const Button = styled.div`
  cursor: pointer;
  margin: 40px 0px 0px auto;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  background-color: var(--color);
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.1);
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 40px 10px 40px;
  transition: 0.25s;
  &:hover {
    opacity: 0.7;
  }
`

const NoticeDetail = ({ noticeNum }) => {
  const navigate = useNavigate();
  const initNoticeData = [
    {
      id: 0,
      title: 'A',
      content: 'A안녕하세요 유로시스템입니다. 새해에는 배송이 늦습니다. 감사합니다.A',
      image: ['a.png', 'b.png'],
      date: '2023-12-24'
    },
    {
      id: 1,
      title: 'B',
      content: 'B안녕하세요 유로시스템입니다. 새해에는 배송이 늦습니다. 감사합니다.A',
      image: ['a.png', 'b.png'],
      date: '2023-12-25'
    },
    {
      id: 2,
      title: 'C',
      content: 'C안녕하세요 유로시스템입니다. 새해에는 배송이 늦습니다. 감사합니다.A',
      image: [],
      date: '2023-12-26'
    },
  ];
  const selectedNotice = initNoticeData.filter((v) => v.id === parseInt(noticeNum && noticeNum));
  return (
    <NoticeDetailBox>
      <span className="title">공지사항</span>
      <span className="sub-title">새로운 소식들과 유용한 정보들을 확인하세요</span>
      <NoticeItemHeader>
        <div className="header-item">
          <div className="header-title">
            <span className="header-text">제목</span>
          </div>
          <div className="header-content">
            <span className="header-text">{selectedNotice && selectedNotice[0].title}</span>
          </div>
        </div>
        <div className="header-item">
          <div className="header-title">
            <span className="header-text">작성자</span>
          </div>
          <div className="header-content">
            <span className="header-text">운영자</span>
          </div>
        </div>
        <div className="header-item">
          <div className="header-title">
            <span className="header-text">작성일</span>
          </div>
          <div className="header-content">
            <span className="header-text">{selectedNotice && selectedNotice[0].date}</span>
          </div>
        </div>
      </NoticeItemHeader>
      <NoticeItem true={selectedNotice && selectedNotice[0].image.length > 0}>
        <span className="item-text">
          {selectedNotice && selectedNotice[0].content}
        </span>
        {
          selectedNotice && selectedNotice[0].image.length > 0
          ? selectedNotice && selectedNotice[0].image.map((item, i) => {
            return (
              <img src={item} alt={item}/>
            )
          })
          : null
        }
      </NoticeItem>
      <Button onClick={() => { navigate('/community/notice'); window.scrollTo({top: 0, behavior: 'auto'}); }}>목록</Button>
    </NoticeDetailBox>
  )
};

export default NoticeDetail;