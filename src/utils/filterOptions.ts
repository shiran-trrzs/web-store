const brands = [
    { key: 0, value: "", label: "Todas" },
    { key: 1, value: "Samsung", label: "Samsung" },
    { key: 2, value: "LG", label: "LG" },
    { key: 3, value: "Sony", label: "Sony" },
    { key: 4, value: "Marquis", label: "Marquis" },
];

const states = [
    { key: "S0", value: "", label: "Todos" },
    { key: "S1", value: "AVAILABLE", label: "Disponible" },
    { key: "S2", value: "OUT_OF_STOCK", label: "Sin stock" }
];

const headers = [
    { key: "H01", label: "Nombre" },
    { key: "H02", label: "Tienda" },
    { key: "H03", label: "Precio normal" },
    { key: "H04", label: "Precio oferta" },
    { key: "H05", label: "Precio más bajo" },
    { key: "H06", label: "Descuento" }
];

const filtersConfig = [
    { id: "marca", label: "Marca", options: brands, filterKey: "brand" },
    { id: "estado", label: "Estado", options: states, filterKey: "status" }
];

export {
    brands,
    states,
    headers,
    filtersConfig
}