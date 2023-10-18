import { useEffect, useState } from "react";
import { MdArrowRight, MdCall, MdForward, MdKeyboardArrowDown, MdKeyboardArrowRight, MdMessage, MdOutlineAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContainerBox = styled.div`
  width: 1050px;
  height: fit-content;
`
const Card = styled.div`
  margin: 0% 0% 0% 3%;
  width: 47%;
  height: 220px;
  display: inline-flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ddd;
    margin-bottom: 10px;
    .header-title {
      color: #555;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .morebox {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #666;
    .icon {
      font-size: 18px;
    }
    &:hover {
      color: var(--color);
    }
  }
`
const CardItem = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`

const BottomCard = styled(Card)`
  padding: 20px;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.1);
  border-radius: 6px;
  height: fit-content;
  color: #666;
  .icon-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .title {
      font-weight: bold;
      font-size: 20px;
    }
    .icon {
      font-size: 20px;
      margin-right: 5px;
    }
  }
  .main-text {
    font-size: 22px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .sub-textbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    .text-icon {
      font-size: 18px;
      margin-right: 5px;
      color: var(--color);
    }
    .sub-text {
      font-size: 16px;
    }
  }
`

const PartsBox = styled.div`
  width: 1050px;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #555;
  .num {
    width: 60px;
  }
  .title {

  }
  .writer {
    width: 100px;
  }
  .date {
    width: 150px;
  }
  .gray {
    color: #aaa;
  }
  .left {
    text-align: left;
    padding-left: 20px;
  }
`;

const TableHeader = styled.thead`
  border-top: 2px solid black;
  border-bottom: 1px solid black;
`;

const TableHeaderCell = styled.th`
  padding: 20px 0px 20px 0px;
  text-align: center;
  font-weight: lighter;
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
  cursor: pointer;
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: max-height 0.25s ease-in-out;
  max-height: ${(props) => (props.open ? '1500px' : '50px')};
`
const AccordionTop = styled(AccordionHeader)`
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

const Container = ({ path, setNav }) => {
  const navigate = useNavigate();
  const [accordion, setAccordion] = useState([]);
  const [sortActive, setSortActive] = useState(false);
  const [sort, setSort] = useState('전체');
  let result;
  const toggleAccordion = (i) => {
    var copyAccordion= [...accordion];
    copyAccordion[i] = !copyAccordion[i];
    setAccordion(copyAccordion);
  }

  const initCount = [
    { name: '공지사항', url: 'notice' },
    { name: '자주묻는 질문', url: 'faq' },
    { name: '상품문의', url: 'qna' },
    { name: '상품후기', url: 'review' }
  ];
  useEffect(() => {
    const copyAccordion = [];
    for (let i = 0; i < initCount && initCount.length(); i++) {
      copyAccordion.push(false);
    }
    setAccordion(copyAccordion);
  }, []);

  if (path === 'notice') {
    result =
      <PartsBox>
        <PartsHeader>
          <span className="title">공지사항</span>
          <span className="sub-title">유로시스템의 소식들과 정보들을 확인하세요</span>
        </PartsHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell className="num">번호</TableHeaderCell>
              <TableHeaderCell className="title">제목</TableHeaderCell>
              <TableHeaderCell className="writer">작성자</TableHeaderCell>
              <TableHeaderCell className="date">작성일</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {
              initCount.map((item, i) => {
                return (
                  <TableRowHover key={i}>
                    <TableCell className="num">{i}</TableCell>
                    <TableCell className="title left">유로시스템에서 배송관련 안내사항 알려드립니다{i}</TableCell>
                    <TableCell className="writer">운영자</TableCell>
                    <TableCell className="date gray">2022.07.27</TableCell>
                  </TableRowHover>
                )
              })
            }
          </tbody>
        </Table>
      </PartsBox>
  } else if (path === 'faq') {
    result =
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
            initCount.map((item, i)=>{
              return (
                <AccordionOuter open={accordion[i]} onClick={()=>{toggleAccordion(i)}}>
                  <AccordionTop>
                    <div className="part num">{i}</div>
                    <div className="part category">취소/교환/환불</div>
                    <div className="part title">교환(반품) 진행 시, 배송비가 부과 되나요?</div>
                  </AccordionTop>
                  <AccordionBottom>
                    <div className="icon-box">
                      <MdMessage className="m"/>
                      <MdKeyboardArrowRight className="r"/>
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
  } else if (path === 'qna') {
    result =
      <PartsBox>
        <PartsHeader>
          <span className="title">상품문의</span>
          <span className="sub-title">미정</span>
        </PartsHeader>
      </PartsBox>
  } else if (path === 'review') {
    result =
      <PartsBox>
        <PartsHeader>
          <span className="title">상품후기</span>
          <span className="sub-title">미정</span>
        </PartsHeader>
      </PartsBox>
  } else {
    result = 'default'
  }

  return (
    <ContainerBox>
      {
        result === 'default'
          ? <>
            {
              initCount.map((item, i) => {
                return (
                  <Card key={i}>
                    <div className="header">
                      <span className="header-title">{item.name}</span>
                      <div className="morebox" onClick={() => { navigate('/community/' + item.url); window.scrollTo({ top: 0, behavior: 'auto' }); setNav(item.name) }}>
                        <span className="more">더보기</span>
                        <MdArrowRight className="icon" />
                      </div>
                    </div>
                    <CardItem>- 명절 배송관련 안내드립니다1</CardItem>
                    <CardItem>- 명절 배송관련 안내드립니다2</CardItem>
                    <CardItem>- 명절 배송관련 안내드립니다3</CardItem>
                    <CardItem>- 명절 배송관련 안내드립니다4</CardItem>
                    <CardItem>- 명절 배송관련 안내드립니다5</CardItem>
                  </Card>
                )
              })
            }
            <BottomCard>
              <div className="icon-box">
                <MdCall className="icon" />
                <span className="title">고객센터 안내</span>
              </div>
              <span className="main-text">031-123-4567</span>
              <div className="sub-textbox">
                <MdForward className="text-icon" />
                <span className="sub-text">상담시간 : 09:00 ~ 18:00</span>
              </div>
              <div className="sub-textbox">
                <MdForward className="text-icon" />
                <span className="sub-text">점심시간 : 12:00 ~ 13:00</span>
              </div>
              <div className="sub-textbox">
                <MdForward className="text-icon" />
                <span className="sub-text">주말 및 공휴일 휴무</span>
              </div>
            </BottomCard>
            <BottomCard>
              <div className="icon-box">
                <MdOutlineAccountBalance className="icon" />
                <span className="title">입금계좌 안내</span>
              </div>
              <span className="main-text">예금주 : (주)유로시스템</span>
              <div className="sub-textbox">
                <MdForward className="text-icon" />
                <span className="sub-text">신한은행 - 123-456-789123</span>
              </div>
              <div className="sub-textbox">
                <MdForward className="text-icon" />
                <span className="sub-text">기업은행 - 010-1234-5678</span>
              </div>
              <div className="sub-textbox">
                <MdForward className="text-icon" />
                <span className="sub-text">국민은행 - 123456-78-912345</span>
              </div>
            </BottomCard>
          </>
          : result
      }
    </ContainerBox>
  )

};

export default Container;