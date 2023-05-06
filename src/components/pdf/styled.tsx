import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  margin-top: 5px;
  display: inline-flex;
  gap: 10px;
`;

export const Button = styled.button<{ disabled: any }>`
  width: 80px;
  background-color: rgb(30, 138, 189);
  color: #fff;
  border: none;
  padding: 4px 0px;
  border-radius: 3px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? ".5" : "none")};
`;
