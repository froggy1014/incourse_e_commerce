import React from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { UseFormSetValue } from 'react-hook-form/dist/types';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { FormDataType } from '../_hooks/useFormValidate';

interface AddressModalProps {
  setValue: UseFormSetValue<FormDataType>;
  isOpen: boolean;
  onClose: () => void;
}

function AddressModal({
  isOpen,
  onClose,
  setValue,
  ...basisProps
}: AddressModalProps) {
  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setValue('address', fullAddress + ' ' + data.zonecode);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...basisProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>주소 검색</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <DaumPostcodeEmbed onComplete={handleComplete} {...basisProps} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddressModal;
