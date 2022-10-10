import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserInfo } from '@features/user/userSlice';

import MainPage from '@components/MainPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';

import { axiosInstance, reviewFetch } from '@utils/axios';

function Main({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { results } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance('user/me/')
      .then((res) => res.data)
      .then((data) => {
        dispatch(setUserInfo(data));
      });
  }, []);

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
  const response = await reviewFetch('/review/');
  const data = await response.data;
  return {
    props: {
      data,
    },
  };
}

export default Main;
