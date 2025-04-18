import { vi } from "vitest";

vi.mock("../../store/useProductsStore", async () => {
	const mod = await import("../../__mocks__/store/useProductsStore");
	return {
		useProductsStore: mod.useProductsStore
	};
});

import { render, screen } from "@testing-library/react";
import ListedProducts from "../../components/ListedProducts";
import { mockUseProductsStore } from "../../__mocks__/store/useProductsStore";
import { Status } from "../../interfaces/Products";

describe("ListedProducts", () => {
	beforeEach(() => {
		mockUseProductsStore.products = [];
		mockUseProductsStore.isLoading = false;
		mockUseProductsStore.paging = null;
		mockUseProductsStore.filters = {};
		mockUseProductsStore.getProducts = vi.fn();
		mockUseProductsStore.changePage = vi.fn();
	});

	it("Shows loading message when isLoading is true", () => {
		mockUseProductsStore.isLoading = true;

		render(<ListedProducts />);
		expect(screen.getByText(/Cargando productos/i)).toBeInTheDocument();
	});

	it("Shows message when products is empty", () => {
		mockUseProductsStore.isLoading = false;
		mockUseProductsStore.products = [];

		render(<ListedProducts />);
		expect(screen.getByText(/No hay productos disponibles/i)).toBeInTheDocument();
	});

	it("Shows products in the table", () => {
		mockUseProductsStore.isLoading = false;
		mockUseProductsStore.products = [
			{
				"productId": 358787341,
				"storeId": 5,
				"storeName": "Ripley",
				"name": "POLERON HOMBRE ELLUS S63913I24",
				"sku": "2000399900347",
				"brand": "ELLUS",
				"url": "https://simple.ripley.cl/poleron-hombre-ellus-s63913i24-2000399900309#2000399900347",
				"imageUrl": "https://home.ripley.cl/store/Attachment/WOP/D395/2000399900323/2000399900323_2.jpg",
				"status": Status.Available,
				"created": "2024-10-17T07:54:10Z",
				"updated": "2024-10-17T07:54:10Z",
				"extracted": "2024-11-19T13:53:54Z",
				"prices": {
					"lowest": 23990.0,
					"offerPrice": 23980.0,
					"normalPrice": 39990.0
				},
				"categories": {
					"web": [
						{
							"id": 693621,
							"categoryIdPath": "73113>693611>693612>693621",
							"fullPath": "Moda Hombre > Tops y Chaquetas > Polerones"
						},
						{
							"id": 1961385,
							"categoryIdPath": "73113>693611>1350391>1961385",
							"fullPath": "Moda Hombre > Destacado > Comfy"
						},
						{
							"id": 1961430,
							"categoryIdPath": "73113>693611>1961383>1961430",
							"fullPath": "Moda Hombre > Marcas Juveniles > Ellus"
						}
					],
					"internal": [
						{
							"id": 710881,
							"categoryIdPath": "606115>710769>710881",
							"fullPath": "D - HOMBRE > D395 - MARCAS JUVENIL NACIONAL HOMBRE"
						}
					]
				},
				"competitors": []
			}
		];

		render(<ListedProducts />);
		expect(screen.getByText("POLERON HOMBRE ELLUS S63913I24")).toBeInTheDocument();
		expect(screen.getByText("Ripley")).toBeInTheDocument();
		expect(screen.getByText("$39,990")).toBeInTheDocument();
		expect(screen.getByText("$23,990")).toBeInTheDocument();
		expect(screen.getByText("$23,980")).toBeInTheDocument();
		expect(screen.getByText("40.01%")).toBeInTheDocument();
	});
});
