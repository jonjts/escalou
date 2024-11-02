import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import enMessages from "@/i18n/messages/en.json";

export const renderWithIntl = (children: React.ReactNode) => {
  return render(
    <NextIntlClientProvider messages={enMessages} locale="en">
      {children}
    </NextIntlClientProvider>
  );
};
