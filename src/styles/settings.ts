import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 20px 20px 20px;

  h2 {
    color: #fff;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 1.5rem 20px 20px 20px;

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    color: #fff;
    margin-top: 5px;
    margin-bottom: 3px;
  }
  h4{
    color: #fff;
    margin-bottom: 5px;
  }

  button{
    padding: 3px 5px;
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  h2 {
    color: #fff;
  }
`;
