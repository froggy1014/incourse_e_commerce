import { useRouter } from 'next/router';
import React from 'react';
import { Dispatch, SetStateAction } from 'react';

import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalProps,
  Stack,
  Text,
} from '@chakra-ui/react';

import { usePatchStatus } from '@components/pages/MypageOrderhistoryPage/_Hook/usePatchStatus';

import { SubmitButton } from '@shareComponents/index';

interface ModalExampleProps extends Omit<ModalProps, 'children'> {
  title: string;
  orderId?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setCanceled: Dispatch<SetStateAction<boolean>>;
}

export const AskModal = ({
  title,
  setOpen,
  setCanceled,
  orderId,
  ...props
}: ModalExampleProps) => {
  const router = useRouter();
  const patchStatus = usePatchStatus();

  const handleClick = () => {
    if (router.pathname.includes('orderhistory') && orderId !== undefined) {
      patchStatus({ id: orderId, shippingStatus: 'CANCELED' });
      setOpen(false);
      setCanceled(true);
    }
  };

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent w="100%" maxW="343px" h="300px">
        <ModalBody>
          <Stack h="100%" align="center" justify="space-between">
            <Text fontWeight="bold" pt="100px">
              {title}
            </Text>
            <Flex justify="space-evenly" w="320px">
              <SubmitButton
                title="취소"
                variant="btnwhite"
                size="btnsm"
                onClick={() => setOpen(false)}
              />
              <SubmitButton
                title="확인"
                variant="btncommerse"
                size="btnsm"
                onClick={() => handleClick()}
              />
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
