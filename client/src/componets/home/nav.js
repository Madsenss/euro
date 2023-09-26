import { useEffect, useState } from "react";
import { MdDehaze, MdOutlineFavoriteBorder, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBox = styled.div`
  /* background-color: #fff;
  z-index: 999;
  position: fixed;
  top: 0; */
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
    width: 220px;
    cursor: pointer;
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
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: start;
  input {
    width: 100%;
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
    width: 70px;
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
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .item {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: end;
    &.mr {
      margin-right: 20px;
    }
    .text {
      font-size: 12px;
      font-weight: bold;
    }
  }
  .badge {
    position: absolute;
    top: 0;
    left: 38px;
    background-color: var(--color);
    color: #fff;
    border-radius: 50%;
    padding: 3px;
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
  .icon {
    font-size: 34px;
  }
`


const CategoryBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: 1.5px solid #ddd;
  border-bottom: 1.5px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    width: 1350px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    position: relative;
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
const CategoryButton = styled.div`
  z-index: 999;
  cursor: pointer;
  width: 260px;
  height: 60px;
  padding: 0px 15px 0px 15px;
  background-color: var(--color);
  display: flex;
  justify-content: space-between;
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
    font-weight: bold;
    margin-right: 20px;
  }
  .a {
    transition: 0.3s;
    transform: rotate(180deg);
  }
  .b {
    transition: 0.3s;
    transform: rotate(0deg);
  }
`
const NavMenu = styled.div`
  cursor: pointer;
  width: fit-content;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-left: 60px;
  color: #666;
  &:hover {
    color: var(--color);
  }
`
const CategoryMenu = styled.div`
  z-index: 998;
  position: absolute;
  top: 60px;
  left: 0;
  width: 260px;
  border: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  transition: 0.5s;
  &.a {
    height: ${props => props.height};
    visibility: visible;
    opacity: 1;
  }
  &.b {
    height: 0px;
    visibility: hidden;
    opacity: 0;
  }
`
const MenuItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 45px;
  padding: 0px 15px 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background-color: #eee;
    font-weight: bold;
  }
  .itemtext {
    font-size: 13px;
  }
  .right {
    font-size: 16px;
  }
`
const SubMenu = styled.div`
  z-index: 999;
  top: ${props => props.top};
  left: 259.5px;
  position: absolute;
  width: fit-content;
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0.5px rgb(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .text {
    margin-bottom: 80px;
    .item {
      padding: 10px 10px 10px 15px;
      color: #666;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 45px;
      font-size: 14px;
      &:hover {
        color: black;
        font-weight: bold;
        background-color: #eee;
      }
    }
  }
  .img {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
    }
  }
  transition: opacity 0.3s, transform 0.3s, visibility 0.1s;
  &.a {
    transform: translateX(0px);
    visibility: visible;
    opacity: 1;
  }
  &.b {
    transform: translateX(50px);
    visibility: hidden;
    opacity: 0;
  }
