import Page from "../page";
import { renderWithIntl } from "@/app/tests/helper";

describe("Page", () => {
  it("should render the page", () => {
    expect(() => renderWithIntl(<Page />)).not.toThrow();
  });
});
