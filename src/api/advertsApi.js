import axios from 'axios';

axios.defaults.baseURL = 'https://64ac4c9c9edb4181202f6743.mockapi.io';

export const limit = 8;

export const getAdverts = async (page = 1) => {
  const { data } = await axios.get(`/adverts?limit=${limit}&page=${page}`);
  return data;
};
