import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { GroupRules } from "../GroupRules";
import { GroupDrawProvider } from "@/app/contexts/GroupDrawContext";
import { renderWithProviders } from "@/app/tests/helper";

describe("GroupRules", () => {
  it("chenges team count", async () => {
    renderWithProviders(
      <GroupDrawProvider>
        <GroupRules />
      </GroupDrawProvider>
    );

    const teamCountInput = screen.getByLabelText(/team count/i);
    userEvent.type(teamCountInput, "2");

    await waitFor(() => {
      expect(teamCountInput).toHaveValue("12");
    });
  });
});
