import styled, { css } from "styled-components";

interface DivStyleTypes {
  fontSize?: string;
  width?: string;
  height?: string;
  display?: "flex" | "grid";
  flex?: string;
}

export const Div = styled.div<DivStyleTypes>`
  ${({ width, height, fontSize, display, flex }) => css`
    display: ${display ?? "initial"};
    flex : ${flex ?? "initial"}
    font-size: ${fontSize ?? "1rem"};
    width: ${width ?? "100%"};
    height: ${height ?? "3.25rem"};
  `}
`;
