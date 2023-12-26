import { useEffect, useState } from "react"
import styled from "styled-components"
import CreateModal from "./createmodal"
import DeleteModal from "./deletemodal"
import ModifyModal from "./modifymodal"

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
const AccordionBox = styled.div`
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
const AccordionHeader = styled.div`
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
    &.title {
      width: 70%;
    }
    &.date {
      width: 15%;
    }
    &.status {
      width: 15%;
    }
  }
`
const AccordionOuter = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: max-height 0.25s ease-in-out;
  max-height: ${(props) => (props.open ? '1500px' : '50px')};
`
const AccordionTop = styled(AccordionHeader)`
  cursor: pointer;
  border: none;
  height: 50px;
  border-bottom: 1px solid #ddd;
  .title {
    justify-content: start;
    padding-left: 20px;
  }
`
const AccordionBottom = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: rgb(247, 247, 247);
  padding: 60px 20px 20px 70px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .question-category {
    position: absolute;
    left: 15px;
    top: 20px;
    font-size: 13px;
    color: #777;
  }
  .question-box {
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    .question {
      position: absolute;
      left: -50px;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 12px;
      font-weight: bold;
      background-color: var(--color);
      color: #fff;
    }
  }
  .answer-box {
    padding-top: 15px;
    margin-top: 15px;
    border-top: 1.5px solid #ddd;
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    .answer {
      position: absolute;
      left: -50px;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 12px;
      font-weight: bold;
      background-color: var(--color);
      color: #fff;
      filter: brightness(1.5);
    }
  }
  .mode {
    margin-top: 20px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: end;
    .mode-item {
      cursor: pointer;
      color: #777;
      font-weight: bold;
      font-size: 12px;
      padding: 0px 8px 0px 8px;
      &:hover {
        color: #555;
      }
    }
  }
`
const QuestionButton = styled.div`
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
  padding: 10px 25px 10px 25px;
  transition: 0.25s;
  &:hover {
    opacity: 0.7;
  }
`

const QNA = ({ qnaData }) => {
  const [accordion, setAccordion] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const toggleAccordion = (i) => {
    var copyAccordion = [...accordion];
    copyAccordion[i] = !copyAccordion[i];
    setAccordion(copyAccordion);
  }
  const initCount = [0, 0, 0];
  useEffect(() => {
    const copyAccordion = Array(initCount.length).fill(false);
    setAccordion(copyAccordion);
  }, []);

  return (
    <>
      <CreateModal open={openCreate} onClose={() => { setOpenCreate(false); }} />
      <ModifyModal selectedData={selectedData} open={openModify} onClose={() => { setOpenModify(false); }} />
      <DeleteModal selectedData={selectedData} open={openDelete} onClose={() => { setOpenDelete(false); }} />
      <PartsBox>
        <PartsHeader>
          <span className="title">1:1 문의</span>
          <span className="sub-title">상품/배송/환불 및 취소 등 문의를 남겨주세요</span>
        </PartsHeader>
        <AccordionBox>
          <AccordionHeader>
            <div className="part title">제목</div>
            <div className="part date">작성일</div>
            <div className="part status">답변상태</div>
          </AccordionHeader>
          {
            qnaData && qnaData.length > 0
              ? qnaData && qnaData.map((item, i) => {
                return (
                  <AccordionOuter key={i} open={accordion[i]}>
                    <AccordionTop onClick={() => { toggleAccordion(i) }}>
                      <div className="part title">{item.title}</div>
                      <div className="part date">{item.date}</div>
                      <div className="part status">{item.answerStatus ? '답변완료' : '답변대기'}</div>
                    </AccordionTop>
                    <AccordionBottom>
                      <span className="question-category">[{item.category}] 관련 문의</span>
                      <div className="question-box">
                        <div className="question">Q</div>
                        <span className="">{item.content}</span>
                      </div>
                      {
                        item.answerStatus
                          ? <div className="answer-box">
                              <div className="answer">A</div>
                              <span className="">{item.answerText}</span>
                            </div>
                          : null
                      }
                      {
                        item.answerStatus
                          ? null
                          : <div className="mode">
                              <span className="mode-item" onClick={(e) => {
                                e.stopPropagation();
                                setSelectedData(item);
                                setOpenModify(true);
                              }}>수정</span>
                              <span className="mode-item" onClick={(e) => {
                                e.stopPropagation();
                                setSelectedData(item);
                                setOpenDelete(true);
                              }}>삭제</span>
                            </div>
                      }
                    </AccordionBottom>
                  </AccordionOuter>
                )
              })
              : <div className="empty">문의내역이 존재하지 않습니다</div>
          }
          <QuestionButton onClick={() => { setOpenCreate(true); }}>문의하기</QuestionButton>
        </AccordionBox>
      </PartsBox>
    </>

  )
};

export default QNA;