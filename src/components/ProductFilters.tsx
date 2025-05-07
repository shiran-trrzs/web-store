import { useProductsStore } from "../store/useProductsStore";
import { filtersConfig } from "../utils/filterOptions";
import "../styles/components/ProductFilters.scss";

const ProductFilters = () => {
    const { filters, setFilters } = useProductsStore();

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>, filterKey: string) => {
        setFilters({ ...filters, [filterKey]: event.target.value, page: 0 })
    }

    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">Filtrar productos</h2>
            {filtersConfig.map(({ id, label, options, filterKey }) => (
                <div className="sidebar-filters" key={id}>
                    <label htmlFor={id}>
                        {label}:
                    </label>
                    <select id={id} defaultValue="" onChange={(e) => handleFilterChange(e, filterKey)}>
                        {options.map(({ key, value, label }) => (
                            <option key={key} value={value}> {label} </option>
                        ))}
                    </select>
                </div>
            ))}
        </aside>
    )
}

export default ProductFilters;