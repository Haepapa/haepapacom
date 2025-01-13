import { createSystem, defaultConfig } from "@chakra-ui/react";

const MainTheme = createSystem(defaultConfig, {
  theme: {
    // tokens: {
    //   colors: {
    //     outline: { light: { value: "#2C2C2C" }, dark: { value: "#6A6A6A" } },
    //     background: { light: { value: "#FFFEF5" }, dark: { value: "#1D1C14" } },
    //   },
    //   fonts: {
    //     heading: { value: `'Figtree', sans-serif` },
    //     body: { value: `'Figtree', sans-serif` },
    //   },
    // },
    semanticTokens: {
      colors: {
        outline: {
          value: {
            base: "#2C2C2C",
            _dark: "#6A6A6A",
          },
        },
        background: {
          value: {
            base: "#FFFEF5",
            _dark: "#1D1C14",
          },
        },
        white: {
          value: {
            base: "#FFFFFF",
            _dark: "#262626",
          },
        },
        black: {
          value: {
            base: "#2C2C2C",
            _dark: "#FFFFFF",
          },
        },
        main: {
          value: {
            base: "#FFFBB4",
            _dark: "#FFFBB4",
          },
        },
        mainHover: {
          value: {
            base: "#FFFCCC",
            _dark: "#FFFCCC",
          },
        },
      },
    },
  },
});

export default MainTheme;

// npx @chakra-ui/cli typegen ./src/theme/MainTheme.tsx
