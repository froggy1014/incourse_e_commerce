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
    normal16: {
      fontWeight: 'normal',
      fontSize: '16px',
      color: 'black',
    },
  },
  sizes: {},
};
