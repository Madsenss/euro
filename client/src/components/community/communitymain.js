import { useEffect, useState } from "react";
import { MdHome, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "./container";
import NoticeDetail from "./notice/noticedetail";

const RootBox = styled.div`
  padding: 15px 0px 50px 0px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  .icon {
    font-size: 18px;
    margin-right: 3px;
    color: var(--color);
  }
  .roottext {
    font-size: 14px;
    font-weight: bold;
    color: #555;
  }
`
const MainBox = styled.div`
  width: 1100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  .inner {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }
`
const SideNav = styled.div`
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .title {
    color: #555;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    margin: 0px 0px 20px 0px;
  }
  .outer {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  }
`
const SideNavItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;
  .icon {
    font-size: 20px;
  }
  &.active {
    font-weight: bold;
    color: var(--color);
    background-color: rgb(243, 243, 243);
    border: 1px solid transparent;
    &:hover {
      background-color: rgb(243, 243, 243);
    }
  }
  &:hover {
    font-weight: bold;
    color: var(--color);
    background-color: rgb(243, 243, 243);
  }
`

const CommunityMain = ({ path, noticeNum }) => {
  const [nav, setNav] = useState('');
  const navigate = useNavigate();
  const roots = {
    notice: '공지사항',
    faq: '자주묻는 질문',
    qna: '1:1문의',
    estimate: '견적/제휴 문의'
  };
  const selectedRoot = noticeNum ? '공지사항' : roots[path] || '';

  useEffect(() => {
    setNav(path && path);
  }, [path && path]);

  return (
    <MainBox>
      <RootBox>
        <MdHome className="icon" />
        <span className="roottext">Home</span>
        <MdOutlineKeyboardArrowRight className="icon" />
        <span className="roottext">커뮤니티</span>
        <MdOutlineKeyboardArrowRight className="icon" />
        <span className="roottext">{selectedRoot}</span>
      </RootBox>
      <div className="inner">
        {
          typeof noticeNum == 'undefined' && noticeNum == null
            ? <>
              <SideNav>
                <div className="title">커뮤니티</div>
                <div className="outer">
                  <SideNavItem className={nav === 'notice' ? 'active' : ''} onClick={() => { setNav('notice'); navigate('/community/notice'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
                    <span>공지사항</span>
                    <MdOutlineKeyboardArrowRight className="icon" />
                  </SideNavItem>
                  <SideNavItem className={nav === 'faq' ? 'active' : ''} onClick={() => { setNav('faq'); navigate('/community/faq'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
                    <span>자주묻는 질문</span>
                    <MdOutlineKeyboardArrowRight className="icon" />
                  </SideNavItem>
                  <SideNavItem className={nav === 'qna' ? 'active' : ''} onClick={() => { setNav('qna'); navigate('/community/qna'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
                    <span>1:1 문의</span>
                    <MdOutlineKeyboardArrowRight className="icon" />
                  </SideNavItem>
                  <SideNavItem className={nav === 'estimate' ? 'active' : ''} onClick={() => { setNav('estimate'); navigate('/community/estimate'); window.scrollTo({ top: 0, behavior: 'auto' }); }}>
                    <span>견적/제휴 문의</span>
                    <MdOutlineKeyboardArrowRight className="icon" />
                  </SideNavItem>
                </div>

              </SideNav>
              <Container path={path}/>
            </>
            : <NoticeDetail noticeNum={noticeNum}/>
        }
      </div>
    </MainBox>
  )
};


export default CommunityMain;