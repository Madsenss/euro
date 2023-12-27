import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 300px;
    margin-bottom: 20px;
  }
  .card-box {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
const Card = styled.div`
  cursor: pointer;
  width: 350px;
  height: 350px;
  padding: 10px 10px 10px 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px 0px 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0, 0.2);
  img {
    z-index: 1;
    width: 100%;
    filter: brightness(0.5);
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
  }
  &:hover {
    img {
      scale: 1.1;
      filter: brightness(0.7);
    }
    .edge {
      transition: all 0.3s;
      background-color: var(--color);
    }
  }
`
const ExtenderBox = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 40%;
  }
  .edge {
    width: 120px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 25%;
    transition: all 0.3s;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    border: 2px solid var(--color);
  }
`
const ExtenderTB = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.5s ease;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover:before {
    top: 0;
    left: 0;
  }

  &:hover:after {
    bottom: 0;
    right: 0;
  }
`;
const ExtenderLR = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 0;
    background-color: #fff;
    transition: height 0.5s ease;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover:after {
    height: 100%;
  }

  &:hover:before {
    top: 0;
    right: 0;
  }

  &:hover:after {
    bottom: 0;
    left: 0;
  }
`;

const Main = () => {
  const navigate = useNavigate();
  return (
    <MainBox>
      <img className="logo" src={process.env.PUBLIC_URL + '/logo2.png'} alt="logo" />
      <div className="card-box">
        <Card onClick={() => { navigate('/inquiry/product'); }}>
          <img src={process.env.PUBLIC_URL + '/many2.jpg'} alt="many" />
          <ExtenderBox>
            <ExtenderTB>
              <ExtenderLR>
              </ExtenderLR>
            </ExtenderTB>
            <span className="title">견적/대량구매 문의</span>
            <div className="edge">바로가기</div>
          </ExtenderBox>
        </Card>
        <Card onClick={() => { navigate('/inquiry/partnership'); }}>
          <img src={process.env.PUBLIC_URL + '/pt2.jpg'} alt="pt" />
          <ExtenderBox>
            <ExtenderTB>
              <ExtenderLR>
              </ExtenderLR>
            </ExtenderTB>
            <span className="title">업무제휴 문의</span>
            <div className="edge">바로가기</div>
          </ExtenderBox>
        </Card>
      </div>
    </MainBox>
  )
};

export default Main;