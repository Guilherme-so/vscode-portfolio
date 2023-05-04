import styled from "styled-components";

export const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.mainbg};
  color: ${(props) => props.theme.color.textcolor};
  height: 30px;
  align-items: center;
  position: relative;
  padding: auto;

  p {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  margin-left: 7px;

  ul {
    display: flex;
    font-size: 14px;
  }
  ul > li {
    margin: auto 7px;
  }

  @media only screen and (max-width: 800px) {
    ul {
      display: none;
    }
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  gap: 7px;
  margin-right: 14px;

  span:nth-child(1)::before {
    content: "";
    display: inline-block;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: yellow;
  }

  span:nth-child(2)::before {
    content: "";
    display: inline-block;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: lightgreen;
  }

  span:nth-child(3)::before {
    content: "";
    display: inline-block;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: red;
  }
`;
