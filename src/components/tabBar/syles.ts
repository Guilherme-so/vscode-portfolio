import styled from "styled-components";

export const Tabs = styled.div<{ size: number }>`
  display: flex;
  overflow-x: auto;
  width: calc(100vw - ${(props) => props.size}px - 50px);
  background-color: ${(props) => props.theme.color.tabsbg};
  border-bottom: 1px solid ${(props) => props.theme.color.tabborder};

  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #343746;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #21222c;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(30, 138, 189);
  }

  @media screen and (max-width: 900px) {
    width: 78vw;
  }

  @media screen and (max-width: 600px) {
    width: 89.5vw;
  }
`;
