'use client';
import { createTheme } from '@mui/material/styles';

export enum ColorEnum {
  Primary = '#da1a32',
  BgColor = '#f8f5f0',
  TextColor = '#000',
}

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      main: ColorEnum.Primary,
    },
    bgColor: ColorEnum.BgColor,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: 12,
        },
        contained: {
          border: `1px solid ${ColorEnum.Primary}`,
          ':hover': {
            backgroundColor: 'white',
            color: ColorEnum.Primary,
          },
        },
        outlined: {
          color: '#000',
          ':hover': {
            backgroundColor: 'white',
            color: ColorEnum.Primary,
            borderColor: '#000',
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          li: {
            color: ColorEnum.TextColor,
          },
          '.MuiBreadcrumbs-separator': {
            margin: '0 2px',
            marginTop: -2,
          },
        },
      },
    },
  },
});

export default theme;

declare module '@mui/material/styles' {
  interface Palette {
    bgColor?: string;
  }
  interface PaletteOptions {
    bgColor?: string;
  }
}
