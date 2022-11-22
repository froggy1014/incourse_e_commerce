import Head from 'next/head';
import { useEffect, useState } from 'react';

import { getMe } from '@apis/_axios/axiosGet';

import MypagePage from '@components/MypagePage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';
import { Loading } from '@shareComponents/index';

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
