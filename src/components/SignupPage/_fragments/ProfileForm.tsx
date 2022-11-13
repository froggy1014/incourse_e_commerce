import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { getCookie, setCookie } from 'cookies-next';

import { CompleteModal } from '@components/common';

import { axiosInstance, signupReq } from '@utils/axios';

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
      if (router.pathname === '/mypage/modifyprofile') {
        const data = {
          email: email,
          phone: phone.split('-').join(''),
          name: name,
          nickname: nickname,
          profile: 'https://www.naver.com/',
          gender: gender,
          age: ages,
        };
        try {
          axiosInstance.patch('user/me/', data).then((response) => {
            if (response.status === 200) {
              setOpen(!open);
            }
          });
        } catch (error) {
          console.log(error);
        }
      } else {
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
        try {
          signupReq.post('user/register/', data).then((response) => {
            setCookie('access', response.data.access);
            setCookie('refresh', response.data.refresh);
            router.push('/');
          });
        } catch (error: any) {
          console.log(error);
        }
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
