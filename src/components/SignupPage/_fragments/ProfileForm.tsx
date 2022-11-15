import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { getCookie, setCookie } from 'cookies-next';

import { patchGetMe } from '@apis/_axios/axiosPatch';
import { postRegister } from '@apis/_axios/axiosPost';

import { CompleteModal } from '@components/common';

import { ROUTES } from '@constants/routes';
import RegisterIds from '@utils/RegisterIds';

import useProfileForm from '../_hook/useProfieForm';
import ProfileFormContentView from './ProfileForm.view';

export interface UserInfo {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  gender: string;
  ages: number;
  id?: number;
  profile?: string;
}

const ProfileFormPage = ({ userInfo }: { userInfo?: UserInfo }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<string | ArrayBuffer | null>('');
  const formData = useProfileForm();

  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ name, nickname, phone, email, gender, ages }) => {
      if (router.pathname === ROUTES.MYPAGE.PROFILE) {
        const data = {
          email: email,
          phone: phone.split('-').join(''),
          name: name,
          nickname: nickname,
          profilePath: 'https://www.naver.com/',
          gender: gender,
          age: ages,
        };
        patchGetMe(data).then((response) => {
          if (response.status === 200) setOpen(!open);
        });
      }
      if (router.pathname === ROUTES.SIGNUP.MAIN) {
        const data = {
          socialToken: getCookie('socialToken'),
          email: email,
          phone: phone.split('-').join(''),
          name: name,
          nickname: nickname,
          profilePath: 'www.naver.com',
          gender: gender,
          age: ages,
          marketingAdAgree: true,
        };
        postRegister(data).then((response) => {
          setCookie('access', response.access);
          setCookie('refresh', response.refresh);
          RegisterIds();
          router.replace(ROUTES.SIGNUP.SUCCESS);
        });
      }
    },
  );

  return (
    <>
      <ProfileFormContentView
        formData={formData}
        onSubmit={onSubmit}
        userInfo={userInfo}
        setProfile={setProfile}
        profile={profile}
      />
      <CompleteModal
        title="회원정보가 수정이 완료되었습니다."
        linkTo="back"
        isOpen={open}
        onClose={() => setOpen(!open)}
        setOpen={setOpen}
      />
    </>
  );
};

export default ProfileFormPage;
