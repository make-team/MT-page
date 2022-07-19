import styled, { css } from "styled-components";

interface InputStyleTypes {
  width?: string;
  height?: string;
}

export const Input = styled.input<InputStyleTypes>`
  ${({ width, height }) => css`
    width: ${width ?? "100%"};
    height: ${height ?? "3.25rem"};
    @media (max-width: 700px) {
      width: ${width ?? "100%"};
      height: ${height ?? "1.25rem"};
      font-size: 0.6rem;
    }
  `}
`;
