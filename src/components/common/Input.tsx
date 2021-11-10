import styled, { css } from "styled-components";

interface InputStyleTypes {
  width?: string;
  height?: string;
  margin?: string;
}

export const Input = styled.input<InputStyleTypes>`
  ${({ width, height, margin }) => css`
    width: ${width ?? "100%"};
    height: ${height ?? "3.25rem"};
    ${margin && `margin: ${margin};`}
  `}
`;
