import { useEffect, useState } from "react";
import { MdFavoriteBorder, MdHome, MdKeyboardArrowDown, MdOutlineAddShoppingCart, MdOutlineKeyboardArrowRight, MdViewList, MdViewModule } from "react-icons/md";
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
  z-index: 999;
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
  gap: 15px;
  &.grid {
    grid-template-columns: repeat(3, 1fr);
  }
  &.list {
    grid-template-columns: repeat(1, 1fr);
  }
`
const GridItem = styled.div`
  overflow: hidden;
  color: #555;
  position: relative;
  padding: 15px;
  cursor: pointer;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  border: 1.5px solid transparent;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
  &:hover {
    border: 1.5px solid var(--color);
  }
  .title {
    font-size: 16px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .price {
    font-size: 16px;
    position: absolute;
    bottom: 15px;
    left: 15px;
    font-weight: bold;
    color: var(--color);
  }
  .iconbox {
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .icon {
      font-size: 24px;
      margin-left: 10px;
      transition: all 0.2s;
      &:hover {
        color: var(--color);
      }
    }
  }
`
const InfoButton = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 12px;
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #555;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    border: 2px solid var(--color);
  }
`

const InfoBox = styled.div`
  top: 0;
  left: 0;
  padding: 15px;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.95);
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  .info-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    margin-bottom: 5px;
    .info-title {
      font-weight: bold;
    }
  }
  &.show {
    transform: translateY(0%);
  }
  &.hide {
    transform: translateY(-100%);
  }
`

const ListItem = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  color: #555;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: start;
  box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0, 0.2);
  border: 1.5px solid transparent;
  img {
    width: 250px;
    height: 250px;
    margin-right: 15px;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    border: 1.5px solid var(--color);
  }
  .title {
    font-weight: bold;
    font-size: 16px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 20px;
  }
  .price {
    font-size: 16px;
    font-weight: bold;
    color: var(--color);
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
  .infobox {
    color: #666;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    .info-inner {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 5px;
      .info-title {
        font-weight: bold;
      }
    }
  }
  .iconbox {
    position: absolute;
    bottom: 100px;
    right: 15px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      font-size: 24px;
      margin: 10px 0px 10px 0px;
      transition: all 0.2s;
      &:hover {
        color: var(--color);
      }
    }
  }
