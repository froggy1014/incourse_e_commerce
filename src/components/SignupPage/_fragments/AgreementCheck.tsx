import React, { Dispatch, SetStateAction } from 'react';

import { Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import { AllCheckIcon, PassIcon } from '@icons/UI';

interface AgreementType {
  check: string[];
  setCheck: Dispatch<SetStateAction<string[]>>;
}

const AgreementCheck = ({ setCheck, check }: AgreementType) => {
  const handleAllCheck = () => {
    if (check.length !== 0) setCheck([]);
    else setCheck(['1', '2', '3']);
  };
  const handleCheck = (e: React.MouseEvent<HTMLElement>): void => {
    const id = e.currentTarget.id;
    if (check.indexOf(id) !== -1) {
      const newId = check.filter((num) => num !== id);
      setCheck(newId);
    } else setCheck([id, ...check]);
  };

  return (
    <>
      <Flex direction="column">
        <Flex
          justify="space-between"
          mb="7px"
          align="center"
          onClick={handleAllCheck}
        >
          <Heading
            as="h3"
            fontWeight="bold"
            fontSize="16px"
            color="commerse.500"
          >
            아래 약관에 모두 동의합니다.
          </Heading>
          <AllCheckIcon
            fill="white"
            stroke={check.length !== 0 ? 'commerse.500' : '#CBCED6'}
          />
        </Flex>
        <Divider orientation="horizontal" bg="commerse.500" h="2px" />
      </Flex>
      <VStack spacing="37px">
        <Flex
          justify="space-between"
          align="center"
          cursor="pointer"
          onClick={handleCheck}
          w="100%"
          id="1"
        >
          <a
            target="_blank"
            href="https://toktokhan.notion.site/6e7a309e8d14464cad38fc86656d564a"
            rel="noopener noreferrer"
          >
            <Text as="u" color="gray.600" fontWeight="400" fontSize="12px">
              서비스 이용을 위한 필수약관 동의
            </Text>
          </a>
          <PassIcon
            stroke={check.indexOf('1') !== -1 ? 'commerse.500' : '#CBCED6'}
          />
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          cursor="pointer"
          onClick={handleCheck}
          w="100%"
          id="2"
        >
          <a
            target="_blank"
            href="https://toktokhan.notion.site/3-2261ee2f25024c0a9b6a82a6f43fd0dc"
            rel="noopener noreferrer"
          >
            <Text as="u" color="gray.600" fontWeight="400" fontSize="12px">
              개인정보수집 및 이용, 제3자 제공 동의
            </Text>
          </a>
          <PassIcon
            stroke={check.indexOf('2') !== -1 ? 'commerse.500' : '#CBCED6'}
          />
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          cursor="pointer"
          onClick={handleCheck}
          w="100%"
          id="3"
        >
          <a
            target="_blank"
            href="https://toktokhan.notion.site/24f69842ebec48df89a3656bac7cf4c9"
            rel="noopener noreferrer"
          >
            <Text as="u" color="gray.600" fontWeight="400" fontSize="12px">
              마케팅 정보 수신 및 맞춤형 광고 동의(선택)
            </Text>
          </a>
          <PassIcon
            stroke={check.indexOf('3') !== -1 ? 'commerse.500' : '#CBCED6'}
          />
        </Flex>
      </VStack>
    </>
  );
};

export default AgreementCheck;
