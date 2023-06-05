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
    total: 30,
  };
};

export const updateFollows = async (id, followers) => {
  const response = await axios.put(`/users/${id}`, { followers });
  return response.data;
};

export const getUserById = async id => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};
