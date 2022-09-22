import { Box, Container, ContainerProps } from '@chakra-ui/react';

interface MobileLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const MobileLayout = ({
  //
  header,
  content,
  footer,
}: MobileLayoutProps) => {
  return (
    <Container w="375px" h="auto" centerContent>
      {header}
      <Box as="section" pb="290px" minH="100%" position="relative">
        {content}
      </Box>
      {footer}
    </Container>
  );
};

export default MobileLayout;
