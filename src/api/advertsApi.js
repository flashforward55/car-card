import axios from 'axios';

axios.defaults.baseURL = 'https://64ac4c9c9edb4181202f6743.mockapi.io';

export const getAdverts = async (page = 1, limit = 8, signal = null) => {
  const options = {
    params: { limit, page },
  };

  if (signal) options.signal = signal;

  const { data } = await axios.get('/adverts', options);

  return data;
};
