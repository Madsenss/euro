import styled from "styled-components";

const MainBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 10px 20px 10px;
`
const WhiteBox = styled.div`
  display: inline-flex;
  vertical-align: top;
  width: 33.3333%;
  height: 350px;
  padding: 0px 10px 0px 10px;
  margin-bottom: 20px;
  .inner {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 0px 3px 0.5px rgb(0, 0, 0, 0.1);
    padding: 15px;
    .top {
      width: 100%;
      height: fit-content;
      padding : 0px 0px 10px 10px;
      font-size: 26px;
      font-weight: bold;
      border-bottom: 1.5px solid #aaa;
      margin-bottom: 20px;
    }
    .bottom {
      width: 100%;
      height: fit-content;
      font-weight: bold;
      .item {
        display: inline-flex;
        flex-direction: column;
        width: 30%;
        margin: 0% 1.65% 0% 1.65%;
        height: 100px;
        border-radius: 4px;
        background-color: #eee;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        .color {
          margin-bottom: 3px;
          font-size: 30px;
          color: var(--color);
        }
      }
    }
  }
`

const Main = () => {
  return (
    <MainBox>
      <WhiteBox>
        <div className="inner">
          <div className="top">
            <span className="title">판매 현황</span>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">결제완료</span>
            </div>
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">상품준비</span>
            </div>
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">배송준비</span>
            </div>
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">배송중</span>
            </div>
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">배송완료</span>
            </div>
          </div>
        </div>
      </WhiteBox>
      <WhiteBox>
        <div className="inner">
          <div className="top">
            <span className="title">처리지연 현황</span>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">발송지연</span>
            </div>
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">취소지연</span>
            </div>
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">반품지연</span>
            </div>
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">답변지연</span>
            </div>
          </div>
        </div>
      </WhiteBox>
      <WhiteBox>
        <div className="inner">
          <div className="top">
            <span className="title">취소/반품 현황</span>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">취소주문</span>
            </div>
            <div className="item">
              <span className="color">&nbsp;0&nbsp;</span>
              <span className="text">반품주문</span>
            </div>
          </div>
        </div>
      </WhiteBox>
      

    </MainBox>
  )
};

export default Main;