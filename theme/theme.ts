import { alpha, createTheme } from "@mui/material"

import { PP_Monument_Variable, Satoshi } from "./fonts"

let theme = createTheme()

theme = createTheme(theme, {
  palette: {
    primary: {
      light: "#fbbfeb",
      main: "#FAAFE7",
      dark: "#af7aa1",
      contrastText: "#000000",
    },
    secondary: {
      light: "#100f76",
      main: "#0A0949",
      dark: "#070633",
      contrastText: "#FFFFFF",
    },
  },
})

theme = createTheme(theme, {
  typography: {
    fontFamily: "Satoshi, sans-serif",

    h1: {
      fontFamily: PP_Monument_Variable.style.fontFamily,
      fontVariationSettings: "'wght' 800",
      fontSize: "6.5vw",
      lineHeight: 0.9,
      textTransform: "uppercase",
      [theme.breakpoints.up("lg")]: {
        fontSize: "min(8vw, 264px)",
      },
    },

    h3: {
      fontFamily: PP_Monument_Variable.style.fontFamily,
      fontVariationSettings: "'wght' 800",
      fontSize: 16,
      lineHeight: 0.9,
      textTransform: "uppercase",
      whiteSpace: "pre-wrap",
      [theme.breakpoints.up("md")]: {
        fontSize: 20,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 44,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 52,
      },
    },

    h4: {
      fontFamily: PP_Monument_Variable.style.fontFamily,
      fontVariationSettings: "'wght' 800",
      fontSize: "5vmin",
      lineHeight: 1,
    },

    h6: {
      fontFamily: PP_Monument_Variable.style.fontFamily,
      fontVariationSettings: "'wght' 800",
      fontSize: "80vh",
      textTransform: "uppercase",
    },

    body1: {
      fontFamily: Satoshi.style.fontFamily,
      fontVariationSettings: "'wght' 500",
      fontSize: 14,
      lineHeight: 1.14,
      whiteSpace: "pre-wrap",
      [theme.breakpoints.up("lg")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 24,
      },
    },

    body2: {
      fontSize: 14,
      fontVariationSettings: "'wght' 300",
      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
    },

    menu1: {
      fontFamily: PP_Monument_Variable.style.fontFamily,
      fontVariationSettings: "'wght' 300",
      fontSize: 40,
      lineHeight: 0.9,

      "a&": {
        textDecoration: "none",
        transition: "font-variation-settings 0.3s",

        "&:hover": {
          color: theme.palette.primary.main,
          fontVariationSettings: "'wght' 800",
        },
      },

      [theme.breakpoints.up("md")]: {
        fontSize: 64,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 72,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "7vw",
      },
    },

    menu2: {
      fontSize: 14,
      lineHeight: 1.3,
      fontVariationSettings: "'wght' 300",

      "a&": {
        textDecoration: "none",
        transition: "font-variation-settings 0.3s",

        "&:hover": {
          color: theme.palette.primary.main,
          fontVariationSettings: "'wght' 800",
        },
      },

      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 24,
      },
    },
  },
})

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          "&::-webkit-scrollbar": {
            width: 2,
            background: "transparent",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme.palette.common.white,
            borderRadius: 4,
            transition: "background 0.3s",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: alpha(theme.palette.common.white, 0.8),
            transition: "background 0.3s",
          },
          ":root": {
            "--text-scale": 1,
          }
        },
        body: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.common.white,
          overflowX: "hidden",
        },
        a: {
          color: theme.palette.primary.main,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 0,
          borderRadius: 0,
          fontFamily: "PP Monument Extended, sans-serif",
          fontWeight: 300,
          backgroundColor: theme.palette.secondary.main,
          textDecoration: "none",
          textTransform: "none",
          transition:
            "border-radius 0.2s ease-in-out, background-color 0.2s ease",

          "&:hover": {
            borderRadius: 8,
            backgroundColor: theme.palette.secondary.light,
          },
          "&.Mui-disabled": {
            color: alpha(theme.palette.common.white, 0.5),
          },
        },

        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        },

        sizeMedium: {
          fontSize: 12,
          padding: "12px",

          [theme.breakpoints.up("lg")]: {
            fontSize: 18,
          },
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          menu1: "p",
          menu2: "p",
        },
      },
    },
  },
})

export default theme

declare module "@mui/material/styles" {
  interface TypographyVariants {
    menu1: React.CSSProperties
    menu2: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    menu1?: React.CSSProperties
    menu2?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    menu1: true
    menu2: true
  }
}
