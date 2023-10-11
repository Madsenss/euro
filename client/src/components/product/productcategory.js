import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PCBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .inner {
    width: 1350px;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    margin-bottom: 30px;
  }
  .headbox {
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    .head {
      z-index: 2;
      width: fit-content;
      height: fit-content;
      padding: 5px 15px 5px 15px;
      background-color: #fff;
      border: 3px solid var(--color);
      border-radius: 50px;
      font-size: 20px;
      font-weight: bold;
      color: #555;
    }
  }
`
const Dash = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: var(--color);
`

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  /* justify-content: center; */
  padding: 30px;
  align-items: center;
  box-shadow: 0px 0px 4px 0.5px rgb(0, 0, 0, 0.15);
  border-radius: 6px;
  img {
    width: 250px;
    margin-right: 30px;
  }
  .textbox {
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .text {
      font-size: 18px;
    }
  }
  .button {
    cursor: pointer;
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: fit-content;
    height: fit-content;
    border: 2px solid var(--color);
    border-radius: 30px;
    padding: 6px 17px 6px 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.2s;
    color: #555;
    &:hover {
      background-color: var(--color);
      color: #fff;
      
      .btn-icon {
        transform: translateX(5px);
      }
    }
    .btn-text {
      font-size: 18px;
      font-weight: bold;
      margin-right: 10px;
    }
    .btn-icon {
      transition: all 0.2s;
      transform: translateX(0px);
      font-size: 26px;
    }
  }
`

const ContactBox = styled.div`
  width: 100%;
  height: fit-content;
  background-image: url(${process.env.PUBLIC_URL + '/pt.jpg'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .dark {
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner {
    position: relative;
    padding: 50px 0px 50px 0px;
    width: 1350px;
    height: 350px;
    display: flex;
    flex-direction: row;
    .textbox {
      display: flex;
      flex-direction: column;
      color: #fff;
      width: fit-content;
      height: fit-content;
      .title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 50px;
      }
      .subtitle {
        font-size: 20px;
        color: #eee;
        margin-bottom: 5px;
      }
    }
    .brandbox {
      margin-left: auto;
      width: fit-content;;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      .brandtitle {
        color: #ddd;
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 50px;
      }
      .imgbox {
        width: fit-content;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        img {
          height: 40px;
          margin-bottom: 15px;
          filter: brightness(1.4);
        }
      }
    }
    .button {
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      padding: 10px 23px 10px 23px;
      border: 3px solid var(--color);
      border-radius: 8px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      position: absolute;
      bottom: 20px;
      transition: all 0.2s;
      &:hover {
        background-color: var(--color);
        color: #fff;
      }
    }
  }
`

const ProductCategory = () => {
  const navigate = useNavigate();
  const init = [
    { id: 0, name: 'Air Preparation', text: 'Filters, pressure regulators, lubricators and more air preparation components', src: 'air' },
    { id: 1, name: 'Electric Motion', text: 'Electric motion offers the perfect solution when precise control, accurate positioning, repeatabillity, or wear-free operation are essential', src: 'elec' },
    { id: 2, name: 'Fitting, Tubing & Accessories', text: 'An extensive range of fittings in many shapes, sizes and materials', src: 'filter' },
  ]
  const imgInit = ['a', 'b', 'c', 'd', 'e', 'f'];
  return (
    <PCBox>
      <div className="inner">
        <div className="headbox">
          <div className="head">Product Categories</div>
          <Dash />
        </div>
        {
          init.map((item, i) => {
            return (
              <Item>
                <img src={process.env.PUBLIC_URL + '/' + item.src + '.png'} alt="a" />
                <div className="textbox">
                  <span className="title">{item.name}</span>
                  <span className="text">{item.text}</span>
                </div>
                <div className="button" onClick={()=>{navigate('/category/임시카테고리'); window.scrollTo({top: 0, behavior: 'auto'})}}>
                  <span className="btn-text">View More</span>
                  <MdArrowRightAlt className="btn-icon" />
                </div>
              </Item>
            )
          })
        }
      </div>
      <ContactBox>
        <div className="dark">
          <div className="inner">
            <div className="textbox">
              <span className="title">유로시스템의 동반자를 찾습니다</span>
              <span className="subtitle">세계적으로 경쟁력 있는 기업으로서 도약할 파트너를 찾습니다</span>
              <span className="subtitle">열정넘치는 당신을 기다리겠습니다</span>
            </div>
            <div className="brandbox">
              <span className="brandtitle">BRNAD LIST</span>
              <div className="imgbox">
                {
                  imgInit.map((item, i) => {
                    return (
                      <img src={process.env.PUBLIC_URL + '/' + item + '.png'} alt={i} />
                    )
                  })
                }
              </div>

            </div>
            <div className="button">제휴 문의하기</div>
          </div>
        </div>
      </ContactBox>
    </PCBox>
  )
};

export default ProductCategory;