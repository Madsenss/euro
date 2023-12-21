import styled from "styled-components";
import Notice from "./notice/notice";
import FAQ from "./faq/faq";
import QNA from "./qna/qna"

const ContainerBox = styled.div`
  width: 850px;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100);
  border: 1px solid red;
`

const Container = ({ path, setNav }) => {
  const Parts = {
    notice : <Notice/>,
    faq: <FAQ/>,
    qna: <QNA/>,
    estimate: <div>1</div>
  };
  const part = Parts[path && path] || null;

  return (
    <ContainerBox>
      {part && part}
    </ContainerBox>
  )

};

export default Container;