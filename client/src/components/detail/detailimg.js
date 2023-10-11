import styled from "styled-components";

const DetailImgBox = styled.div`
  width: 1350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  img {
    width: 800px;
  }
`

const DetailImg = () => {
  return (
    <DetailImgBox>
      <img className="img" src={process.env.PUBLIC_URL + '/pa.PNG'} alt="init"/>
      <img className="img" src={process.env.PUBLIC_URL + '/pb.PNG'} alt="init"/>
      <img className="img" src={process.env.PUBLIC_URL + '/pc.PNG'} alt="init"/>
    </DetailImgBox>
  )
};

export default DetailImg;

