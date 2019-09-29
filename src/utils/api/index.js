import { create } from 'axios';

const urlencode = require('urlencode');

function api(accessToken) {
  const withToken = accessToken
    ? {
      // 'Access-Control-Request-Headers': 'X-AUTH-TOKEN',
      // 'Access-Control-Allow-Headers': 'X-AUTH-TOKEN, X-Requested-With',
      'X-AUTH-TOKEN': accessToken,
    }
    : {};

  const headers = {
    'Access-Control-Allow-Origin': '*',
    ...withToken,
  };

  const axios = create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    config: {
      // 'Access-Control-Allow-Origin': process.env.REACT_APP_API_URL,
      // headers: { 'Access-Control-Allow-Origin': '*' },
      headers,
    },
  });
  axios.defaults.headers = headers;

  const users = {};

  return {
    users,
  };
}

export default api;
