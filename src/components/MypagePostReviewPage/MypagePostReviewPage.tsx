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

import { SubmitButton } from '@components/common';
import {
  AddPhotoIcon,
  DeletePhotoIcon,
  EmptyBigRatingIcon,
} from '@components/common/@Icons/UI';
import CompleteModal from '@components/common/GlobalModal/CompleteModal';

import { bytesToMB, fileToBase64, isBase64Img, isOverSize } from '@utils/file';
import { intComma } from '@utils/format';

interface MypagePostReviewPageProps extends ChakraProps {}

function MypagePostReviewPage({ ...basisProps }: MypagePostReviewPageProps) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const fileTrigger = useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<File[]>([]);
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const [currentFileBase64, setCurrentFileBase64] = React.useState<
    string | ArrayBuffer | null
  >();
  const [base64Files, setBase64Files] = useState<string[] | unknown[]>([]);

  const modalHandler = async () => {
    setOpen(!open);
  };

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    modalHandler();
  };

  return (
    <form onSubmit={handleSubmit}>
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
          required
        ></Textarea>
      </Stack>
      <Text pt="20px">사진첨부 ({base64Files.length}/3)</Text>
      <Stack my="20px">
        <Flex flexWrap="wrap" justify="flex-start">
          {base64Files.length !== 3 && (
            <Box m="10px">
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
            </Box>
          )}
          {base64Files.map((file, i) => {
            if (typeof file === 'string') {
              return (
                <Box key={i} m="10px" position="relative">
                  <Image
                    boxSize="80px"
                    objectFit="cover"
                    key={i}
                    src={file}
                    alt="upload img"
                  />
                  <Box
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    onClick={() =>
                      setBase64Files((base64Files) => {
                        return base64Files.filter((base64) => base64 !== file);
                      })
                    }
                  >
                    <DeletePhotoIcon />
                  </Box>
                </Box>
              );
            }
          })}
        </Flex>
      </Stack>
      <SubmitButton title="작성하기" size="btnlg" variant="btncommerse" />
      <CompleteModal
        title="리뷰작성이 완료되었습니다."
        linkTo="back"
        isOpen={open}
        onClose={() => modalHandler()}
      />
    </form>
  );
}

export default MypagePostReviewPage;
