import Page from "../page";
import { renderWithProviders } from "@/app/tests/helper";

describe("Page", () => {
  it("should render the page", () => {
    expect(() => renderWithProviders(<Page />)).not.toThrow();
  });
});
