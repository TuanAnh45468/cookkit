import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../index";

describe("Button", () => {
  it("Should render correctly", () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
