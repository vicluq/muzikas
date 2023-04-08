import { Category } from './category';

export interface Item {
    id: number; // PK
    supplierId: number; // FK
    picture: any;
    name: string;
    desc?: string;
    price: number;
    inStock: number;
    categories: Partial<Category>[];
}

export interface ItemDB {
    id: number; // PK
    supplierId: number;
    picture: any;
    name: string;
    desc?: string;
    price: number;
    inStock: number;
    categoryId: number;
}