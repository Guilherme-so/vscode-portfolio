import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid ${(props) => props.theme.color.bottombarborder};
  background-color: ${(props) => props.theme.color.bottombarbg};
  height: 26px;
  display: flex;
  justify-content: space-between;
`;

export const ListOne = styled.ul`
  display: flex;
  color: #fff;
  align-items: center;
  font-size: 14px;

  li:nth-child(1) {
    background-color: ${(props) => props.theme.color.themeMainColor};
    position: relative;
    color: #000;
    width: 37px;
    height: 25px;
    margin-right: 10px;

    span:nth-child(1) {
      font-size: 12px;
      display: flex;
      position: absolute;
      top: 6px;
      left: 7px;
    }
    span:nth-child(2) {
      font-size: 12px;
      display: flex;
      position: absolute;
      transform: rotate(185deg);
      bottom: 6px;
      right: 7px;
    }
  }

  li:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1px;
    margin-right: 20px;
  }

  li:nth-child(3) {
    display: flex;
    align-items: center;
    transform: rotate(280deg);
  }
`;

export const ListTwo = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 15px;

  li:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 4px;
    
    span {
      color: #fff;
      font-size: small;
      letter-spacing: 0px;
    }
  }
`;
