import styled from "styled-components";

export const Container = styled.div`
  background: rgb(30, 138, 189);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  cursor: pointer;
  gap: 10px;
  position: relative;

  :hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .imgWrapper {
    position: relative;
    height: 180px;
    max-width: 600px;
    width: 100%;
    overflow: hidden;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }

  .imgWrapper::before {
    content: "";
    background-color: rgb(30, 138, 189);
    position: absolute;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    opacity: 0.8;
    z-index: 1;
    width: 0;
    height: 100%;
    transition-duration: 0.2s;
    transition-property: width;
  }
  .imgWrapper:hover::before {
    max-width: 210%;
    width: 100%;
  }
  .imgWrapper > .handPonting {
    z-index: 2;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-55%, -50%);
    display: none;
  }

  .imgWrapper:hover .handPonting {
    display: flex;
  }

  .content {
    padding: 1rem;
    border-radius: 0 0 20px 20px;
    color: #fff;
  }

  .content p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem 0 1rem;
  }

  .tags span {
    margin: 0.5rem 0.5rem 0 0;
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
    font-size: 0.75rem;
    transition: all 0.2s;
  }

  .cta {
    display: flex;
    gap: 1rem;
  }
`;
