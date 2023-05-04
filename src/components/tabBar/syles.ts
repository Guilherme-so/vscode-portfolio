import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.tabsbg};

  @media screen and (max-width: 900px) {
    width: 78vw;
  }

  @media screen and (max-width: 600px) {
    width: 89.5vw;
  }
`;
