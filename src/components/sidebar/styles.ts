import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props) => props.theme.color.sidebarbg};
  border-right: 1px solid ${(props) => props.theme.color.sidebardBorderRight};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 4.5vw;
  height: calc(100vh - 30px - 25px);

  @media screen and (min-width: 2000px) {
    width: 2.5vw;
  }
  @media screen and (max-width: 1100px) {
    width: 6vw;
  }

  @media screen and (max-width: 900px) {
    width: 8vw;
  }

  @media screen and (max-width: 600px) {
    width: 40px;
  }
`;

export const Top = styled.div``;

export const Bottom = styled.div``;

export const IconContainer = styled.div<{
  active?: boolean;
  activeBotton?: boolean;
}>`
  cursor: pointer;
  width: 100%;

  border-left: ${({ theme, active }) =>
    active == true ? `2px solid ${theme.color.sidebarBorderLeft}` : "none"};

  .icon {
    height: 48px;
    width: 48px;
    padding: 0.65rem 0;
    display: block;
    margin: 0 auto;
    fill: ${({ theme, active, activeBotton }) =>
      active == true
        ? theme.color.sidebarIconActive
        : activeBotton == true
        ? theme.color.sidebarIconActive
        : theme.color.sidebarIcon};

    :hover {
      fill: ${({ theme }) => theme.color.sidebarIconActive};
    }
  }

  @media screen and (max-width: 900px) {
    .icon {
      height: 48px;
      width: 48px;
      padding: 0.6rem;
    }
  }

  @media screen and (max-width: 600px) {
    .icon {
      height: 43px;
      width: 43px;
      padding: 0.6rem;
    }
  }
`;
