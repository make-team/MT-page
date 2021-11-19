import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Button from "./Button";

describe("<Button />", () => {
  it("랜더링이 됐는지", () => {
    const { container } = render(<Button onClick={() => {}}>test</Button>);

    const label = screen.getByText("test");
    expect(label).toBeInTheDocument();

    const parent = label.parentElement;

    expect(parent).toHaveStyleRule("color", "inherit");
    expect(parent).toHaveStyleRule("color", "#ffffff", {
      modifier: `:hover`,
    });
    expect(container).toMatchSnapshot();
  });
});
