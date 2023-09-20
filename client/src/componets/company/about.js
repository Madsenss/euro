import styled from "styled-components";

const AboutBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  .inner {
    width: 1350px;
    border: 1px solid black;
  }
`

const About = () => {
  return (
    <AboutBox>
      <div className="inner">
        회사소개
      </div>
    </AboutBox>
  )
};

export default About;