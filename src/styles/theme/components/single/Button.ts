import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import { StyleObjectOrFn } from '@chakra-ui/styled-system';

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
  border?: string;
};

const accessibleColorMap: { [key: string]: AccessibleColor } = {
  kakao: {
    bg: 'kakao.500',
    color: '#1A1A1A',
    hoverBg: 'kakao.600',
    activeBg: 'kakao.700',
  },
  naver: {
    bg: 'naver.500',
    color: '#FFFFFF',
    hoverBg: 'naver.600',
    activeBg: 'naver.700',
  },
  facebook: {
    bg: 'facebook.500',
    color: '#FFFFFF',
    hoverBg: 'facebook.600',
    activeBg: 'facebook.700',
  },
  apple: {
    bg: 'apple.500',
    color: '#FFFFFF',
    hoverBg: 'apple.600',
    activeBg: 'apple.700',
  },
  google: {
    bg: 'google.500',
    color: '#808080',
    hoverBg: 'google.600',
    activeBg: 'google.700',
    border: '#DDDDDD',
  },
};

const variantSolid: StyleObjectOrFn = (props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    const bg = 'gray.100';
    return {
      bg,
      _hover: {
        bg: 'gray.100',
        _disabled: {
          bg,
        },
      },
      _active: { bg: 'gray.300' },
    };
  }

  const {
    bg = `${c}.500`,
    color = 'white',
    hoverBg = `${c}`,
    activeBg = `${c}`,
    border = `${c}.500`,
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,
    borderColor: borderColor,
    _hover: {
      transform: 'scale(1.02)',
      bg: `${c}`,
      borderColor: hoverBg,
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: activeBg, borderColor: activeBg },
  };
};

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    w: 'fit-content',
    h: 'fit-content',
    _focus: { boxShadow: 'none' },
  },
  variants: {
    solid: variantSolid,
    review: {
      borderRadius: '100px',
      bg: 'gray.200',
      mr: '10px',
      my: '50px',
      px: '15px',
      py: '6px',
      fontWeight: '400',
      boxSize: 'border-box',
    },
    btncommerse: {
      bg: 'commerse.500',
      color: 'white',
      _hover: {
        transform: 'scale(1.02)',
        _disabled: {
          transform: 'scale(1.00)',
          bg: 'commerse.500',
        },
      },
    },
    btnwhite: {
      bg: 'white',
      color: 'commerse.500',
      _hover: {
        transform: 'scale(1.02)',
        _disabled: {
          transform: 'scale(1.00)',
          bg: 'white',
        },
      },
    },
    btntoggle: {
      bg: 'white',
      color: 'gray.600',
      fontWeight: '400',
      fontSize: '16px',
      h: 'auto',
      _hover: {
        fontWeight: 'bold',
        color: 'commerse.500',
      },
    },
  },
  sizes: {
    btnsm: {
      w: '150px',
      h: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      mb: '30px',
    },
    btnmd: {
      w: '190px',
      h: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      mb: '30px',
    },
    btnlg: {
      w: '100%',
      h: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      mb: '50px',
    },
    lg: {
      h: '50px',
      fontSize: ['16px', '14px', '15px'],
      px: '15px',
    },
    md: {
      h: '40px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    sm: {
      h: '30px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    xs: {
      h: '26px',
      fontSize: ['12px', '10px', '12px'],
      px: '8px',
    },
  },
};
