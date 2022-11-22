import { Icon, IconProps } from '@chakra-ui/react';

export const DownVerticalArrow = (props: IconProps) => {
  const color = props.stroke;
  return (
    <Icon
      w="24px"
      h="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4209 9.328L11.9119 14.9191L5.17188 9.328"
        stroke={color === 'commerse' ? '#FF710B' : '#1A1A1A'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
