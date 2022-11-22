import { Icon, IconProps } from '@chakra-ui/react';

export const AddPhotoIcon = (props: IconProps) => (
  <Icon
    w="80px"
    h="80px"
    onClick={props.onClick}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="79"
      height="79"
      rx="4.5"
      stroke="#CBCED6"
      strokeDasharray="3 3"
    />
    <path
      d="M40 31V49"
      stroke="#CBCED6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M49 40H31"
      stroke="#CBCED6"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Icon>
);
