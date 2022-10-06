import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { socialLoginReq } from '@utils/axios';

function SocialloginCallback({ code, state }: { code: string; state: string }) {
  const router = useRouter();
  const social = { code: code, state: state };
  // { code: 'access token from messenger' state: 'messenger' }

  // socialLoginReq is custom Axios, it just simply has baseURL,
  // content-type : 'application/json';
  socialLoginReq.post('/', social).then((response) => {
    // response = { isRegister: false, socialToken: ' token from backend '}
    document.cookie = 'socialToken=' + response.data.socialToken;

    // re-direct to page depened on isRegister boolean
    if (!response.data.isRegister) router.push('/sign-up');
    else router.push('/');
  });
  return (
    <>
      <Head>
        <title>callback</title>
      </Head>
    </>
  );
}

// Get query-string in GetServerSideProps
// And I wanted to something re-direct feature here not on Code above.
// But couldn't find way to fetch in Serverside And keep showing me a Error 500.
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { code, state } = query;

  return {
    props: { code: code, state: state },
  };
};

export default SocialloginCallback;
