import Head from 'next/head';
import { useEffect, useState } from 'react';

import { get } from '@apis/_axios/request';

import MypagePage from '@components/MypagePage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function Mypage() {
  const [meinfo, setMeinfo] = useState();
  useEffect(() => {
    async function mypageFunc() {
      const data = await get('user/me/');
      setMeinfo(data);
    }
    mypageFunc();
  }, []);
  return (
    <>
      <Head>
        <title>mypage</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypagePage UserInfo={meinfo} />}
        footer={<Footer />}
      />
    </>
  );
}

export default Mypage;
