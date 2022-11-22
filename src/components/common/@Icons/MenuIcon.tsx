import { Icon, IconProps } from '@chakra-ui/react';

export const MenuIcon = ({ ...props }: IconProps) => {
  return (
    <Icon w="24px" h="24px" viewBox="0 0 24 24" {...props}>
      <path d="M21 5H3V7.5H21V5Z" fill="currentColor" />
      <path d="M21 16H3V18.5H21V16Z" fill="currentColor" />
    </Icon>
  );
};
