import { Category } from './category';

export interface Item {
      id: number;
      picture?: string;
      name: string;
      desc: string;
      price: number;
      inStock: number;
      supplierId: number;
      categories: number[];
      promotion?: any;
}

export interface AddItem {
      picture?: string;
      name: string;
      desc: string;
      price: number;
      inStock: number;
      supplierId: number;
      categories: number[]; // array de ids
};