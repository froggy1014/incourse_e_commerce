type ObjType = {
  [key: string]: string;
};

export const cookieStringToObject = (cookieString: string | undefined) => {
  if (!cookieString) {
    return '';
  } else {
    const cookieStringArr = cookieString.split('; ');
    const result: ObjType = {};

    for (let i = 0; i < cookieStringArr.length; i++) {
      const cur = cookieString[i].split('=');
      result[cur[0]] = cur[1];
    }
    return result.access;
  }
};
