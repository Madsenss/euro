import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Nav from "../home/nav";
import Footer from "../home/footer";
import DetailTop from "./detailtop";
import DetailImg from "./detailimg";
import DetailShipping from "./detailshipping";
import DetailQNA from "./detailqna";
import DetailReview from "./detailreview";

const DetailBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DetailNavBox = styled.div`
  z-index: 1000;
  margin: 30px 0px 30px 0px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .menu {
    cursor: pointer;
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    background-color: rgb(245, 245, 245, 0.8);
    font-weight: bold;
    color: #555;
    &.active {
      background-color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
  &.a {
    position: fixed;
    top: 0;
    margin: 0;
    left: 50%; /* 가운데 정렬을 위한 50% 위치 설정 */
    transform: translateX(-50%); /* 가운데 정렬 */
  }
  &.b {
    position: relative;
  }
`

const DetailHome = () => {
  const navRef = useRef(null);
  const imgRef = useRef(null);
  const reviewRef = useRef(null);
  const qnaRef = useRef(null);
  const shippingRef = useRef(null);

  const [menuActive, setMenuActive] = useState('a');
  
  const [fix, setFix] = useState(false);
  const scrollToImg = () => {
    imgRef.current?.scrollIntoView({ behavior: 'auto'});
  }
  const scrollToReview = () => {
    reviewRef.current?.scrollIntoView({ behavior: 'auto'});
  }
  const scrollToQNA = () => {
    qnaRef.current?.scrollIntoView({ behavior: 'auto'});
  }
  const scrollToShipping = () => {
    shippingRef.current?.scrollIntoView({ behavior: 'auto'});
  }

  useEffect(() => {
    const handleScroll = () => {
      const navTop = navRef.current?.getBoundingClientRect().top;
      const imgTop = imgRef.current?.getBoundingClientRect().top;
      const reviewTop = reviewRef.current?.getBoundingClientRect().top;
      const qnaTop = qnaRef.current?.getBoundingClientRect().top;
      const shippingTop = shippingRef.current?.getBoundingClientRect().top;
  
      if (navTop <= 0) {
        setFix(true);
      } else {
        setFix(false);
      }

      if (imgTop <= 1) {
        setMenuActive('a');
      }
      if (reviewTop <= 1) {
        setMenuActive('b');
      }
      if (qnaTop <= 1) {
        setMenuActive('c');
      }
      if (shippingTop <= 1) {
        setMenuActive('d');
      }

    };
    
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DetailBox>
      <Nav/>
      <DetailTop/>

      <div className="a" ref={navRef}>
        <DetailNavBox className={fix ? 'a' : 'b'}>
          <div onClick={()=>{setMenuActive('a'); scrollToImg();}} className={'menu ' + `${menuActive === 'a' ? 'active' : ''}`}>상세정보</div>
          <div onClick={()=>{setMenuActive('b'); scrollToReview(); }} className={'menu ' + `${menuActive === 'b' ? 'active' : ''}`}>상품후기(1,213)</div>
          <div onClick={()=>{setMenuActive('c'); scrollToQNA(); }} className={'menu ' + `${menuActive === 'c' ? 'active' : ''}`}>상품문의</div>
          <div onClick={()=>{setMenuActive('d'); scrollToShipping();}} className={'menu ' + `${menuActive === 'd' ? 'active' : ''}`}>배송/교환/반품 안내</div>
        </DetailNavBox>
      </div>
      <div className="b" ref={imgRef}>
        <DetailImg/>
      </div>
      <div className="c" ref={reviewRef}>
        <DetailReview/>
      </div>
      <div className="d" ref={qnaRef}>
        <DetailQNA/>
      </div>
      <div className="e" ref={shippingRef}>
        <DetailShipping/>
      </div>

      <Footer/>
    </DetailBox>
  )
};

export default DetailHome;