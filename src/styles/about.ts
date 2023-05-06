import styled from "styled-components";

export const About = styled.div<{ size: number }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 20px 60px 30px;
  height: calc(100vh - 30px - 70px);
  width: calc(100vw - ${(props) => props.size}px - 50px);
  overflow-x: auto;
  color: #fff;
  z-index: 1;

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

  a {
    color: rgb(30, 138, 189);
  }

  li {
    margin-bottom: 5px;
  }

  .react-pdf__Page__canvas {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid darkgrey;
    box-shadow: 5px 5px 5px 1px #ccc;
    border-radius: 5px;
    width: min-content;
  }

  .react-pdf__Page__textContent {
    display: none;
  }

  .react-pdf__Page__annotations {
    display: none;
  }

  /* For pdf */
  /* .react-pdf__Page {
    margin-top: 10px;
    border: 1px solid darkgrey;
    box-shadow: 5px 5px 5px 1px #ccc;
    border-radius: 5px;
    width: min-content;
} */

  /* For all pages */
  /* .all-page-container {
    height: 100%;
    max-height: 500px;
    overflow: auto;
  }
 */

 @media screen and (max-width: 700px){
  width: 100%;
  padding: 2rem 20px 60px 20px;

  li {
    word-wrap: break-word;
  }

  .react-pdf__Page__canvas {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid darkgrey;
    box-shadow: 5px 5px 5px 1px #ccc;
    border-radius: 5px;
    max-width: 80vw;
    max-height: 400px;
  }
 }
`;
