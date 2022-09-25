import { ComponentSingleStyleConfig } from '@chakra-ui/react';

export const Text: ComponentSingleStyleConfig = {
  baseStyle: {
    w: 'fit-content',
    h: 'fit-content',
    _focus: { boxShadow: 'none' },
  },
  variants: {
    bold16: {
      fontWeight: 'bold',
      fontSize: '16px',
      color: 'black',
    },
    bold20: {
      fontWeight: 'bold',
      fontSize: '20px',
      color: 'black',
    },
    bold20commerse: {
      fontWeight: 'bold',
      fontSize: '20px',
      color: 'commerse.500',
    },
    normal12gray: {
      fontWeight: 'normal',
      fontSize: '12px',
      color: 'gray.700',
    },
    normal16gray: {
      fontWeight: 'normal',
      fontSize: '16px',
      color: 'gray.700',
    },
    normal20gray: {
      fontWeight: 'normal',
      fontSize: '20px',
      color: 'gray.700',
    },
    normal16: {
      fontWeight: 'normal',
      fontSize: '16px',
      color: 'black',
    },
    normal20: {
      fontWeight: 'normal',
      fontSize: '20px',
      color: 'black',
    },
  },
  sizes: {},
};
