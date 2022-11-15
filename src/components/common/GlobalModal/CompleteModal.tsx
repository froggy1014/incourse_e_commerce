import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import {
  Modal,
  ModalBody,
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
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const CompleteModal = ({
  title,
  linkTo,
  setOpen,
  ...props
}: ModalExampleProps) => {
  const [destination] = useState(linkTo);
  const [trigger, setTrigger] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let n = trigger;
    setTrigger((n += 1));
    if (trigger === 2) {
      if (destination === 'back') router.back();
      else if (destination !== undefined) {
        router.replace(`${ROUTES[destination as keyof typeof ROUTES]}`);
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
              onClick={() => setOpen(false)}
            />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
