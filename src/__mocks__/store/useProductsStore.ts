import { vi } from "vitest";
import { ProductStore } from "../../interfaces/store/useProductsStore";

export const mockUseProductsStore: ProductStore = {
    products: [],
    isLoading: false,
    paging: null,
    filters: {},
    getProducts: vi.fn(),
    changePage: vi.fn()
};

export const useProductsStore = vi.fn(() => mockUseProductsStore);