export const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (!kakao.isInitialized()) {
    kakao.init('130b767dca3e725b223ca2751868488d');
  }

  return kakao;
};
