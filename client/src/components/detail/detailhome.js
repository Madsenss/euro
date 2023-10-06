import styled from "styled-components";
import { useRef } from "react";
import Nav from "../home/nav";
import Footer from "../home/footer";
import DetailTop from "./detailtop";
import DetailImg from "./detailimg";
import DetailReview from "./detailreview";

const DetailBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DetailNavBox = styled.div`
  width: 1350px;
  height: 50px;
  border: 1px solid black;
  background-color: #aaa;
`

const DetailHome = () => {

  const imgSectionRef = useRef(null);
  const reviewSectionRef = useRef(null);


  const scrollToImgSection = () => {
    imgSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReviewSection = () => {
    reviewSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <DetailBox>
      <Nav/>
      <DetailTop/>

      <DetailNavBox>
        <button onClick={scrollToImgSection}>Go IMG</button>
        <button onClick={scrollToReviewSection}>Go Review</button>
      </DetailNavBox>

      <div ref={imgSectionRef}>
        <DetailImg/>
      </div>

      <div ref={reviewSectionRef}>
        <DetailReview/>
      </div>

      <Footer/>
    </DetailBox>
  )
};

export default DetailHome;