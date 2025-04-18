import { create } from "zustand";
import { getProducts } from "../api/getProducts";
import { ProductStore } from "../interfaces/store/useProductsStore";

export const useProductsStore = create<ProductStore>((set, get) => ({
    products: [],
    isLoading: false,
    paging: null,
    filters: {},
    getProducts: async (filters = {}) => {
        set({ isLoading: true, filters });

        try {
            const response = await getProducts(filters);
            set({ products: response.products, paging: response.paging, isLoading: false });
        } catch (error) {
            console.error('Error getting products:', error);
            set({ isLoading: false });
        }
    },
    changePage: async (page) => {
        const { filters, getProducts } = get();
        await getProducts({ ...filters, page });
    },
}))