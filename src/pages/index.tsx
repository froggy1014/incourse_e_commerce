import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import MainPage from '@components/MainPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';

import { reviewFetch } from '@utils/axios';

function Main({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { results } = data;
  return (
    <>
      <Head>
        <title>main</title>
      </Head>
      <MobileLayout
        content={<MainPage results={results} />}
        footer={<Footer />}
      />
    </>
  );
}

export async function getStaticProps() {
  const res = await reviewFetch('/');
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}

export default Main;
