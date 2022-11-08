import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

import { getProductDetail } from '@apis/_axios/axiosGet';

import { CompleteModal } from '@components/common';
import { Loading, SubmitButton } from '@components/common';
import {
  AddPhotoIcon,
  DeletePhotoIcon,
  EmptyBigRatingIcon,
} from '@components/common/@Icons/UI';

import { QUERY_KEY } from '@constants/query-keys';
import { bytesToMB, fileToBase64, isBase64Img, isOverSize } from '@utils/file';
import { formatDateDash, intComma } from '@utils/format';

import { usePostReview } from './_hook/usePostReview';
import { usePresignedUrl } from './_hook/usePresignedUrl';

function MypagePostReviewPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const fileTrigger = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<string>('');
  // const [files, setFiles] = useState<File | undefined>();

  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [currentFileBase64, setCurrentFileBase64] = useState<
    string | ArrayBuffer | null
  >();
  const [base64Files, setBase64Files] = useState<string[] | unknown[]>([]);

  const { presignedUrl, setFiles, files, urls } = usePresignedUrl();
  const onSuccess = () => {
    setOpen(true);
  };
  const { postingReview, setBody, body } = usePostReview(onSuccess);

  /*--------------------------------------------------------------*/
  // onChange 핸들로
  const fileSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const storedFile = e.target.files?.[0];
    if (storedFile !== undefined) {
      setCurrentFile(storedFile);
      setFiles(storedFile);
    }
  };
  /*--------------------------------------------------------------*/
  // 현재 업로드된 사진을 base64로 바꾸고 변환하고 배열로 넣음.
  // base64로 변환한 문자열을 배열에 담기
  useEffect(() => {
    async function setter() {
      if (!currentFile) return;
      setCurrentFileBase64(await fileToBase64(currentFile));
    }
    setter();
  }, [currentFile]);

  useEffect(() => {
    if (typeof currentFileBase64 === 'string')
      setBase64Files((base64Files) => [...base64Files, currentFileBase64]);
  }, [currentFileBase64]);

  /*--------------------------------------------------------------*/
  // 재품 상세 정보 가져오기 위한 useQuery
  const { data: productDetail, isLoading } = useQuery(
    [`${QUERY_KEY.PRODUCT}`, router.query.productId],
    () => getProductDetail(Number(router.query.productId)),
  );

  /*--------------------------------------------------------------*/

  // 리뷰 작성 Submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postingReview();
  };

  useEffect(() => {
    setBody({
      ...body,
      rate: rating,
      content: content,
      reviewimagePath: urls,
    });
  }, [rating, content, urls]);
  /*--------------------------------------------------------------*/

  if (isLoading) return <Loading />;

  return (
    <form onSubmit={handleSubmit}>
      <Text variant="pageTitle">리뷰작성</Text>
      <Text fontWeight="bold" mb="18px">
        [{formatDateDash(router.query.created)}]
      </Text>
      <Stack>
        <HStack fontSize="12px">
          <Image
            boxSize="60px"
            src={productDetail?.photo}
            bg="gray.100"
            rounded="5px"
          />
          <Box>
            <Text fontWeight="bold">{productDetail?.name}</Text>
            <Text variant="normal12gray">
              {productDetail?.name} | {productDetail?.capacity}ml
            </Text>
            <Text variant="boldcommerse">
              {intComma(productDetail?.price)} 원/ {router.query.count}개
            </Text>
          </Box>
        </HStack>
      </Stack>
      <Divider my="20px" variant="fullthick" />
      <Box>
        <Text>별점</Text>
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
      </Box>
      <Divider my="20px" variant="fullthin" />
      <Box>
        <Text mb="20px">내용</Text>
        <Textarea
          placeholder="내용을 입력하세요."
          resize="none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          h="200px"
          required
        ></Textarea>
      </Box>

      <Divider my="20px" variant="fullthin" />

      <Text>사진첨부 ({base64Files.length}/3)</Text>
      <Stack my="20px">
        <Flex flexWrap="wrap" justify="flex-start">
          {base64Files.length !== 3 && (
            <Box mb="80px">
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
                <Box key={i} ml="20px" position="relative">
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
        onClose={() => setOpen(!open)}
        setOpen={setOpen}
      />
    </form>
  );
}

export default MypagePostReviewPage;
