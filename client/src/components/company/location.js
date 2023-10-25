import { MdArrowRight, MdEmail, MdFax, MdLocationOn, MdPhone } from "react-icons/md";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const LocationBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  .inner {
    width: 1100px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .headbox {
      position: relative;
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .head {
        z-index: 2;
        width: fit-content;
        height: fit-content;
        padding: 5px 15px 5px 15px;
        background-color: #fff;
        border: 3px solid var(--color);
        border-radius: 50px;
        font-size: 20px;
        font-weight: bold;
        color: #555;
      }
    }
    .textbox {
      display: flex;
      flex-direction: column;
      margin-bottom: 22px;
      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 8px;
        .icon {
          color: var(--color);
          font-size: 22px;
          margin: 0px 5px 0px 0px;
        }
        span {
          font-size: 16px;
          font-weight: bold;
          color: #555;
        }
      }
    }
  }
`
const Dash = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: var(--color);
`

const StyledMap = styled(Map)`
  width: 900px;
  height: 600px;
  border: 2px solid #ddd;
  margin-bottom: 30px;
`

const SubwayBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .rootbox {
    display: flex;
    flex-direction: column;
    color: #555;
    .roottitle {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .arrow {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 5px;
      .icon {
        font-size: 24px;
      }
      .arrowtext {
        font-size: 16px;
      }
    }
  }
`
const SubwayIcon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #fff;
  border: 6px solid rgb(0, 164, 227);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  .num {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
    border: 3px solid rgb(0, 164, 227);
    border-radius: 50%;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    color: rgb(0, 164, 227);;
  }
  .text {
    font-size: 16px;
    font-weight: bold;
  }
`

const KaKaoMap = () => {
  const setting = {
    center: { lat: 37.32338866665412, lng: 126.78513165063413 },
    level: 4
  }
  return (
    <StyledMap center={setting.center} level={setting.level}>
      <MapMarker position={setting.center}/>
    </StyledMap>
  )
}

const Location = () => {
  return (
    <LocationBox>
      <div className="inner">
        <div className="headbox">
          <div className="head">유로시스템 본사</div>
          <Dash />
        </div>
        <div className="textbox">
          <div className="item">
            <MdLocationOn className="icon"/>
            <span>경기도 안산시 단원구 산단로 325, 8층 F822호</span>
          </div>
          <div className="item">
            <MdPhone className="icon"/>
            <span>031-123-4567</span>
          </div>
          <div className="item">
            <MdFax className="icon"/>
            <span>031-123-4567</span>
          </div>
          <div className="item">
            <MdEmail className="icon"/>
            <span>eurosystem@eurosystem.co.kr</span>
          </div>
        </div>
        <KaKaoMap/>
        <div className="headbox">
          <div className="head">대중교통 이용시</div>
          <Dash />
        </div>
        <SubwayBox>
          <SubwayIcon>
            <div className="num">4</div>
            <span className="text">안산역</span>
          </SubwayIcon>
          <div className="rootbox">
            <span className="roottitle">지하철 4호선 안산역 2번 출구(도보 약 5분 소요)</span>
            <div className="arrow">
              <MdArrowRight className="icon"/>
              <span className="arrowtext">(출구 앞 KFC) 오른쪽 뒷편으로 돌아서 서울고 방향 언덕 오르막길(도보) → 청권사</span>
            </div>
            <div className="arrow">
              <MdArrowRight className="icon"/>
              <span className="arrowtext">신동아아파트정문' 정류장 하차 → 횡단보도 건너서 삼일제약 옆 건물</span>
            </div>
          </div>
        </SubwayBox>
      </div>
    </LocationBox>
  )
};

export default Location;