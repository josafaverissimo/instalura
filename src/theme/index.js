import { typographyVariants } from './typographyVariants';

export const colors = {
  currentMode: 'dark',
  modes: {
    light: {
      background: {
        light: {
          color: '#FFFFFF',
        },
        main: {
          color: '#F2F2F2',
        },
      },
      borders: {
        main: {
          color: '#F1F1F1',
        },
      },
      primary: {
        main: {
          color: '#D7385E',
          contrastText: '#fff',
        },
      },
      secondary: {
        main: {
          color: '#FB7B6B',
          contrastText: '#fff',
        },
      },
      tertiary: {
        main: {
          color: '#070C0E',
          contrastText: '#fff',
        },
        light: {
          color: '#88989E',
          contrastText: '#fff',
        },
      },
    },
    dark: {
      background: {
        light: {
          color: '#1f1f1f',
        },
        main: {
          color: '#121212',
        },
      },
      borders: {
        main: {
          color: '#000',
        },
      },
      primary: {
        main: {
          color: '#D7385E',
          contrastText: '#fff',
        },
      },
      secondary: {
        main: {
          color: '#FB7B6B',
          contrastText: '#fff',
        },
      },
      tertiary: {
        main: {
          color: '#fff',
          contrastText: '#070C0E',
        },
        light: {
          color: '#c0c0c0',
          contrastText: '#070C0E',
        },
      },
    },
  },
};

export const breakpoints = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};
export default {
  colors,
  borderRadius: '12px',
  typographyVariants,
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};
