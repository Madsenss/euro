import { MdAddShoppingCart, MdEast, MdFavoriteBorder, MdStar, MdStarHalf, MdWest } from "react-icons/md";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
const ProductBox = styled.div`
  width: 1350px;
  height: fit-content;
`

const TitleBox = styled.div`
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    position: absolute;
    left: 0;
    font-size: 24px;
    font-weight: bold;
  }
  .menu {
    z-index: 999;
    background-color: #fff;
    width: fit-content;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 3px solid var(--color);
    border-radius: 20px;
    padding: 0px 15px 0px 15px;
    .menu-item {
      width: 120px;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-weight: bold;
      color: #555;
      &:hover {
        color: black;
      }
    }
  }
`
const SlideButtonBox = styled.div`
  z-index: 999;
  background-color: #fff;
  position: absolute;
  right: 0;
  width: fit-content;
  height: 35px;
  border: 3px solid var(--color);
  border-radius: 20px;
  padding: 0px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    cursor: pointer;
    font-size: 24px;
    &:hover {
      color: var(--color);
    }
  }
`

const Dash = styled.div`
  width: 1.5px;
  height: 20px;
  background-color: #ddd;
  margin: 0px 10px 0px 10px;
`
const LongDash = styled(Dash)`
  background-color: var(--color);
  z-index: 1;
  width: 90%;
  height: 3px;
  margin: 0px;
  position: absolute;
  right: 0px;
`
const StyledSlider = styled(Slider)`
  width: 100%;
  height: fit-content;
  .inner {
    padding: 20px 0px 20px 0px;
    display: flex !important;
    justify-content: space-between;
  }
`;

const Item = styled.div`
  cursor: pointer;
  position: relative;
  width: 250px;
  height: 330px;
  padding: 10px;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.2);
  border: 1px solid transparent;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .img {
    width: 230px;
    height: 230px;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }
  .title {
    width: 100%;
    height: 35px;
    color: #555;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    font-size: 18px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-weight: bold;
    color: var(--color);
  }
  .star {
    position: absolute;
    bottom: 10px;
    right: 8px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .star-icon {
      color: rgb(255, 165, 0);
      font-size: 18px;
    }
    .review {
      font-size: 14px;
      color: #666;
    }
  }
  .iconbox {
    position: absolute;
    top: 10px;
    width: 230px;
    height: 230px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    .hide-icon {
      color: #eee;
      transition: all 0.25s;
      transform: translateX(50px);
      font-size: 24px;
      padding: 8px 10px 8px 0px;
      &:hover {
        color: var(--color);
      }
    }
    &.active {
      background-color: rgb(0, 0, 0, 0.3);
      .hide-icon {
        transform: translateX(0px);
      }
    }
  }
  &:hover {
    border: 1px solid #ddd;
  }
`

const HomeProduct = () => {

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const prevButton = () => {
    sliderRef.current.slickPrev();
  }
  const nextButton = () => {
    sliderRef.current.slickNext();
  }

  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 또는 다른 길이의 배열
  const boxSize = 5; // 4개씩 나누도록 설정
  const boxes = [];
  let currentIndex = 0;
  while (currentIndex < a.length) {
    const boxData = a.slice(currentIndex, currentIndex + boxSize);
    boxes.push(boxData);
    currentIndex += boxSize;
  }
  const [hoverActive, setHoverActive] = useState(false);
  return (
    <ProductBox>
      <TitleBox>
        <span className="title">BEST ITEM</span>
        <LongDash />
        <div className="menu">
          <span className="menu-item">1번 카테고리</span>
          <Dash />
          <span className="menu-item">2번 카테고리</span>
          <Dash />
          <span className="menu-item">3번 카테고리</span>
        </div>
        <SlideButtonBox>
          <MdWest className="icon" onClick={() => { prevButton() }} />
          <Dash />
          <MdEast className="icon" onClick={() => { nextButton() }} />
        </SlideButtonBox>
      </TitleBox>
      <StyledSlider {...settings} ref={sliderRef}>
        {
          boxes.map((boxData, i) => (
            <div className="inner" key={i}>
              {boxData.map((item, j) => (
                <Item key={j} onMouseOver={()=>{setHoverActive(true);}} onMouseLeave={()=>{setHoverActive(false);}}>
                  <div className="img">
                    <img src={process.env.PUBLIC_URL + '/inititem.png'} alt="item"/>
                  </div>
                  <div className="title">쎄니타리 레듀샤2페럴(MK)</div>
                  <span className="price">12,345원</span>
                  <div className="star">
                    <MdStar className="star-icon"/>
                    <MdStar className="star-icon"/>
                    <MdStar className="star-icon"/>
                    <MdStar className="star-icon"/>
                    <MdStarHalf className="star-icon half"/>
                    <span className="review">(42)</span>
                  </div>
                  <div className={'iconbox ' + `${hoverActive ? 'active' : ''}`}>
                    <MdFavoriteBorder className="hide-icon"/>
                    <MdAddShoppingCart className="hide-icon"/>
                  </div>
                </Item>
              ))}
            </div>
          ))
        }
      </StyledSlider>
    </ProductBox>
  )
};

export default HomeProduct;