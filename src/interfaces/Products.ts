export interface ProductsResponse {
    paging:   Paging;
    products: Product[];
}

export interface Paging {
    total:       number;
    pages:       number;
    size:        number;
    currentPage: number;
}

export interface Product {
    productId:   number;
    storeId:     number;
    storeName:   string;
    name:        string;
    sku:         string;
    brand:       string;
    url:         string;
    imageUrl:    string;
    status:      Status;
    created:     string;
    updated:     string;
    extracted:   string;
    prices:      ProductPrices;
    categories:  Categories;
    competitors: Competitor[];
    model?:      string;
}

export interface Categories {
    web?:      Internal[];
    internal?: Internal[];
}

export interface Internal {
    id:             number;
    categoryIdPath: string;
    fullPath:       string;
}

export interface Competitor {
    productId:   number;
    storeId:     number;
    storeName:   string;
    name:        string;
    sku:         string;
    brand:       string;
    model:       string;
    url:         string;
    imageUrl:    string;
    status:      Status;
    matchStatus: string;
    created:     Date;
    updated:     Date;
    extracted:   Date;
    prices:      CompetitorPrices;
}

export interface CompetitorPrices {
    lowest:      number;
    normalPrice: number;
}

export enum Status {
    Available = "AVAILABLE",
    OUT_OF_STOCK = "OUT_OF_STOCK",
}

export interface ProductPrices {
    lowest:      number;
    offerPrice?: number;
    normalPrice: number;
    cardPrice?:  number;
}
