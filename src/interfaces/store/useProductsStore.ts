import { Paging, Product } from "../Products";

export interface ProductFilters {
	brand?: string;
	status?: string;
	page?: number;
}

export interface ProductStore {
	products: Product[];
	isLoading: boolean;
	paging: Paging | null;
	filters: ProductFilters;
	setFilters: (filter: ProductFilters) => void;
	getProducts: (filters?: ProductFilters) => Promise<void>;
	changePage: (page: number) => Promise<void>;
}