import { useState } from "react";
import { MdArrowRight, MdHome, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RootBox = styled.div`
  padding: 15px 0px 15px 0px;
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
  width: 1350px;
  height: fit-content;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
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
  width: 260px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  .title {
    background-color: rgb(245, 245, 245);
    color: #555;
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 19px;
  }

`
const SideNavItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #ddd;
  padding-left: 15px;
  &.active {
    font-weight: bold;
    color: #fff;
    background-color: var(--color);
    border: 1px solid transparent;
    &:hover {
      background-color: var(--color);
    }
  }
  &:hover {
    font-weight: bold;
    background-color: #eee;
  }
`

const Container = ({path}) => {

  let result;

  if(path === 'notice'){
    result = <div>notice</div>
  } else if(path === 'faq') {
    result = <div>faq</div>
  } else if(path === 'qna') {
    result = <div>qna</div>
  } else if(path === 'review') {
    result = <div>review</div>
  } else {
    result = 'default'
  }
  const initCount = ['공지사항', '자주묻는 질문', '상품문의', '상품후기'];

  return (
    <ContainerBox>
      {
        result === 'default'
        ? <>
            {
              initCount.map((item, i)=>{
                return (
                  <Card>
                    <div className="header">
                      <span className="header-title">{item}</span>
                      <div className="morebox">
                        <span className="more">더보기</span>
                        <MdArrowRight className="icon"/>
                      </div>
                    </div>
                    <CardItem>- 명절 배송관련 안내드립니다1</CardItem>
                    <CardItem>- 명절 배송관련 안내드립니다2</CardItem>
                    <CardItem>- 명절 배송관련 안내드립니다3</CardItem>
                    <CardItem>- 명절 배송관련 안내드립니다4</CardItem>
                    <CardItem>- 명절 배송관련 안내드립니다5</CardItem>
                  </Card>
                )
              })
            }
          </>
        : result
      }

    </ContainerBox>
  )

}

const ContainerBox = styled.div`
  width: 1050px;
  height: fit-content;
  border: 1px solid black;
`
const Card = styled.div`
  margin: 0% 0% 0% 3%;
  width: 47%;
  height: 220px;
  display: inline-flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ddd;
    margin-bottom: 10px;
    .header-title {
      color: #555;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .morebox {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #666;
    .icon {
      font-size: 18px;
    }
    &:hover {
      color: var(--color);
    }
  }
`
const CardItem = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`

const CommunityMain = (props) => {

  const path = props.path;
  const [nav, setNav] = useState('');
  const navigate = useNavigate();

  return (
    <MainBox>
      <RootBox>
        <MdHome className="icon" />
        <span className="roottext">Home</span>
        <MdOutlineKeyboardArrowRight className="icon" />
        <span className="roottext">Community</span>
        {
          path && path.length > 0
          ? <>
              <MdOutlineKeyboardArrowRight className="icon" />
              <span className="roottext">
                {path === 'notice' ? '공지사항' : null}
                {path === 'faq' ? '자주묻는 질문' : null}
                {path === 'qna' ? '상품문의' : null}
                {path === 'review' ? '상품후기' : null}
              </span>
            </>
          : null
        }
      </RootBox>
      <div className="inner">
        <SideNav>
          <div className="title">커뮤니티</div>
          <SideNavItem className={nav === '공지사항' ? 'active' : ''} onClick={()=>{ setNav('공지사항'); navigate('/community/notice'); window.scrollTo({top: 0, behavior: 'auto'}); }}>공지사항</SideNavItem>
          <SideNavItem className={nav === '자주묻는 질문' ? 'active' : ''} onClick={()=>{ setNav('자주묻는 질문'); navigate('/community/faq'); window.scrollTo({top: 0, behavior: 'auto'}); }}>자주묻는 질문</SideNavItem>
          <SideNavItem className={nav === '상품문의' ? 'active' : ''} onClick={()=>{ setNav('상품문의'); navigate('/community/qna'); window.scrollTo({top: 0, behavior: 'auto'}); }}>상품문의</SideNavItem>
          <SideNavItem className={nav === '상품후기' ? 'active' : ''} onClick={()=>{ setNav('상품후기'); navigate('/community/review'); window.scrollTo({top: 0, behavior: 'auto'}); }}>상품후기</SideNavItem>
        </SideNav>
        <Container path={path}/>
      </div>
    </MainBox>
  )
};

export default CommunityMain;