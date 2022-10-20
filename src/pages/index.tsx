import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import axios from 'axios';

import MainPage from '@components/MainPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';

function Main({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>main</title>
      </Head>
      <MobileLayout content={<MainPage results={data} />} footer={<Footer />} />
    </>
  );
}

export async function getStaticProps() {
  const response = await axios(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}product/tag/?tag_id=1`,
  );
  const data = await response.data;
  return {
    props: {
      data,
    },
  };
}

export default Main;
