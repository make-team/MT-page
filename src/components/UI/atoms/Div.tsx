import styled, { css } from "styled-components";

interface DivStyleTypes {
  fontSize?: string;
  width?: string;
  height?: string;
}

export const Div = styled.div<DivStyleTypes>`
  ${({ width, height, fontSize }) => css`
    font-size: ${fontSize ?? "1rem"};
    width: ${width ?? "100%"};
    height: ${height ?? "3.25rem"};
  `}
`;
