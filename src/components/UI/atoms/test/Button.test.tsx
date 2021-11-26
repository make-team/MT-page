import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";
import "jest-styled-components";

describe("<Button />", () => {
  it("랜더링된 버튼의 동작확인", () => {
    const { container } = render(<Button>test</Button>);
    const label = screen.getByText("test");
    expect(label).toBeInTheDocument();

    expect(label).toHaveStyleRule("color", "#ffffff", {
      modifier: ":hover",
    });

    expect(container).toMatchSnapshot();
  });
});
