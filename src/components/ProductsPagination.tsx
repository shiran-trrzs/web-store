import { useProductsStore } from "../store/useProductsStore"
import "../styles/components/ProductsPagination.scss";

const ProductsPagination = () => {
    const paging = useProductsStore((state) => state.paging);
    const changePage = useProductsStore((state) => state.changePage);

    if (!paging) return null;

    const { currentPage, pages } = paging;

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            changePage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages - 1) {
            changePage(currentPage + 1);
        }
    }

    return (
        <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                Anterior
            </button>
            <span>Página {currentPage + 1} de {pages}</span>
            <button onClick={handleNextPage} disabled={currentPage >= pages - 1}>
                Siguiente
            </button>
        </div>
    )
}

export default ProductsPagination;