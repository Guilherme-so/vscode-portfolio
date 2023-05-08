import styled from "styled-components";

export const TabContainer = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem 10px 0.5rem 1.25rem;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.9rem;
  cursor: pointer;

  background-color: ${({ active, theme }) =>
    active ? theme.color.tabactivebg : theme.color.tabbg};

  color: rgb(30, 138, 189);
  border: 1px solid ${(props) => props.theme.color.tabborder};
  border-top: ${({ active, theme }) =>
    active ? `1px solid ${theme.color.sidebarBorderLeft}` : "none"};

  border-bottom: none;

  p {
    margin-left: 5px;
    color:  ${(props) => props.theme.color.tabColor};
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
