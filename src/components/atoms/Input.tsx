import styled, { css } from "styled-components";

interface InputStyleTypes {
  width?: string;
  height?: string;
}

export const Input = styled.input<InputStyleTypes>`
  ${({ width, height }) => css`
    width: ${width ?? "100%"};
    height: ${height ?? "3.25rem"};
  `}
`;
