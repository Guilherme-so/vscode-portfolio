import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  z-index: 4;
  flex: 1;
  height: calc(100vh - 30px - 25px);
`;

export const Pages = styled.div`
  background: ${(props) => props.theme.color.mainbg};
  height: 100%;
`;
