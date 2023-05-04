import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.explorerbg};
  color: rgb(225, 228, 232);
  border-right: ${(props) => "1px solid" + props.theme.color.explorerborder};
  width: 18vw;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 2;
  overflow: hidden;

  .resizer {
    width: 1px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: col-resize;
    height: 100%;
    background-color: black;

    :hover {
      width: 4px;
      background: #c1c3c5b4;
    }
  }

  @media screen and (min-width: 2000px) {
    width: 10vw;
  }

  @media screen and (max-width: 900px) {
    width: 20vw;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  color: grey;

  p {
    font-weight: 300;
    opacity: .6;
    text-transform: uppercase;
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Main = styled.main``;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
  margin-top: 10px;
  cursor: pointer;
  text-transform: uppercase;

  .chevron {
    transition: transform 0.2s;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: .9;
  }
`;

export const Folder = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 17px;
  cursor: pointer;

  .chevron {
    transition: transform 0.2s;
  }

  p {
    padding-left: 3px;
    color: lightblue;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Files = styled.div`
  list-style: none;
  margin-top: 5px;
  margin-left: 27px;
`;

export const File = styled.div`
  padding: 0.2rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.color.explorerhoverbg};
  }

  p {
    margin-left: 5px;
    color: rgb(134, 235, 134);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
