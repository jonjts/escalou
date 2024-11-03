import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import enMessages from "@/i18n/messages/en.json";
import { ThemeProvider } from "../contexts/ThemeContext";

export const renderWithIntl = (children: React.ReactNode) => {
  return render(
    <ThemeProvider>
      <NextIntlClientProvider messages={enMessages} locale="en">
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
};
