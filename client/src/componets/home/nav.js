import { MdDehaze, MdOutlineKeyboardArrowDown, MdSearch } from "react-icons/md";
import styled from "styled-components";

const NavBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TopBox = styled.div`
  width: 1350px;
  height: fit-content;
  padding: 20px 0px 20px 0px;
  .logo {
    width: 230px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const SearchBox = styled.div`
  width: 550px;
  height: 45px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: start;
  input {
    width: 284px;
    height: 100%;
    background-color: transparent;
    border: none;
    padding-left: 15px;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
  .button {
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 100%;
    background-color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: #eee;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }
`
const CartBox = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
`

const CategoryBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: 1.5px solid #eee;
  border-bottom: 1.5px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    width: 1350px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  .box {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    font-size: 14px;
    font-weight: bolder;
    .d {
      font-size: 16px;
    }
  }
`
const T = styled.div`
  width: fit-content;
  padding: 0px 20px 0px 20px;
  height: 60px;
  background-color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .icon {
    font-size: 30px;
  }
  .d {
    color: #ddd;
    font-size: 20px;
  }
  .text {
    margin: 0px 30px 0px 10px;
    font-weight: bold;
  }
`
const Nav = () => {
  return (
    <NavBox>
      <TopBox>
        <img className="logo" src={process.env.PUBLIC_URL + '/logo2.png'} alt="logo"/>
        <SearchBox>
          <input type="text" placeholder="Search entire store here ..."/>
          <div className="button">
            <MdSearch/>
          </div>
        </SearchBox>
        <CartBox>1</CartBox>
      </TopBox>
      <CategoryBox>
        <div className="inner">
          <T>
            <MdDehaze className="icon"/>
            <span className="text">Browse Categoryies</span>
            <MdOutlineKeyboardArrowDown className="icon d"/>
          </T>
          <div className="box">HOME<MdOutlineKeyboardArrowDown className="icon d"/></div>
          <div className="box">SHOP<MdOutlineKeyboardArrowDown className="icon d"/></div>
          <div className="box">BLOG<MdOutlineKeyboardArrowDown className="icon d"/></div>
          <div className="box">PAGES<MdOutlineKeyboardArrowDown className="icon d"/></div>
          <div className="box">ABOUT US<MdOutlineKeyboardArrowDown className="icon d"/></div>
          <div className="box">CONTACT US<MdOutlineKeyboardArrowDown className="icon d"/></div>
        </div>
      </CategoryBox>
    </NavBox>
  )
};

export default Nav;