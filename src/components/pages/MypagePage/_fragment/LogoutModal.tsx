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

import { ROUTES } from '@constants/routes';
import { SubmitButton } from '@shareComponents/index';

interface ModalExampleProps extends Omit<ModalProps, 'children'> {}
function LogoutModal({ ...props }: ModalExampleProps) {
  const handleLogout = async () => {
    deleteCookie('access');
    deleteCookie('refresh');
    deleteCookie('userId');
    deleteCookie('cartId');
    window.location.replace(ROUTES.MAIN);
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
