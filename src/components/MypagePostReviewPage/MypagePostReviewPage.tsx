import React, { useEffect, useRef, useState } from 'react';

import {
  Box,
  ChakraProps,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

import { AddPhotoIcon, EmptyBigRatingIcon } from '@components/common/@Icons/UI';

import { bytesToMB, fileToBase64, isBase64Img, isOverSize } from '@utils/file';
import { intComma } from '@utils/format';

interface MypagePostReviewPageProps extends ChakraProps {}

function MypagePostReviewPage({ ...basisProps }: MypagePostReviewPageProps) {
  const [rating, setRating] = useState(0);
  const fileTrigger = useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<File[]>([]);
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const [currentFileBase64, setCurrentFileBase64] = React.useState<
    string | ArrayBuffer | null
  >();
  const [base64Files, setBase64Files] = useState<string[] | unknown[]>([]);

  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file !== undefined) {
      setCurrentFile(file);
      setFiles((files) => [...files, file]);
    }
  };

  useEffect(() => {
    async function setter() {
      if (!currentFile) return;
      setCurrentFileBase64(await fileToBase64(currentFile));
    }
    setter();
  }, [currentFile]);

  useEffect(() => {
    if (
      currentFileBase64 !== undefined &&
      currentFileBase64 !== base64Files.at(-1)
    )
      setBase64Files((base64Files) => [...base64Files, currentFileBase64]);
  }, [currentFileBase64]);
  return (
    <Box {...basisProps}>
      <Text variant="pageTitle">리뷰작성</Text>
      <Text fontWeight="bold" mb="18px">
        [2021 - 04 - 01]
      </Text>
      <HStack fontSize="12px" justify="space-between">
        <HStack>
          <Image
            boxSize="60px"
            src="/images/orderHistory.png"
            bg="gray.100"
            rounded="5px"
          />
          <Box>
            <Text fontWeight="bold">샴푸 & 바디</Text>
            <Text variant="normal12gray">샴푸 & 바디 | 300ml</Text>
            <Text variant="boldcommerse">{intComma(27000)}원/ 1개</Text>
          </Box>
        </HStack>
      </HStack>
      <Stack>
        <Text py="10px">별점</Text>
        <Flex justify="center" py="20px">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i;
            return (
              <Box key={i}>
                <EmptyBigRatingIcon
                  checked={ratingValue < rating ? true : false}
                  id={ratingValue}
                  onClick={() => setRating(ratingValue + 1)}
                />
              </Box>
            );
          })}
        </Flex>
      </Stack>
      <Stack>
        <Text>내용</Text>
        <Textarea
          placeholder="내용을 입력하세요."
          resize="none"
          h="200px"
        ></Textarea>
      </Stack>
      <Stack my="20px">
        <Text>사진첨부 (0/3)</Text>
        <HStack py="20px" spacing="4">
          <input
            style={{ display: 'none' }}
            type="file"
            ref={fileTrigger}
            onChange={fileSelectedHandler}
          />
          <AddPhotoIcon
            onClick={() => {
              if (fileTrigger !== null && fileTrigger.current !== null)
                fileTrigger.current.click();
            }}
          />

          {base64Files.map((file, i) => {
            if (typeof file === 'string') {
              return (
                <Image
                  boxSize="80px"
                  objectFit="cover"
                  key={i}
                  src={file}
                  alt="upload img"
                />
              );
            }
          })}
        </HStack>
      </Stack>
    </Box>
  );
}

export default MypagePostReviewPage;
