import { border } from '@chakra-ui/react';
import { ComponentSingleStyleConfig } from '@chakra-ui/theme';

export const Textarea: ComponentSingleStyleConfig = {
  baseStyle: {
    _focus: {
      outlineColor: 'commerse.500',
      boxShadow: 'none',
      borderColor: 'commerse.500',
      outlineOffset: '-1px',
    },
    _focusWithin: {
      boxShadow: 'none',
      borderColor: 'commerse.500',
      outlineOffset: '-1px',
      outlineColor: 'commerse.500',
    },
  },
  defaultProps: {},
  sizes: {},
  variants: {},
};
