import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#004358'
    },
    secondary: {
      700: '#E6E6E6'
    },
    blue: {
      700: '#BEE5F1',
      300: '#2D94BF',
    },
    green: {
      700: '#88D686',
      300: '#4EB677',
    },
    gray: {
      700: '#A99E9E', 
    },
    red:{
      700: '#B11010',
    },
    white: '#FFFFFF',
    black:'#000',
  },
 
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});