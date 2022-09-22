import { Flex, IconButton } from '@chakra-ui/react';

import CartIcon from '@components/common/@Icons/System/Cart';
import MenuIcon from '@components/common/@Icons/System/Menu';

import Logo from 'generated/icons/Logo';

const MainHeader = () => {
  return (
    <>
      <Flex w="100%" h="80px" justify="space-between" align="center">
        <IconButton
          aria-label="MenuIcon"
          icon={<MenuIcon />}
          bg="transparent"
        />
        <Logo size="sm" />
        <IconButton
          aria-label="CartIcon"
          icon={<CartIcon />}
          bg="transparent"
        />
      </Flex>
    </>
  );
};

export default MainHeader;
