import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

export const BASE_URL = getConfig().publicRuntimeConfig.API_URL;
export const { API_URL_WS } = getConfig().publicRuntimeConfig;

const apiFetch = async (url, ...rest) => {
  const res = await fetch(BASE_URL + url, ...rest);

  if (Math.floor(res.status / 100) === 2) {
    return res.json();
  }

  const err = new Error(`Неожиданный код ответа сервера: ${res.status}`);
  err.status = res.status;
  throw err;
};

export default apiFetch;
