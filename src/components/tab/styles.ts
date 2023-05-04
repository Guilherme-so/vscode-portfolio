import styled from "styled-components";

export const TabContainer = styled.div<{ active: boolean }>`
  padding: 0.5rem 10px 0.5rem 1.25rem;
  background-color: ${(props) => props.theme.color.tabbg};
  color: #ececec;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.tabborder};
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.9rem;
  cursor: pointer;

  border-top: ${({ active, theme }) =>
    active ? "1px solid" + theme.color.accentcolor : "none"};

  background: ${(props) => props.theme.color.tabactivebg};
  border-bottom: none;

  p {
    margin-left: 5px;
  }

  span {
    color: ${({ active, theme }) =>
      active ? theme.color.textcolor : theme.color.tabactivebg};
    margin-left: 15px;
    padding: 2px 6px;

    :hover {
      background: ${(props) => props.theme.color.sidebarbg};
      color: ${({ active, theme }) =>
        active ? theme.color.textcolor : "gray"};
      border-radius: 5px;
    }
  }

  :hover {
    span {
      color: ${({ active, theme }) =>
        active ? theme.color.textcolor : "gray"};
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;
