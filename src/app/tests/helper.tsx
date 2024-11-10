import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import enMessages from "@/i18n/messages/en.json";
import { ThemeProvider } from "../contexts/ThemeContext";

interface Options {
  wrapper?: React.JSXElementConstructor<{ children: React.ReactNode }>;
}

export const renderWithProviders = (
  children: React.ReactNode,
  options?: Options
) => {
  return render(
    <ThemeProvider>
      <NextIntlClientProvider messages={enMessages} locale="en">
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>,
    options
  );
};
