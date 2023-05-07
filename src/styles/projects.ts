import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 20px 60px 20px;
  height: calc(100vh - 30px - 70px);
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
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
`;

export const Heading = styled.div`
  padding-top: 20px;
  display: block;
  font-size: x-large;
  color: #fff;
`;

export const Works = styled.div`
  margin-top: 40px;
  display: grid;
  overflow-x: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