`
const Nav = () => {

  const initData = [
    {
      id: 0,
      category: 'Category-A',
      subcategory: [
        { category: 'Category-A', subname: 'A-SubCategory-1', src: '나사.png' },
        { category: 'Category-A', subname: 'A-SubCategory-2', src: '너트.png' },
        { category: 'Category-A', subname: 'A-SubCategory-3', src: '스크류.png' },
        { category: 'Category-A', subname: 'A-SubCategory-4', src: '압정.png' },
      ]
    },
    {
      id: 1,
      category: 'Category-B',
      subcategory: [
        { category: 'Category-B', subname: 'B-SubCategory-1', src: '펀치.png' },
        { category: 'Category-B', subname: 'B-SubCategory-2', src: '가이드.png' },
        { category: 'Category-B', subname: 'B-SubCategory-3', src: '소형.png' },
        { category: 'Category-B', subname: 'B-SubCategory-4', src: '압력원.png' },
      ]
    },
  ];

  const [dropdown, setDropdown] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [category, setCategory] = useState({ id: 0, category: '' });
  const [subCategory, setSubCategory] = useState(initData[0]?.subcategory[0]?.subname);
  const navigate = useNavigate();

  const menuHeight = () => {
    let result = 0;
    result = initData.length * 45;
    result += 'px';
    return result;
  };

  const topResult = () => {
    if (category.id === 0) {
      return 60.5 + 'px';
    } else {
      return 60.5 + (category.id) * 45 + 'px';
    }
  };

  return (
    <NavBox>
      <TopBox>
        <img onClick={() => { navigate('/') }} className="logo" src={process.env.PUBLIC_URL + '/logo2.png'} alt="logo" />
        <SearchBox>
          <input type="text" placeholder="Search entire store here ..." />
          <div className="button">
            <MdSearch />
          </div>
        </SearchBox>
        <CartBox>
          <div className="item mr">
            <MdOutlineFavoriteBorder className="icon" />
            <span className="badge">3</span>
            <span className="text">Wish List</span>
          </div>
          <div className="item">
            <MdOutlineShoppingCart className="icon" />
            <span className="badge">21</span>
            <span className="text">My Cart</span>
          </div>
        </CartBox>
      </TopBox>
      <CategoryBox>
        <div className="inner">
          <CategoryButton onClick={() => { setDropdown(!dropdown); }}>
            <MdDehaze className="icon" />
            <span className="text">전체상품 카테고리</span>
            <MdOutlineKeyboardArrowDown className={'d ' + `${dropdown ? 'a' : 'b'}`} />
          </CategoryButton>
          <NavMenu onClick={() => { navigate('/company') }}>회사소개</NavMenu>
          <NavMenu onClick={() => { navigate('/product') }}>제품소개</NavMenu>
          <NavMenu>뉴스센터</NavMenu>
          <NavMenu>고객센터</NavMenu>
          <NavMenu>상품후기</NavMenu>
          <CategoryMenu height={menuHeight()} className={dropdown ? "a" : 'b'}>
            {
              initData.map((item, i) => {
                return (
                  <MenuItem
                    key={i}
                    onMouseOver={() => {
                      setCategory({ id: item.id, category: item.category });
                      setSubMenu(true);
                      setSubCategory(initData[i]?.subcategory[0]?.subname);
                    }}
                    onMouseLeave={() => {
                      setSubMenu(false);
                    }}
                    onClick={() => {
                      navigate('/category/' + item.category);
                      setSubMenu(false);
                      setDropdown(false);
                    }}
                  >
                    <span className="itemtext">{item.category}</span>
                    <MdOutlineKeyboardArrowRight className="right" />
                  </MenuItem>
                )
              })
            }
          </CategoryMenu>
          <SubMenu className={subMenu ? 'a' : 'b'} top={topResult()} onMouseOver={() => { setSubMenu(true); }} onMouseLeave={() => { setSubMenu(false); }}>
            <div className="text">
              {
                initData.map((item, i) => {
                  return item.subcategory.map((item2, j) => {
                    if (item2.category === category.category) {
                      return <div className="item"
                        key={j}
                        onMouseOver={() => { setSubCategory(item2.subname); }}
                        onClick={() => {
                          navigate('/category/' + item.category + '/' + item2.subname);
                          setSubMenu(false);
                          setDropdown(false);
                        }}
                      >
                        <span className="subname">{item2.subname}</span>
                        <MdOutlineKeyboardArrowRight className="right" />
                      </div>
                    }
                    return null;
                  })
                })
              }
            </div>
            <div className="img">
              {
                initData.map((item, i) => {
                  return item.subcategory.map((item2, j) => {
                    if (item2.subname === subCategory) {
                      return <img key={j} src={process.env.PUBLIC_URL + '/' + item2.src} alt={item2.subname} />
                    }
                    return null;
                  })
                })
              }
            </div>
          </SubMenu>
        </div>
      </CategoryBox>
    </NavBox>
  )
};

export default Nav;