import { GetQueryParams } from "../interfaces/api/getProducts";
import { ProductsResponse } from "../interfaces/Products";
import { API_KEY, BASE_URL } from "./config";

export const getProducts = async ({ brand, status, page }: GetQueryParams): Promise<ProductsResponse> => {
    const params = new URLSearchParams();
    if (brand) params.append('brand', brand);
    if (status) params.append('status', status);
    if (page != null) params.append('page', page.toString());

    const response = await fetch(`${BASE_URL}/pricing/v1/products?${params}`, {
        headers: {
            'apikey': API_KEY
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to get products: ${response.statusText}`);
    }

    return response.json();
}