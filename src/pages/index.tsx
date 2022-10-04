import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import MainPage from '@components/MainPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';

import { AllReviewTypes } from '../components/MainPage/data';

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
  const res = await fetch('https://api.commerce.incourse.run/v1/review/');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Main;
