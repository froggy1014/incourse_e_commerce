import { ComponentSingleStyleConfig } from '@chakra-ui/theme';

export const Divider: ComponentSingleStyleConfig = {
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {
    fullthin: {
      minW: '375px',
      transform: 'translateX(-16px)',
      h: '1px',
      bg: 'gray.200',
    },
    fullthick: {
      minW: '375px',
      transform: 'translateX(-16px)',
      h: '10px',
      bg: 'gray.200',
    },
  },
};
