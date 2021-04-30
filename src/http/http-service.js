// const isEmptyValues = (obj) =>
//   obj && !Object.keys(obj).some((key) => Boolean(obj[key]));

const errorHandler = (res) => {
  if (!res.ok) {
    throw res;
  }

  return res;
};

const createQueryUrl = (url, params) => {
  //   if (isEmptyValues(params)) return url;
  if (Object.keys(params).length === 0) {
    return url;
  }

  let queryUrl = `${url}?`;
  Object.keys(params).forEach((key) => {
    const value = Array.isArray(params[key])
      ? params[key].join(",")
      : params[key];
    // console.log({ value });
    queryUrl += `${key}=${value}`;
  });

  return queryUrl;
};

class HttpService {
  get = (url, params) => {
    // console.log({ url, params });
    const properUrl = params ? createQueryUrl(url, params) : url;
    // console.log({ properUrl });
    return fetch(properUrl)
      .then((res) => res.json())
      .catch(errorHandler);
  };
}

export const httpService = new HttpService();
