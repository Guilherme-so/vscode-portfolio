import styled from "styled-components";

export const Container = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  height: calc(100vh - 30px - 70px);
  width: calc(100vw - ${(props) => props.size}px - 50px);
  position: relative;
  overflow-x: auto;

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

  @media screen and (orientation: landscape) and (max-width: 1050px) {
    display: flex;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

export const Background = styled.div`
  font-size: 5rem;
  line-height: 1.1;
  color: ${(props) => props.theme.color.bgtext};
  position: absolute;
  z-index: 1;

  @media screen and (min-width: 2000px) {
    font-size: 8.5rem;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Foreground = styled.div<{ size: number }>`
  z-index: 2;
  display: flex;
  color: ${(props) => props.theme.color.accentcolor};
  justify-content: space-between;
  align-items: center;
  width: calc(90vw - ${(props) => props.size}px - 100px);
  /* margin-right: 30px; */

  @media screen and (max-width: 1100px) {
    margin: 4rem 0;
    display: block;
    text-align: center;
  }

  @media screen and (max-width: 900px) {
    margin: 2rem 0;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .name {
    color: #eee;
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .bio {
    width: max-content;
    color: #eee;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    position: relative;

    ::before,
    ::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    ::before {
      background: ${(props) => props.theme.color.mainbg};
      animation: typewriter 2.5s steps(24) 500ms forwards;
    }

    ::after {
      margin-left: 0.4rem;
      width: 0.125em;
      background: ${(props)=> props.theme.color.themeMainColor};
      animation: typewriter 2.5s steps(24) 500ms forwards,
        blink 750ms steps(24) infinite;
    }

    @keyframes typewriter {
      to {
        left: 100%;
      }
    }

    @keyframes blink {
      to {
        background: transparent;
      }
    }
  }

  @media screen and (min-width: 2000px) {
    padding: 0 3rem;

    .name {
      font-size: 6rem;
    }

    .bio {
      font-size: 3rem;
      margin-bottom: 5rem;
    }
  }

  @media screen and (max-width: 1100px) {
    display: block;

    .name {
      font-size: 4rem;
    }

    .bio {
      font-size: 1.75rem;
      margin: 0.75rem auto 3rem;
    }
  }

  @media screen and (max-width: 900px) {
    .name {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    .bio {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      font-size: 2rem;
      margin-top: 2rem;
    }

    .bio {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      font-size: 2rem;
      margin-top: 2rem;
    }

    .bio {
      display: contents;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`;

export const CardContainer = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 0.7fr));
  gap: 1.5rem;
  bottom: 0;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.color.transparentbg};
  color: ${(props) => props.theme.color.textcolor};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  cursor: pointer;
  padding-right: 0%;

  :hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0 0.5rem;

  span {
    margin: 0.5rem 0.5rem 0 0;
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
    font-size: 0.75rem;
    transition: all 0.2s;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 400px) {
    margin-top: 20px;
  }
`;

export const Button = styled.div`
  background: ${(props)=> props.theme.color.themeMainColor};
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  margin-right: 1.5rem;
  color: #eee;
  font-weight: 600;
  border: none;
  cursor: pointer;

  :hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

export const Outlined = styled.div`
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  color: #eee;
  border: 2px solid ${(props)=> props.theme.color.themeMainColor};
  background: transparent;
  cursor: pointer;

  :hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

export const Right = styled.div`
  display: flex;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const PictureBoader = styled.div`
  border: 6px solid ${(props)=> props.theme.color.themeMainColor};
  border-radius: 250px;
  object-fit: cover;
  overflow: hidden;
`;

export const Picture = styled.div`
  border-radius: 250px;
  display: hidden;
  object-fit: cover;

  @media screen and (max-width: 1100px) {
    border-radius: 250px;
    display: hidden;
    object-fit: cover;
  }
`;
