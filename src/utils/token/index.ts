export const cookieStringToObject = (cookieString: string | undefined) => {
  if (!cookieString) {
    return '';
  } else {
    const cookieStringArr = cookieString.split('; ');
    // eslint-disable-next-line prefer-const
    let result: any = [];

    for (let i = 0; i < cookieStringArr.length; i++) {
      const cur = cookieStringArr[i].split('=');
      if (cur[0] === 'access' || cur[0] === 'refresh') result[cur[0]] = cur[1];
    }
    return result;
  }
};
