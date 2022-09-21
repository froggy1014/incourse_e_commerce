import React, { Fragment } from 'react';

import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { AllCheckIcon } from 'generated/icons/AllCheckIcon';
import { PassIcon } from 'generated/icons/PassIcon';

const AgreementCheck = () => {
  return (
    <>
      <Flex direction="column">
        <Flex justify="space-between" mb="7px" align="center">
          <Heading
            as="h3"
            fontWeight="bold"
            fontSize="16px"
            color="commerse.500"
          >
            아래 약관에 모두 동의합니다.
          </Heading>
          <AllCheckIcon fill="white" />
        </Flex>
        <Divider orientation="horizontal" bg="commerse.500" h="2px" />
      </Flex>
      <VStack spacing="37px">
        <Flex justify="space-between" align="center" width="100%">
          <a
            target="_blank"
            href="https://toktokhan.notion.site/FE-7cef12733dc44a62aa2e036362eed4d6"
            rel="noopener noreferrer"
          >
            <Text as="u" color="gray.600" fontWeight="400" fontSize="12px">
              서비스 이용을 위한 필수약관 동의
            </Text>
          </a>
          <PassIcon />
        </Flex>
        <Flex justify="space-between" align="center" width="100%">
          <a
            target="_blank"
            href="https://toktokhan.notion.site/FE-7cef12733dc44a62aa2e036362eed4d6"
            rel="noopener noreferrer"
          >
            <Text as="u" color="gray.600" fontWeight="400" fontSize="12px">
              서비스 이용을 위한 필수약관 동의
            </Text>
          </a>
          <PassIcon />
        </Flex>
        <Flex justify="space-between" align="center" width="100%">
          <a
            target="_blank"
            href="https://toktokhan.notion.site/FE-7cef12733dc44a62aa2e036362eed4d6"
            rel="noopener noreferrer"
          >
            <Text as="u" color="gray.600" fontWeight="400" fontSize="12px">
              서비스 이용을 위한 필수약관 동의
            </Text>
          </a>
          <PassIcon />
        </Flex>
      </VStack>
    </>
  );
};

export default AgreementCheck;
