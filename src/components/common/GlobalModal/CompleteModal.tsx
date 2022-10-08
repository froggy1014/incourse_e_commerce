import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
  Stack,
  Text,
} from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

import { SubmitButton } from '../SubmitButton/SubmitButton';

interface ModalExampleProps extends Omit<ModalProps, 'children'> {
  title: string;
  linkTo?: string;
}
function CompleteModal({ title, linkTo, ...props }: ModalExampleProps) {
  const [destination, setDestination] = useState(linkTo);
  const [trigger, setTrigger] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let n = trigger;
    setTrigger((n += 1));
    if (trigger === 2) {
      if (destination === 'back') router.back();
      else if (destination !== undefined) {
        router.push(`${ROUTES[destination as keyof typeof ROUTES]}`);
      }
    }
  }, [props.isOpen]);

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent w="100%" maxW="343px" h="300px">
        <ModalBody>
          <Stack h="100%" align="center" justify="space-between" pb="33px">
            <Text fontWeight="bold" mt="110px">
              {title}
            </Text>
            <SubmitButton
              title="확인"
              variant="btncommerse"
              size="btnmd"
              onClick={() => props.onClose()}
            />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CompleteModal;
