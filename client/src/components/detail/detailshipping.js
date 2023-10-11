import styled from "styled-components";

const DetailShippingBox = styled.div`
  border-top: 2px solid #ddd;
  padding-top: 50px;
  width: 1350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 800px;
  }
  margin-bottom: 30px;
`
const DetailShipping = () => {
  return (
    <DetailShippingBox>
      <img src={process.env.PUBLIC_URL + '/shipping.PNG'} alt="init"/>
    </DetailShippingBox>
  )
};

export default DetailShipping;