import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { UseMutateFunction, useMutation } from 'react-query';

import axios from 'axios';

interface IResignedUrl {
  url: string;
}

axios.defaults.baseURL = 'https://api.commerce.incourse.run/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'file.type';

async function getPresignedUrl(files: File): Promise<IResignedUrl> {
  const res = await axios
    .post('presigned_url/', { name: files.name })
    .catch((error) => console.log(error));
  const data = res?.data;
  return data;
}

async function upLoadImage(
  file: File | undefined,
  url: string,
): Promise<IResignedUrl> {
  console.log(file, url);
  return await axios.put(url, file);
}

interface UsePresignedUrl {
  presignedUrl: UseMutateFunction<IResignedUrl, unknown, void, unknown>;
  setFiles: Dispatch<SetStateAction<File | undefined>>;
  urls: string[];
  files: File | undefined;
}

export const usePresignedUrl = (): UsePresignedUrl => {
  const [files, setFiles] = useState<File>();
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    if (files) presignedUrl();
  }, [files]);

  const { mutate: presignedUrl } = useMutation(() => getPresignedUrl(files!), {
    onSuccess: async (data) => {
      const dividedUrl = data.url.split('com/')[1].split('?')[0];
      console.log(dividedUrl);
      const res = await upLoadImage(files, data.url);
      setUrls((urls) => [...urls, dividedUrl]);
    },
  });
  return { files, presignedUrl, setFiles, urls };
};
