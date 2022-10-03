import { useRouter } from 'next/router';
import React, { useState } from 'react';

import CompleteModal from '@components/common/GlobalModal/CompleteModal';

import useProfileForm from '../_hook/useProfieForm';
import ProfileFormContentView from './ProfileForm.view';

interface UserInfo {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  gender: string;
  ages: string;
}

const ProfileFormPage = ({ userInfo }: { userInfo?: UserInfo }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const modalHandler = async () => {
    setOpen(!open);
  };
  const formData = useProfileForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ name, nickname, phone, email, gender, ages }) => {
      console.log(
        `submit: ${name} ${nickname} ${phone} ${email} ${gender} ${ages}`,
      );
      if (router.pathname === '/mypage/modifyprofile') modalHandler();
    },
  );
  return (
    <>
      <ProfileFormContentView
        formData={formData}
        onSubmit={onSubmit}
        userInfo={userInfo}
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
