import { MdArrowRight, MdCall, MdForward, MdOutlineAccountBalance } from "react-icons/md";
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

const Container = ({path, setNav}) => {
  const navigate = useNavigate();
  let result;

  if(path === 'notice'){
    result = <div>notice</div>
  } else if(path === 'faq') {
    result = <div>faq</div>
  } else if(path === 'qna') {
    result = <div>qna</div>
  } else if(path === 'review') {
    result = <div>review</div>
  } else {
    result = 'default'
  }
  const initCount = [
    {name: '공지사항', url: 'notice'},
    {name: '자주묻는 질문', url: 'faq'},
    {name: '상품문의', url: 'qna'},
    {name: '상품후기', url: 'review'}
  ];

  return (
    <ContainerBox>
      {
        result === 'default'
        ? <>
            {
              initCount.map((item, i)=>{
                return (
                  <Card key={i}>
                    <div className="header">
                      <span className="header-title">{item.name}</span>
                      <div className="morebox" onClick={()=>{ navigate('/community/' + item.url); window.scrollTo({top: 0, behavior: 'auto'}); setNav(item.name) }}>
                        <span className="more">더보기</span>
                        <MdArrowRight className="icon"/>
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
                <MdCall className="icon"/>
                <span className="title">고객센터 안내</span>
              </div>
              <span className="main-text">031-123-4567</span>
              <div className="sub-textbox">
                <MdForward className="text-icon"/>
                <span className="sub-text">상담시간 : 09:00 ~ 18:00</span>
              </div>
              <div className="sub-textbox">
                <MdForward className="text-icon"/>
                <span className="sub-text">점심시간 : 12:00 ~ 13:00</span>
              </div>
              <div className="sub-textbox">
                <MdForward className="text-icon"/>
                <span className="sub-text">주말 및 공휴일 휴무</span>
              </div>
            </BottomCard>
            <BottomCard>
              <div className="icon-box">
                <MdOutlineAccountBalance className="icon"/>
                <span className="title">입금계좌 안내</span>
              </div>
              <span className="main-text">예금주 : (주)유로시스템</span>
              <div className="sub-textbox">
                <MdForward className="text-icon"/>
                <span className="sub-text">신한은행 - 123-456-789123</span>
              </div>
              <div className="sub-textbox">
                <MdForward className="text-icon"/>
                <span className="sub-text">기업은행 - 010-1234-5678</span>
              </div>
              <div className="sub-textbox">
                <MdForward className="text-icon"/>
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