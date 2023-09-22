import { useState } from "react";
import { MdGridView, MdHome, MdKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdViewList, MdViewModule } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CCBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  .inner {
    position: relative;
    padding-top: 50px;
    margin-bottom: 30px;
    width: 1350px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const RootBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 15px;
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

const SideNav = styled.div`
  width: 260px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  padding: 15px;
  .navtitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`
const SideNavItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;
  margin-bottom: 20px;
  color: #666;
  .right {
    font-size: 16px;
  }
  .itemtext {
    font-size: 14px;
  }
  transition: all 0.25s;
  &:hover {
    .itemtext {
      color: var(--color);
    }
  }
`

const ProductBox = styled.div`
  width: 1050px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

const ProductTitleBox = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #555;
  .product-title {
    font-size: 26px;
    font-weight: bold;
  }
  .edge {
    color: var(--color);
  }
`
const SortBox = styled.div`
  position: relative;
  margin: 20px 0px 30px 0px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .iconbox {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    .icon {
      font-size: 30px;
      margin-left: 5px;
      cursor: pointer;
      color: #aaa;
      &:hover {
        color: #666;
      }
    }
    .active {
      color: var(--color);
      &:hover {
        color: var(--color);
      }
    }
  }
`
const SortDropdownBox = styled.div`
  cursor: pointer;
  width: 150px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  padding: 0px 10px 0px 10px;
  font-size: 14px;
  .down {
    font-size: 16px;
    transition: all 0.2s;
    &.active {
      transform: rotate(180deg);
    }
  }
`
const SortMenu = styled.div`
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 40px;
  width: 150px;
  height: 140px;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: all 0.1s;
  &.show {
    height: 140px;
    visibility: visible;
    opacity: 1;
  }
  &.hide {
    height: 0px;
    visibility: hidden;
    opacity: 0;
  }
  .item {
    cursor: pointer;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    font-size: 14px;
    padding-left: 10px;
    &:hover {
      background-color: #eee;
    }
  }
`

const GridBox = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`
const GridItem = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
`
const CategoryContainer = ({ category, subCategory }) => {

  const navigate = useNavigate();
  const [grid, setGrid] = useState('grid');
  const [sortActive, setSortActive] = useState(false);
  const [sort, setSort] = useState('인기순');
  const initData = [
    {
      id: 0,
      category: 'A-Category',
      subcategory: [
        { category: 'A-Category', subname: 'A-SubCategory-1', src: '나사.png' },
        { category: 'A-Category', subname: 'A-SubCategory-2', src: '너트.png' },
        { category: 'A-Category', subname: 'A-SubCategory-3', src: '스크류.png' },
        { category: 'A-Category', subname: 'A-SubCategory-4', src: '압정.png' },
      ]
    },
    {
      id: 1,
      category: 'B-Category',
      subcategory: [
        { category: 'B-Category', subname: 'B-Subcategory-1', src: '펀치.png' },
        { category: 'B-Category', subname: 'B-Subcategory-2', src: '가이드.png' },
        { category: 'B-Category', subname: 'B-Subcategory-3', src: '소형.png' },
        { category: 'B-Category', subname: 'B-Subcategory-4', src: '압력원.png' },
      ]
    },
  ];
  const initCount = [1,1,1,1,1,1,1,1,1,1]
  return (
    <CCBox>
      <div className="inner">
        <RootBox>
          <MdHome className="icon"/>
          <span className="roottext">Home</span>
          <MdOutlineKeyboardArrowRight className="icon"/>
          <span className="roottext">{category}</span>
          {
            subCategory&&subCategory.length > 0
            ? <>
                <MdOutlineKeyboardArrowRight className="icon"/>
                <span className="roottext">{subCategory}</span>
              </>
              
            : null
          }
        </RootBox>
        <SideNav>
          <span className="navtitle">{category}</span>
          {
            initData.map((item, i)=>{
              if(item.category === category) {
                return (
                  item.subcategory.map((item2, j)=>{
                    return (
                      <SideNavItem key={j} onClick={()=>{navigate('/category/' + item.category + '/' + item2.subname)}}>
                        <span className="itemtext">{item2.subname}</span>
                        <MdOutlineKeyboardArrowRight className="right"/>
                      </SideNavItem>
                    )
                  })
                )
              }
              return null;
            })
              
          }
        </SideNav>
        <ProductBox>
          <ProductTitleBox>
            <span className="product-title">
              {
                subCategory&&subCategory.length > 0
                ? subCategory
                : category + ' 전체상품'
              }
            </span>
            <span className="count"><span className="edge">12,345</span>개의 상품</span>
          </ProductTitleBox>

          <SortBox>
            <SortDropdownBox onClick={()=>{setSortActive(!sortActive)}}>
              <span>{sort}</span>
              <MdKeyboardArrowDown className={'down ' + `${sortActive ? 'active' : ''}`}/>
            </SortDropdownBox>
            <SortMenu className={sortActive ? 'show' : 'hide'}>
              <div className="item" onClick={()=>{setSort('인기순'); setSortActive(false)}}>인기순</div>
              <div className="item" onClick={()=>{setSort('가격낮은순'); setSortActive(false)}}>가격낮은순</div>
              <div className="item" onClick={()=>{setSort('가격높은순'); setSortActive(false)}}>가격높은순</div>
              <div className="item" onClick={()=>{setSort('최신등록순'); setSortActive(false)}}>최신등록순</div>
            </SortMenu>
            <div className="iconbox">
              <MdViewModule onClick={()=>{setGrid('grid')}} className={'icon ' + `${grid === 'grid' ? 'active' : ''}`}/>
              <MdViewList onClick={()=>{setGrid('list')}} className={'icon ' + `${grid === 'list' ? 'active' : ''}`}/>
            </div>
          </SortBox>
          <GridBox>
            {
              initCount.map((item, i)=>{
                return (
                  <GridItem key={i}>
                    {i}번상품
                  </GridItem>
                )
              })
            }
          </GridBox>
        </ProductBox>
      </div>
    </CCBox>
  )
};

export default CategoryContainer;