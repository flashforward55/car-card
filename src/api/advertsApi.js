import axios from 'axios';

axios.defaults.baseURL = 'https://64ac4c9c9edb4181202f6743.mockapi.io';

export const getAdverts = async (page = 1, limit = 10, signal = null) => {
  const options = {
    params: { limit, page },
  };

  if (signal) options.signal = signal;

  const { data } = await axios.get('/adverts', options);

  return data;
};

export const updateAdvert = async (id, updates) => {
  const { data } = await axios.put(`/adverts/${id}`, updates);

  return data;
};
