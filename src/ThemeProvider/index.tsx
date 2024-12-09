/// <reference types="@esfront/react/lib/overrides" />

import {
  ThemeProvider as ESThemeProvider,
  createTheme,
  palettes,
} from "@esfront/react";

import {} from "@esfront/react";

import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    paletteDark: {
      ...palettes.common,
      ...palettes.dark,
    },
    paletteLight: {
      ...palettes.common,
      ...palettes.light,
    },
  });
  return <ESThemeProvider theme={theme}>{children}</ESThemeProvider>;
};
