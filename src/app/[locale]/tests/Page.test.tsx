import Page from "../page";
import { renderWithIntl } from "./helper";

describe("Page", () => {
  it("should render the page", () => {
    expect(() => renderWithIntl(<Page />)).not.toThrow();
  });
});
