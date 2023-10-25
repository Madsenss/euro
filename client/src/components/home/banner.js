import styled, { css, keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";


const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    afterChange: (current) => {
      setCurrentSlide(current);
    }
  };

  useEffect(() => {
    setAnimate(true);
    const animationDuration = 5000;

    const timer = setTimeout(() => {
      setAnimate(false);
      sliderRef.current.slickNext();
    }, animationDuration);

    return () => {
      clearTimeout(timer);
    };

  }, [currentSlide]);


  return (
    <StyledSlider {...settings}  ref={sliderRef} animate={animate}>
      <SliderItem>
        <img className="banner" src={process.env.PUBLIC_URL + '/banner.png'} alt="banner" />
        <div className="textbox">
          <span className="top">HP Racer Skutex</span>
          <div className="midbox">
            <span className="midtext">Feel The Greatest Oil</span>
            <span className="midtext">Power With Best</span>
            <span className="midtext">One Oil</span>
          </div>
          <div className="button">SHOPPING NOW</div>
        </div>
      </SliderItem>
      <SliderItem>
        <img className="banner" src={process.env.PUBLIC_URL + '/banner2.png'} alt="banner" />
        <div className="textbox">
          <span className="top">Special Offer</span>
          <div className="midbox">
            <span className="midtext">Get &250 In Total</span>
            <span className="midtext">Discount On A New</span>
            <span className="midtext">Set Of Tries</span>
          </div>
          <div className="button">SHOPPING NOW</div>
        </div>
      </SliderItem>
      <SliderItem>
        <img className="banner" src={process.env.PUBLIC_URL + '/banner3.png'} alt="banner" />
        <div className="textbox">
          <span className="top">Over 15,000</span>
          <div className="midbox">
            <span className="midtext">Remanufactured Low</span>
            <span className="midtext">Milage Used Engines</span>
            <span className="midtext">For Sale</span>
          </div>
          <div className="button">SHOPPING NOW</div>
        </div>
      </SliderItem>
    </StyledSlider>
  )

};

export default Banner;
const fadeIn = keyframes`
  0% { opacity: 0; }
  20% { opacity: 0; }
  100% { opacity: 1; }
`;
const StyledSlider = styled(Slider)`
  width: 100%;
  height: fit-content;

  .top {
    font-size: 24px;
    transition: transform 0.3s;
    transform: translateX(${(props) => (props.animate ? '0%' : '-100%')});
    visibility: ${(props) => (props.animate ? 'visible' : 'hidden')};
    animation: ${(props) => (props.animate ? css`${fadeIn} 0.9s` : "none")};
  }
  .midbox {
    transition: transform 0.5s;
    transform: translateX(${(props) => (props.animate ? '0%' : '-100%')});
    visibility: ${(props) => (props.animate ? 'visible' : 'hidden')};
    animation: ${(props) => (props.animate ? css`${fadeIn} 1.6s` : "none")};
    margin: 10px 0px 30px 0px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    .midtext {
      font-size: 40px;
      font-weight: bold;
    }
  }
  .button {
    transition: transform 0.7s;
    transform: translateX(${(props) => (props.animate ? '0%' : '-100%')});
    visibility: ${(props) => (props.animate ? 'visible' : 'hidden')};
    animation: ${(props) => (props.animate ? css`${fadeIn} 2.3s` : "none")};
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    background-color: var(--color);
    color: #fff;
    padding: 13px 15px 13px 15px;
    border-radius: 4px;
    box-shadow: 0px 1px 7px 1px rgb(0, 0, 0, 0.3);
    &:hover {
      opacity: 0.7;
    }
  }
  .banner {
    transition: all 0.9s;
    opacity: ${(props) => (props.animate ? '1' : '0')};
  }
  .slick-prev {
    z-index: 1;
    left: 30px;
  }
  .slick-next {
    right: 40px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: black;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 20px;
    color: black;

    li button:before {
      color: black;
    }

    li.slick-active button:before {
      color: var(--color);
    }
  }
`;

const SliderItem = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    position: absolute;
    width: 100%;
  }
  .textbox {
    overflow: hidden;
    width: 1110px;
    padding-left: 5px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`;