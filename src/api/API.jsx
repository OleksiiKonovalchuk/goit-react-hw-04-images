import axios from 'axios';
const instanse = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32082136-56f2ee8b0af07ef0cc9c117de',
    per_page: 12,
  },
});
export const searchImages = async (q, page = 1) => {
  const { data } = await instanse.get('/', { params: { q, page } });
  return data;
};
