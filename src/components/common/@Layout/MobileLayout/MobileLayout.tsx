import { Box, Container, ContainerProps, Flex } from '@chakra-ui/react';

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
        w="100%"
        minH="100%"
        position="relative"
        pt={header ? `${LAYOUT.HEADER.HEIGHT}` : '0px'}
        pb={footer ? `280px` : '0px'}
      >
        {content}
      </Box>
      {footer}
    </Container>
  );
};

export default MobileLayout;
