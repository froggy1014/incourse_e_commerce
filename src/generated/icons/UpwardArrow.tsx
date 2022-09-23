import { Icon, IconProps } from '@chakra-ui/react';

export const UpwardIcon = (props: IconProps) => (
  <Icon
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    position="absolute"
    right="16px"
    bottom="20px"
    onClick={() => window.scrollTo(0, 0)}
  >
    <path
      d="M49.5 25C49.5 38.531 38.531 49.5 25 49.5C11.469 49.5 0.5 38.531 0.5 25C0.5 11.469 11.469 0.5 25 0.5C38.531 0.5 49.5 11.469 49.5 25Z"
      stroke="#1A1A1A"
    />
    <path
      d="M25 49.5C38.531 49.5 49.5 38.531 49.5 25C49.5 11.469 38.531 0.5 25 0.5C11.469 0.5 0.5 11.469 0.5 25C0.5 38.531 11.469 49.5 25 49.5Z"
      stroke="#1A1A1A"
    />
    <path
      d="M25.539 20.949V32.5H24.461V20.948V19.7407L23.6074 20.5945L18.455 25.7479L17.7071 25L25 17.7071L32.2929 25L31.545 25.7479L26.3926 20.5954L25.539 19.7419V20.949Z"
      fill="#1A1A1A"
      stroke="#1A1A1A"
    />
  </Icon>
);
