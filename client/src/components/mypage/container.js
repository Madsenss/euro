import styled from "styled-components";
import Order from "./order/order";

const ContainerBox = styled.div`
  width: 850px;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100);
`

const Container = ({ path, orderNumber }) => {

  const parts = {
    order: <Order />,
    pick: 2,
    address: 3,
    inquiry: 4,
    review: 5,
    info: 6
  };
  const part = orderNumber ? <Order orderNumber={orderNumber}/> : parts[path && path] || null;
  return (
    <ContainerBox>
      {part && part}
    </ContainerBox>
  )
};

export default Container;