`

const CategoryContainer = ({ category, subCategory }) => {

  const navigate = useNavigate();
  const [grid, setGrid] = useState('grid');
  const [sortActive, setSortActive] = useState(false);
  const [sort, setSort] = useState('인기순');
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
  const initCount = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const copyInfo = [];
    for (let i = 0; i < initCount && initCount.length; i++) {
      copyInfo.push(false);
    }
    setInfo(copyInfo);
  }, []);
  return (
    <CCBox>
      <div className="inner">
        <RootBox>
          <MdHome className="icon" />
          <span className="roottext">Home</span>
          <MdOutlineKeyboardArrowRight className="icon" />
          <span className="roottext">{category}</span>
          {
            subCategory && subCategory.length > 0
              ? <>
                <MdOutlineKeyboardArrowRight className="icon" />
                <span className="roottext">{subCategory}</span>
              </>

              : null
          }
        </RootBox>
        <SideNav>
          <span className="navtitle">{category}</span>
          {
            initData.map((item, i) => {
              if (item.category === category) {
                return (
                  item.subcategory.map((item2, j) => {
                    return (
                      <SideNavItem key={j} onClick={() => { navigate('/category/' + item.category + '/' + item2.subname) }}>
                        <span className="itemtext">{item2.subname}</span>
                        <MdOutlineKeyboardArrowRight className="right" />
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
                subCategory && subCategory.length > 0
                  ? subCategory
                  : category + ' 전체상품'
              }
            </span>
            <span className="count"><span className="edge">12,345</span>개의 상품</span>
          </ProductTitleBox>

          <SortBox>
            <SortDropdownBox onClick={() => { setSortActive(!sortActive) }}>
              <span>{sort}</span>
              <MdKeyboardArrowDown className={'down ' + `${sortActive ? 'active' : ''}`} />
            </SortDropdownBox>
            <SortMenu className={sortActive ? 'show' : 'hide'}>
              <div className="item" onClick={() => { setSort('인기순'); setSortActive(false) }}>인기순</div>
              <div className="item" onClick={() => { setSort('가격낮은순'); setSortActive(false) }}>가격낮은순</div>
              <div className="item" onClick={() => { setSort('가격높은순'); setSortActive(false) }}>가격높은순</div>
              <div className="item" onClick={() => { setSort('최신등록순'); setSortActive(false) }}>최신등록순</div>
            </SortMenu>
            <div className="iconbox">
              <MdViewModule onClick={() => { setGrid('grid') }} className={'icon ' + `${grid === 'grid' ? 'active' : ''}`} />
              <MdViewList onClick={() => { setGrid('list') }} className={'icon ' + `${grid === 'list' ? 'active' : ''}`} />
            </div>
          </SortBox>
          <GridBox className={grid === 'grid' ? 'grid' : 'list'}>
            {
              grid === 'grid'
                ? initCount.map((item, i) => {
                    return (
                      <GridItem key={i}>
                        <img src={process.env.PUBLIC_URL + '/air.png'} alt="item" />
                        <span className="title">[Norgen]Excelon Plus box set (FRL) for extreme applications, G1/2, automatic drain, with shut-off valve</span>
                        <span className="price">49,000원</span>
                        <div className="iconbox">
                          <MdFavoriteBorder className="icon" />
                          <MdOutlineAddShoppingCart className="icon" />
                        </div>
                        <InfoButton
                          onClick={() => {
                            var copyinfo = [...info];
                            copyinfo[i] = !info[i];
                            setInfo(copyinfo);
                          }}>
                          {
                            info[i] ? 'CLOSE'
                              : 'INFO'
                          }
                        </InfoButton>
                        <InfoBox className={info[i] ? 'show' : 'hide'}>
                          <div className="info-inner">
                            <span className="info-title">Port Size&nbsp;:&nbsp;</span>
                            <span className="info-text">G1/2</span>
                          </div>
                          <div className="info-inner">
                            <span className="info-title">Drain type&nbsp;:&nbsp;</span>
                            <span className="info-text">Auto drain</span>
                          </div>
                          <div className="info-inner">
                            <span className="info-title">Filter element&nbsp;:&nbsp;</span>
                            <span className="info-text">40.00 µm</span>
                          </div>
                          <div className="info-inner">
                            <span className="info-title">Outlet pressure adjustment&nbsp;:&nbsp;</span>
                            <span className="info-text">0.3 ... 10 bar</span>
                          </div>
                          <div className="info-inner">
                            <span className="info-title">Gauge&nbsp;:&nbsp;</span>
                            <span className="info-text">Integrated gauge</span>
                          </div>
                        </InfoBox>
                      </GridItem>
                    )
                  })

                : initCount.map((item, i) => {
                    return (
                      <ListItem>
                        <img src={process.env.PUBLIC_URL + '/air.png'} alt="item" />
                        <div className="column">
                          <span className="title">[Norgen]Excelon Plus box set (FRL) for extreme applications, G1/2, automatic drain, with shut-off valve</span>
                          <span className="price">49,000원</span>
                          <div className="infobox">
                            <div className="info-inner">
                              <span className="info-title">Port Size&nbsp;:&nbsp;</span>
                              <span className="info-text">G1/2</span>
                            </div>
                            <div className="info-inner">
                              <span className="info-title">Drain type&nbsp;:&nbsp;</span>
                              <span className="info-text">Auto drain</span>
                            </div>
                            <div className="info-inner">
                              <span className="info-title">Filter element&nbsp;:&nbsp;</span>
                              <span className="info-text">40.00 µm</span>
                            </div>
                            <div className="info-inner">
                              <span className="info-title">Outlet pressure adjustment&nbsp;:&nbsp;</span>
                              <span className="info-text">0.3 ... 10 bar</span>
                            </div>
                            <div className="info-inner">
                              <span className="info-title">Gauge&nbsp;:&nbsp;</span>
                              <span className="info-text">Integrated gauge</span>
                            </div>
                          </div>
                          <div className="iconbox">
                            <MdFavoriteBorder className="icon" />
                            <MdOutlineAddShoppingCart className="icon" />
                          </div>
                        </div>
                      </ListItem>
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