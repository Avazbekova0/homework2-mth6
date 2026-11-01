import { useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api"

const getByCategoryProducts = async (catigory) => {
    const response = await $api.get(`/products/category/${catigory}`)
    return response.data.products;
}


export const useCategoriesList = (slug) => {
    return useQuery({
        queryKey: ['products', 'categories', slug],
        queryFn: () => getByCategoryProducts(slug),
        enabled: !! slug
    })
};