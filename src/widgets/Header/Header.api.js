import { $api } from '../../api/api';
import { useQuery } from '@tanstack/react-query';

export const getCategories = async () => {
  const response = await $api.get('/products/category-list');
  return response.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};