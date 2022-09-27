import React from 'react';

import useProfileForm from '../_hook/useProfieForm';
import ProfileFormContentView from './ProfileForm.view';

const ProfileFormPage = ({ signup }: { signup?: boolean }) => {
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
      signup={signup ? true : false}
    />
  );
};

export default ProfileFormPage;
