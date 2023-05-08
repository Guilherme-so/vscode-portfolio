import styled from "styled-components";

export const Container = styled.div`
  counter-reset: line;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #fff;
  padding: 2rem 20px 20px 20px;

  .line::before {
    content: counter(line);
    counter-increment: line;
    margin-right: 1rem;
    color: grey;
  }

  a {
    color: ${(props)=> props.theme.color.themeMainColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.85rem;
    line-height: 1.5rem;
  }
`;
