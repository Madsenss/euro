import styled from "styled-components";

const BannerBox = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${process.env.PUBLIC_URL + '/cgb.png'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
  .dark {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(0, 0, 0, 0.35);
  }
  .inner {
    padding: 160px 0px 0px 0px;
    width: 1100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .titlebox {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      .fs {
        font-size: 60px;
        color: #fff;
      }
      .title {
        font-size: 40px;
        font-weight: bold;
        color: #fff;
      }
    }
    .textbox {
      width: 650px;
      height: 200px;
      padding-left: 50px;
      .text {
        font-size: 16px;
        color: #eee;
        line-height: 130%;
      }
    }
  }
`

const ProductBanner = () => {
  return (
    <BannerBox>
      <div className="dark">
        <div className="inner">
          <div className="titlebox">
            <span className="fs">{'['}</span>
            <span className="title">&nbsp;PRODUCTS&nbsp;</span>
            <span className="fs">{']'}</span>
          </div>
          <div className="textbox">
            <span className="text">
            Our world-class product portfolio includes Norgren, Buschjost, FAS, Herion, Kloehn, Maxseal. Having proven their value over the years, they stand amongst the most trusted manufacturers of pneumatic and fluid control products. Because of this we're able to help our customers solve the world's greatest engineering challenges - reliably, safely and efficiently.
            </span>
          </div>
        </div>
      </div>
    </BannerBox>
  )
};

export default ProductBanner;