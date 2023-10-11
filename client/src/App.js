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
      </Routes>
    </div>
  );
}

export default App;
