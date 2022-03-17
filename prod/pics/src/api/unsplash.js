import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID CJCd2g81zgUGVOxkSEGBOHWGRkvvBQHD8cLyPZvDsMA'
  }
});
