const errorHandler = (res: any) => {
  if (!res.ok) {
    throw res;
  }

  return res;
};

interface searchParams {
  [key: string]: string | Array<string>
}

const createQueryUrl = (url: string, params: searchParams) => {
  if (Object.keys(params).length === 0) {
    return url;
  }

  let queryUrl = `${url}?`;
  Object.keys(params).forEach((key) => {
    const value = Array.isArray(params[key])
    // @ts-ignore
      ? params[key].join(",")
      : params[key];
    queryUrl += `${key}=${value}`;
  });

  return queryUrl;
};

class HttpService {
  get = (url: string, params?: searchParams) => {
    const properUrl = params ? createQueryUrl(url, params) : url;
    return fetch(properUrl)
      .then((res) => res.json())
      .catch(errorHandler);
  };
}

export const httpService = new HttpService();
