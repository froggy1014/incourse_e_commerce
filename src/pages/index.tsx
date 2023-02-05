import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import axios from 'axios';

import MainPage from '@components/pages/MainPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer } from '@layout/components';

function Main({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>메인페이지</title>
      </Head>
      <MobileLayout content={<MainPage results={data} />} footer={<Footer />} />
    </>
  );
}

export async function getStaticProps() {
  const response = await axios(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}product/tag/`,
  );
  const data = await response.data;
  return {
    props: {
      data,
    },
  };
}

export default Main;
