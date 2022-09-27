import React from 'react';

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
  const formData = useProfileForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ name, nickname, phone, email, gender, ages }) => {
      console.log(
        `submit: ${name} ${nickname} ${phone} ${email} ${gender} ${ages}`,
      );
    },
  );
  return (
    <ProfileFormContentView
      formData={formData}
      onSubmit={onSubmit}
      userInfo={userInfo}
    />
  );
};

export default ProfileFormPage;
