import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/globalstyle";
import { useEffect } from "react";
import Admin from "./components/admin/admin.js";
import Home from "./components/home/home.js";
import ProductHome from "./components/product/producthome.js";
import Top from "./components/top";
import CompanyHome from "./components/company/companyhome";
import CategoryHome from "./components/category/categoryhome";
import DetailHome from "./components/detail/detailhome";
import CommunityHome from "./components/community/communityhome";
import MemberHome from "./components/member/memberhome";
import MyPageHome from "./components/mypage/mypagehome";
import InquiryHome from "./components/inquiry/inquiryhome.js";

function App() {
  const setScreenSize = () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(()=>{
    setScreenSize();
  });
  // calc(var(--vh, 1vh) * 100);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><GlobalStyle/><Home/><Top/></>}/>
        <Route path="/category/:category" element={<><GlobalStyle/><CategoryHome/><Top/></>}/>
        <Route path="/category/:category/:subCategory" element={<><GlobalStyle/><CategoryHome/><Top/></>}/>
        <Route path="/company" element={<><GlobalStyle/><CompanyHome/><Top/></>}/>
        <Route path="/product" element={<><GlobalStyle/><ProductHome/><Top/></>}/>
        <Route path="/admintest" element={<><GlobalStyle/><Admin/></>}/>
        <Route path="/detail" element={<><GlobalStyle/><DetailHome/><Top/></>}/>
        <Route path="/inquiry" element={<><GlobalStyle/><InquiryHome/></>}/>
        <Route path="/inquiry/:path" element={<><GlobalStyle/><InquiryHome/></>}/>
        <Route path="/community/notice/:noticeNum" element={<><GlobalStyle/><CommunityHome/><Top/></>}/>
        <Route path="/community/:path" element={<><GlobalStyle/><CommunityHome/><Top/></>}/>
        <Route path="/member/:path" element={<><GlobalStyle/><MemberHome/><Top/></>}/>
        <Route path="/member/:path/:whatfind" element={<><GlobalStyle/><MemberHome/><Top/></>}/>
        <Route path="/mypage" element={<><GlobalStyle/><MyPageHome/><Top/></>}/>
      </Routes>
    </div>
  );
}

export default App;



// 메인
// - 상단 회원가입, 로그인
// - 사이드바 및 1100px 조절
// - 푸터 배치 조절해야함

// 검색페이지


// 회사소개
// - 회사소개
// - 찾아오시는길

// 제품소개

// 커뮤니티
// - 커뮤니티 메인
// - 공지사항
// - 자주하는 질문
// - 1:1 문의

// 카테고리
// - 대분류 메인
// - 소분류 메인

// 디테일
// - 상품 상단 
// - 상세 중단
// - 후기 하단1
// - 문의 하단2

// 장바구니페이지

// 로그인
// - 회원 로그인 페이지

// 회원가입
// - 가입페이지, 네이버 or 카카오 필?

// 어드민 로그인
// - 어드민 로그인 페이지

// 어드민 메인
// - 배송 결제 등 정보화면

// 어드민 상품관리
// 어드민 커뮤니티관리
// 어드민 회원관리
// 어드민 메인페이지 설정
// 어드민 문의내역 관리



