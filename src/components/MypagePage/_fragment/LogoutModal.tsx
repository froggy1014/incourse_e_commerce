import { useRouter } from 'next/router';
import { useState } from 'react';

import { deleteCookie } from 'cookies-next';

import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  Stack,
  Text,
} from '@chakra-ui/react';

import { SubmitButton } from '@components/common/';

interface ModalExampleProps extends Omit<ModalProps, 'children'> {}
function LogoutModal({ ...props }: ModalExampleProps) {
  const router = useRouter();

  const handleLogout = async () => {
    console.log('click');
    deleteCookie('access');
    deleteCookie('refresh');
    deleteCookie('socialToken');
    router.push('/login');
  };

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent w="100%" maxW="343px" h="300px">
        <ModalBody>
          <Stack h="100%" align="center" justify="space-between" pb="33px">
            <Text fontWeight="bold" mt="110px">
              로그아웃 하시겠습니까?
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter px="15px">
          <Flex w="100%" justifyContent="space-between">
            <SubmitButton
              title="취소"
              variant="btnwhite"
              size="btnsm"
              onClick={() => props.onClose()}
            />
            <SubmitButton
              title="확인"
              variant="btncommerse"
              size="btnsm"
              onClick={handleLogout}
            />
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LogoutModal;
