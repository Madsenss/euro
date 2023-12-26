import styled from "styled-components";
import Notice from "./notice/notice";
import FAQ from "./faq/faq";
import QNA from "./qna/qna"

const ContainerBox = styled.div`
  width: 850px;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100);
`

const Container = ({ path }) => {
  const initQNA = [
    {
      id: 0,
      writer: 'madsens',
      category: '상품',
      title: '재고가 있나요?',
      content: '대량구매를 하려는데 재고가 있나요?',
      image: ['a.png', 'b.png'],
      date: '2023-12-20',
      answerStatus: false,
      answerText: ''
    },
    {
      id: 1,
      writer: 'madsens2',
      category: '배송',
      title: '배송은 얼마나 걸리나요?',
      content: '오늘 시켰는데 언제도착하나요?',
      image: ['a.png'],
      date: '2023-12-20',
      answerStatus: true,
      answerText: '안녕하세요 고객님 유로시스템입니다. 금일 발송해서 모레 전까지 도착 예정입니다. 감사합니다.'
    }
  ];
  const Parts = {
    notice : <Notice/>,
    faq: <FAQ/>,
    qna: <QNA qnaData={initQNA}/>,
  };
  const part = Parts[path && path] || null;

  return (
    <ContainerBox>
      {part && part}
    </ContainerBox>
  )

};

export default Container;