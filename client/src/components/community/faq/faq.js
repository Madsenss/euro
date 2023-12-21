import { useEffect, useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdMessage } from "react-icons/md"
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
const AccordionBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
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
    &.num {
      width: 6%;
    }
    &.category {
      width: 14%;
    }
    &.title {
      width: 80%;
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
  .icon-box {
    position: absolute;
    left: 20px;
    top: 30px;
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
  .content-box {
    color: #666;
    padding: 30px 0px 30px 80px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    .title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    .text {
      margin-bottom: 10px;
    }
  }
`
const SortDropdownBox = styled.div`
  margin-left: auto;
  cursor: pointer;
  width: 160px;
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
`
const SortMenu = styled.div`
  z-index: 999;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 40px;
  width: 160px;
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
  }
`

const FAQ = () => {
  const [accordion, setAccordion] = useState([]);
  const [sortActive, setSortActive] = useState(false);
  const [sort, setSort] = useState('전체');

  const toggleAccordion = (i) => {
    var copyAccordion = [...accordion];
    copyAccordion[i] = !copyAccordion[i];
    setAccordion(copyAccordion);
  }

  const initCount = [
    { name: '공지사항', url: 'notice' },
    { name: '자주묻는 질문', url: 'faq' },
    { name: '1:1 문의', url: 'qna' },
    { name: '상품후기', url: 'review' }
  ];
  useEffect(() => {
    const copyAccordion = [];
    for (let i = 0; i < initCount && initCount.length(); i++) {
      copyAccordion.push(false);
    }
    setAccordion(copyAccordion);
  }, []);

  return (
    <PartsBox>
      <PartsHeader>
        <span className="title">자주묻는 질문</span>
        <span className="sub-title">고객님들께서 가장 자주하시는 질문을 모두 모았습니다</span>
        <SortDropdownBox onClick={() => { setSortActive(!sortActive) }}>
          <span>{sort}</span>
          <MdKeyboardArrowDown className={'down ' + `${sortActive ? 'active' : ''}`} />
        </SortDropdownBox>
        <SortMenu className={sortActive ? 'show' : 'hide'}>
          <div className="item" onClick={() => { setSort('전체'); setSortActive(false) }}>전체</div>
          <div className="item" onClick={() => { setSort('취소/교환/환불'); setSortActive(false) }}>취소/교환/환불</div>
          <div className="item" onClick={() => { setSort('배송'); setSortActive(false) }}>배송</div>
          <div className="item" onClick={() => { setSort('주문/결제/대량주문'); setSortActive(false) }}>주문/결제/대량주문</div>
        </SortMenu>
      </PartsHeader>

      <AccordionBox>
        <AccordionHeader>
          <div className="part num">번호</div>
          <div className="part category">카테고리</div>
          <div className="part title">제목</div>
        </AccordionHeader>
        {
          initCount.map((item, i) => {
            return (
              <AccordionOuter open={accordion[i]}>
                <AccordionTop onClick={() => { toggleAccordion(i) }}>
                  <div className="part num">{i}</div>
                  <div className="part category">취소/교환/환불</div>
                  <div className="part title">교환(반품) 진행 시, 배송비가 부과 되나요?</div>
                </AccordionTop>
                <AccordionBottom>
                  <div className="icon-box">
                    <MdMessage className="m" />
                    <MdKeyboardArrowRight className="r" />
                  </div>
                  <div className="content-box">
                    <span className="title">교환(반품) 진행 시, 배송비 안내</span>
                    <span className="text">- 단순변심에 의환 교환/반품 시 배송비 6,000원을 고객님께서 부담하셔야합니다.</span>
                    <span className="text">- 파트너사 판매상품의 경우, 상품의 상세페에지 내 안내 정책을 참고 부탁드립니다.</span>
                  </div>
                </AccordionBottom>
              </AccordionOuter>
            )
          })
        }
      </AccordionBox>
    </PartsBox>
  )
};

export default FAQ;