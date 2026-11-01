import { useQuery } from '@tanstack/react-query';
import { $api } from '../../api/api';

const getByMainPage = async () => {
  const response = await $api.get('/products');
  return response.data.products;
};

export const useMainPage = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getByMainPage,
  });
};

const getByMainPageId = async (id) => {
  const response = await $api.get(`/products/${id}`);
  return response.data;
};

export const useMainpageId = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getByMainPageId(id),
    enabled: !!id,
  });
};