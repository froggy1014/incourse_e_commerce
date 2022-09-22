import { Container, ContainerProps } from '@chakra-ui/react';

import SignupHeader from './_fragments/SignupHeader';

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
}: MobileLayoutProps) => {
  return (
    <Container
      w="375px"
      h="auto"
      centerContent
      border="1px black solid"
      bg="beige"
    >
      {header ? header : null}
      {/* <Container pt={LAYOUT.HEADER.HEIGHT} {...containerProps}> */}
      {content}
      {/* </Container> */}
      {/* {footer} */}
    </Container>
  );
};

export default MobileLayout;
