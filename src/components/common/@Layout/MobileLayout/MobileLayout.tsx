import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

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
  footer,
  containerProps,
  content,
}: MobileLayoutProps) => {
  return (
    <Container w="375px" h="auto" border="1px black solid">
      {header ? <SignupHeader /> : <h1>Header</h1>}
      {/* <Container pt={LAYOUT.HEADER.HEIGHT} {...containerProps}> */}
      {content}
      {/* </Container> */}
      {/* {footer} */}
    </Container>
  );
};

export default MobileLayout;
