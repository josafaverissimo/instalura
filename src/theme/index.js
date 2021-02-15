import { typographyVariants } from './typographyVariants';

// const c = useState('light');

export const colors = {
  modes: {
    light: {
      background: {
        light: {
          color: '#F2F2F2',
        },
        main: {
          color: '#fff',
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
          color: '#030506',
        },
      },
      borders: {
        main: {
          color: '#181F22',
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
          color: '#FFA59A',
          contrastText: '#fff',
        },
      },
      tertiary: {
        main: {
          color: '#fff',
          contrastText: '#070C0E',
        },
        light: {
          color: '#D4D4D4',
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
