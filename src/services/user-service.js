import axios from 'axios';

axios.defaults.baseURL = 'https://64664418ba7110b6639c25a1.mockapi.io/api/v1';

export const getUsers = async (page, pageSize) => {
  const response = await axios.get('/users', {
    params: {
      page: page,
      limit: pageSize,
    },
  });
  return {
    users: response.data,
    total: 20,
  };
};
