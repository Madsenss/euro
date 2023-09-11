import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./componets/globalstyle";
import { useEffect } from "react";
import Admin from "./componets/admin/admin.js";

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
        <Route path="/admin" element={<><GlobalStyle/><Admin/></>}/>
        <Route path="/admin2" element={<><GlobalStyle/><Admin/></>}/>
      </Routes>
    </div>
  );
}

export default App;
