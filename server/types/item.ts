import { Category } from './category';

export interface Item {
    id: number; // PK
    picture: any;
    name: string;
    desc?: string;
    price: number;
    inStock: number;
    categories: Partial<Category>[];
}