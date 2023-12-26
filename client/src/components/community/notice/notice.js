import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const PartsBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`
const PartsHeader = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  .title {
    color: #555;
    font-weight: bold;
    font-size: 24px;
    margin-right: 10px;
  }
  .sub-title {
    font-size: 14px;
    color: #aaa;
  }
`
const NoticeBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .empty {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    color: #aaa;
  }
`
const NoticeHeader = styled.div`
  width: 100%;
  height: 60px;
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  .part {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &.num {
      width: 10%;
    }
    &.title {
      width: 65%;
    }
    &.writer {
      width: 10%;
    }
    &.date {
      width: 15%;
    }
  }
`
const NoticeItem = styled(NoticeHeader)`
  cursor: pointer;
  border: none;
  height: 50px;
  border-bottom: 1px solid #ddd;
  .title {
    justify-content: start;
    padding-left: 20px;
  }
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`
const Notice = () => {
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
  const navigate = useNavigate();
  return (
    <PartsBox>
      <PartsHeader>
        <span className="title">공지사항</span>
        <span className="sub-title">새로운 소식들과 유용한 정보들을 확인하세요</span>
      </PartsHeader>
      <NoticeBox>
        <NoticeHeader>
          <div className="part num">번호</div>
          <div className="part title">제목</div>
          <div className="part writer">작성자</div>
          <div className="part date">작성일</div>
        </NoticeHeader>
        {
          initNoticeData.length > 0
            ? initNoticeData.map((item, i) => {
              return (
                <NoticeItem key={i} onClick={() => { navigate('/community/notice/' + item.id); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
                  <div className="part num">{item.id}</div>
                  <div className="part title">{item.title}</div>
                  <div className="part writer">운영자</div>
                  <div className="part date">{item.date}</div>
                </NoticeItem>
              )
            })
            : <div className="empty">공지사항이 존재하지 않습니다</div>
        }

      </NoticeBox>
    </PartsBox>
  )
};

export default Notice;