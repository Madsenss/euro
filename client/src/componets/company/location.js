import styled from "styled-components";

const LocationBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  .inner {
    width: 1350px;
    border: 1px solid black;
  }
`

const Location = () => {
  return (
    <LocationBox>
      <div className="inner">
        찾아오시는 길
      </div>
    </LocationBox>
  )
};

export default Location;