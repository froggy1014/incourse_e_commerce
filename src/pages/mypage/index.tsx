import Head from 'next/head';
import { useEffect, useState } from 'react';

import { getMe } from '@apis/_axios/axiosGet';

import MypagePage from '@components/MypagePage';
import { Loading } from '@components/common';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function Mypage() {
  const [meinfo, setMeinfo] = useState();
  useEffect(() => {
    async function mypageFunc() {
      const data = await getMe();
      setMeinfo(data);
    }
    mypageFunc();
  }, []);

  if (!meinfo) return <Loading />;

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
