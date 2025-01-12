import { createSystem, defaultConfig } from "@chakra-ui/react";

const MainTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        outline: { light: { value: "#2C2C2C" }, dark: { value: "#6A6A6A" } },
        background: { light: { value: "#FFFEF5" }, dark: { value: "#1D1C14" } },
      },
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
    semanticTokens: {
      colors: {
        outline: {
          value: {
            base: "{colors.outline.light}",
            _dark: "{colors.outline.dark}",
          },
        },
        background: {
          value: {
            base: "{colors.background.light}",
            _dark: "{colors.background.dark}",
          },
        },
      },
    },
  },
});

export default MainTheme;
