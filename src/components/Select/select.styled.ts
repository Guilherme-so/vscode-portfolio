import styled from "styled-components";

export const Container = styled.div<{ref:any}>`
  position: relative;
  height: 105px;
  width: 80px;
  gap: 5px;
  display: flex;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  img {
    border-radius: 50%;
  }
`;

export const Button = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;

  p {
    color: ${({ theme }) => theme.color.themeMainColor};
    padding: 0;
    margin-right: 3px;
    font-size: medium;
    font-weight: bold;
  }
`;

export const Caret = styled.div<{ active: boolean }>`
  border: 10px solid transparent;
  padding: 0;
  border-top-color: ${({ theme }) => theme.color.themeMainColor};
  translate: ${({ active }) => (active ? "0px -6px" : "0px 4px")};
  transition: ease 0.3s;
  rotate: ${({ active }) => (active ? "180deg" : "")};
`;

export const List = styled.ul<{ options: boolean }>`
  background: #2d3748;
  list-style: none;
  height: 80px;
  min-width: 170px;
  display: ${({ options }) => (options ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 5px;
  transition: 0.3s;
  margin: 10px auto;
  padding: 0;
  position: absolute;
  top: calc(100% + 10px);
  left: -40px;
  z-index: 3;

  /* @media (max-width: 800px) {
    top: calc(100% - 5px);
    position: fixed;
    right: 0;
  } */
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 0px;
  gap: 5px;
  cursor: pointer;

  img {
    border-radius: 50%;
  }
  p {
    color: white;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.themeMainColor};
    width: 100%;
    p {
      color: white;
    }
  }
`;
