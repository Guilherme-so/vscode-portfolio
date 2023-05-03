import styled from "styled-components";

export const TabContainer = styled.div`
  padding: 0.5rem 10px 0.5rem 1.25rem;
  background-color: ${(props) => props.theme.color.tabbg};
  color: #ececec;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.tabborder};
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  
  p {
    margin-left: 5px;
  }

  span {
    color: #fff;
    margin-left: 15px;
  }
`;

//   .active {
//     border-top: 1px solid var(--accent-color);
//     background: var(--tab-active-bg);
//     border-bottom: none;
//   }

//   @media screen and (max-width: 900px) {
//     .tab {
//       font-size: 1.0rem;
//     }
//   }

//   @media screen and (max-width: 600px) {
//     .tab {
//       font-size: 1.1rem;
//     }
//   }
