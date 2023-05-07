import styled from "styled-components";

export const Heading = styled.div`
padding-top: 20px;
display: block;
color: #fff;
`

export const Container = styled.div`
  padding: 1.5rem 20px 120px 20px;
  display: grid;
  height: calc(100vh - 30px - 70px);
  overflow-x: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;


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


  @media screen and (max-width: 600px){
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  }
`