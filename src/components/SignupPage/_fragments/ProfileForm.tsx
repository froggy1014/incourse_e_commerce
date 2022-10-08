import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { getCookie } from 'cookies-next';

import CompleteModal from '@components/common/GlobalModal/CompleteModal';

import { signupReq } from '@utils/axios';

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
  const [profile, setProfile] = useState<string | ArrayBuffer | null>(
    'data:image/png;base64,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',
  );
  const modalHandler = async () => {
    setOpen(!open);
  };
  const formData = useProfileForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ name, nickname, phone, email, gender, ages }) => {
      const data = {
        socialToken: getCookie('socialToken'),
        email: email,
        phone: phone.split('-').join(''),
        name: name,
        nickname: nickname,
        profile: 'https://www.naver.com/',
        gender: gender,
        age: ages,
        marketingAdAgree: true,
      };
      try {
        signupReq.post('user/register/', data).then((response) => {
          if (response.status === 201) {
            router.push('/');
          }
        });
      } catch (error: any) {
        console.log(error);
      }
      if (router.pathname === '/mypage/modifyprofile') modalHandler();
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
        title="회원정보 수정이 완료되었습니다."
        isOpen={open}
        onClose={() => modalHandler()}
      />
    </>
  );
};

export default ProfileFormPage;
