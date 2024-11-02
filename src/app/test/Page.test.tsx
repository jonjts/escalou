import { render } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("should render the page", () => {
    expect(() => render(<Page />)).not.toThrow();
  });
});
