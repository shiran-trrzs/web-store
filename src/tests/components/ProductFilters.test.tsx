import { vi } from "vitest";

vi.mock("../../store/useProductsStore", async () => {
    const mod = await import("../../__mocks__/store/useProductsStore");
    return {
        useProductsStore: mod.useProductsStore
    };
});

import { render, screen, fireEvent } from "@testing-library/react";
import ProductFilters from "../../components/ProductFilters";
import { mockUseProductsStore } from "../../__mocks__/store/useProductsStore";

describe("ProductFilters", () => {
    beforeEach(() => {
        mockUseProductsStore.filters = {};
        mockUseProductsStore.getProducts = vi.fn();
    });

    it("Renders brand and status select", () => {
        render(<ProductFilters />);
        expect(screen.getByLabelText(/marca/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/estado/i)).toBeInTheDocument();
    });

    it("Calls getProducts with the selected brand value", () => {
        render(<ProductFilters />);
        const marcaSelect = screen.getByLabelText(/marca/i);

        fireEvent.change(marcaSelect, { target: { value: "Marquis" } });

        expect(mockUseProductsStore.getProducts).toHaveBeenCalledWith({
            ...mockUseProductsStore.filters,
            brand: "Marquis",
            page: 0
        });
    });

    it("Calls getProducts with the selected status value", () => {
        render(<ProductFilters />);
        const estadoSelect = screen.getByLabelText(/estado/i);

        fireEvent.change(estadoSelect, { target: { value: "AVAILABLE" } });

        expect(mockUseProductsStore.getProducts).toHaveBeenCalledWith({
            ...mockUseProductsStore.filters,
            status: "AVAILABLE",
            page: 0
        });
    });
});