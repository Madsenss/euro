import styled from "styled-components";

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

const Order = () => {
  return (
    <PartsBox>
      <PartsHeader>
        <span className="title">주문내역</span>
        <span className="sub-title">최대 지난 3년간의 주문 내역까지 확인할 수 있습니다</span>
      </PartsHeader>
    </PartsBox>
  )
};

export default Order;