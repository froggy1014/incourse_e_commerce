type ObjType = {
  [key: string]: string;
};

export const cookieStringToObject = (cookieString: string | undefined) => {
  if (!cookieString) {
    return '';
  } else {
    const cookieStringArr = cookieString.split('; ');
    // eslint-disable-next-line prefer-const
    let result: ObjType = {};

    for (let i = 0; i < cookieStringArr.length; i++) {
      const cur = cookieStringArr[i].split('=');
      result[cur[0]] = cur[1];
    }
    return result.access;
  }
};
