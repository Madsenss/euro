import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InquiryBox = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #b0d6f5; */
  background-color: rgb(250, 250, 250);
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
  .back {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: 1px solid black;
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
  .edge {
    width: 120px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
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

const ArrowBox = styled.div`
  z-index: 999;
  cursor: pointer;
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  position: fixed;
  bottom: 30px;
  right: 40px;
  background-color: rgb(0, 0, 0, 0.4);
  transition: all 0.25s;
  .icon {
    transition: all 0.25s;
    font-size: 40px;
    color: #eee;
  }
  &:hover {
    background-color: transparent;
    .icon {
      transform: translateX(-5px);
      color: #555;
    }
  }
`

const Inquiry = () => {
  const navigate = useNavigate();
  return (
    <InquiryBox>
      <img className="logo" src={process.env.PUBLIC_URL + '/logo2.png'} alt="logo" />
      <div className="card-box">
        <Card>
          <img src={process.env.PUBLIC_URL + '/many2.jpg'} alt="many" />
          <ExtenderBox>
            <ExtenderTB>
              <ExtenderLR>
              </ExtenderLR>
            </ExtenderTB>
            <div className="edge">견적 문의</div>
          </ExtenderBox>
        </Card>
        <Card>
          <img src={process.env.PUBLIC_URL + '/pt2.jpg'} alt="pt" />
          <ExtenderBox>
            <ExtenderTB>
              <ExtenderLR>
              </ExtenderLR>
            </ExtenderTB>
            <div className="edge">제휴 문의</div>
          </ExtenderBox>
        </Card>
      </div>
      <ArrowBox onClick={() => { navigate(-1); }}>
        <MdKeyboardDoubleArrowLeft className="icon" />
      </ArrowBox>     
    </InquiryBox>
  )
};

export default Inquiry;