import { useEffect } from "react";
import { useProductsStore } from "../store/useProductsStore";
import ProductsPagination from "./ProductsPagination";
import "../styles/components/ListedProducts.scss";
import { headers } from "../utils/filterOptions";

const ListedProducts = () => {
	const { products, isLoading, filters, getProducts } = useProductsStore();

	useEffect(() => {
		getProducts(filters);
	}, [filters, getProducts]);

	if (isLoading) return <div className="loader">Cargando productos...</div>;

	return (
		<div className="product-list-container">
			<table className="product-table">
				<thead>
					{headers.map((header) => (
						<tr key={header.key}>
							<th> {header.label} </th>
						</tr>
					))}
				</thead>
				<tbody>
					{products && products.length > 0 ? (
						products.map((product) => {
							const { name, sku, storeName, prices } = product;
							const discount = ((prices.normalPrice - prices.lowest) / prices.normalPrice) * 100;

							return (
								<tr key={sku}>
									<td>{name}</td>
									<td>{storeName}</td>
									<td>${prices.normalPrice?.toLocaleString()}</td>
									<td>${prices.offerPrice?.toLocaleString()}</td>
									<td>${prices.lowest.toLocaleString()}</td>
									<td>{discount.toFixed(2)}%</td>
								</tr>
							);
						})
					) : (
						<tr className="no-products">
							<td>No hay productos disponibles</td>
						</tr>
					)}
				</tbody>
			</table>
			<ProductsPagination />
		</div>
	)
}

export default ListedProducts;