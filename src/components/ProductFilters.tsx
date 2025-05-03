import { useProductsStore } from "../store/useProductsStore";
import { brands, states } from "../utils/filterOptions";
import "../styles/components/ProductFilters.scss";

const ProductFilters = () => {
    const { filters, setFilters } = useProductsStore();

    const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, brand: event.target.value, page: 0 });
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, status: event.target.value, page: 0 });
    }

    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">Filtrar productos</h2>
            <div className="sidebar-filters">
                <label htmlFor="marca">
                    Marca:
                </label>
                <select id="marca" onChange={handleBrandChange} defaultValue="">
                    {brands.map((brand) => (
                        <option key={brand.key} value={brand.value}> {brand.label} </option>
                    ))}
                </select>
            </div>
            <div className="sidebar-filters">
                <label htmlFor="estado">
                    Estado:
                </label>
                <select id="estado" onChange={handleStatusChange} defaultValue="">
                    {states.map((state) => (
                        <option key={state.key} value={state.value}> {state.label} </option>
                    ))}
                </select>

            </div>
        </aside>
    )
}

export default ProductFilters;