import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/customsearch/v1';

const params = {
  key: 'AIzaSyBsjIGdvbe1LOkvtYhO3Z-2_fn1-zI6PfM',
  cx: '773a42f657bad4575',
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
