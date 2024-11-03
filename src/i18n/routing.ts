import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { Locale } from "@/models/Locale";

export const routing = defineRouting({
  locales: [Locale.EN, Locale.PT_BR],
  defaultLocale: Locale.PT_BR,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
