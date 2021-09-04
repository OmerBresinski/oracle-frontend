import styled from "styled-components";

export const Text = styled.span`
  font-family: Cabin, Arial, Helvetica, sans-serif;
  font-size: ${({ size }) => size};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
`;
