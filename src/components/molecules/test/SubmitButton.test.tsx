import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SubmitButton from "../SubmitButton";
import "jest-styled-components";

describe("<SubmitButton />", () => {
  it("SubmitButton 랜더링 확인", () => {
    const { container } = render(<SubmitButton />);
    const cancel = screen.getByText("취소");
    expect(cancel).toBeInTheDocument();

    const modify = screen.getByText("확인");
    expect(modify).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("SubmitButton 동작 확인", () => {
    const cancelfn = jest.fn();
    render(<SubmitButton onCancel={cancelfn} />);
    const cancelButton = screen.getByText("취소");

    expect(cancelfn).toHaveBeenCalledTimes(0);
    fireEvent.click(cancelButton);
    expect(cancelfn).toHaveBeenCalledTimes(1);
  });

  it("SubmitButton 조건 적용 확인", () => {
    const modifiy = jest.fn();
    render(<SubmitButton onModify={modifiy} />);
    screen.getByText("수정");
  });
});
