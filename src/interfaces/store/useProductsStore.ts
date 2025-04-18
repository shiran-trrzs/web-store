import { Paging, Product } from "../Products";

export interface ProductStore {
	products: Product[];
	isLoading: boolean;
	paging: Paging | null;
	filters: {
		brand?: string;
		status?: string;
		page?: number;
	};
	getProducts: (filters?: {
		brand?: string;
		status?: string;
		page?: number;
	}) => Promise<void>;
	changePage: (page: number) => Promise<void>;
}