"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider as NextTheme } from "next-themes";

export function ThemeProvider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <NextTheme attribute="class" disableTransitionOnChange>
        {props.children}
      </NextTheme>
    </ChakraProvider>
  );
}
