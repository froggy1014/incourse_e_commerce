import React from 'react';

import {
  Button,
  Collapse,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import { DownVerticalArrow } from '@icons/index';

import { usePatchStatus } from '../_Hook/usePatchStatus';

const StatusMenu = ({ orderId }: { orderId: string }) => {
  const patchStatus = usePatchStatus();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = { oid: orderId, status: e.currentTarget.innerText };
    patchStatus(body);
  };
  return (
    <Menu autoSelect={false}>
      <MenuButton
        h="30px"
        mb="10px"
        as={Button}
        rightIcon={<DownVerticalArrow stroke="commerse" />}
        variant="btnwhite"
        _hover={{ transform: 'scale(1)' }}
      >
        Status
      </MenuButton>
      <MenuList color="commerse.500" fontWeight="bold" p="0">
        <MenuItem
          _hover={{ bg: 'commerse.500', color: 'white' }}
          rounded="5px"
          transitionDuration="200ms"
          onClick={(e) => handleClick(e)}
        >
          PAID
        </MenuItem>
        <MenuItem
          _hover={{ bg: 'commerse.500', color: 'white' }}
          rounded="5px"
          transitionDuration="200ms"
          onClick={(e) => handleClick(e)}
        >
          WAIT
        </MenuItem>
        <MenuItem
          _hover={{ bg: 'commerse.500', color: 'white' }}
          rounded="5px"
          transitionDuration="200ms"
          onClick={(e) => handleClick(e)}
        >
          INPROGRESS
        </MenuItem>
        <MenuItem
          _hover={{ bg: 'commerse.500', color: 'white' }}
          rounded="5px"
          transitionDuration="200ms"
          onClick={(e) => handleClick(e)}
        >
          DONE
        </MenuItem>
        <MenuItem
          _hover={{ bg: 'commerse.500', color: 'white' }}
          rounded="5px"
          transitionDuration="200ms"
          onClick={(e) => handleClick(e)}
        >
          CANCELED
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default StatusMenu;
