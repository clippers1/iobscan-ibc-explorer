/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const API = axios.create({
  baseURL: '',
});

class HttpHelper {
  static async get(url, params) {
    const data = await API.get(url, params);
    if (data && data.status === 200) {
      return data.data;
    }
    console.error('request from server failed:', data);
    return null;
  }

  static async post(url, payload) {
    const data = await API.post(url, payload);
    if (data && data.status === 200) {
      return data.data;
    }
    console.error('request from server failed:', data);
    return null;
  }
}

export { HttpHelper };