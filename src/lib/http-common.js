import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.VUE_APP_API,
  params: {
    mode: 'no-cors',
    crossDomain: true,
  },
  withCredentials: false,
});
