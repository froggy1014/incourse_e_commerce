import { Box, Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

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
      <Box
        as="section"
        minH="100%"
        position="relative"
        pb={footer ? `280px` : '0px'}
      >
        {content}
      </Box>
      {footer}
    </Container>
  );
};

export default MobileLayout;
