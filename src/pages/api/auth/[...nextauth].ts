import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';

const { KakaoProvider_ID = process.env.KAKAO_CLIENT_ID } = process.env;

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: KakaoProvider_ID !== undefined ? KakaoProvider_ID : '',
      clientSecret: KakaoProvider_ID !== undefined ? KakaoProvider_ID : '',
    }),
  ],
});
