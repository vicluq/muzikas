export interface Promotion {
    id?: number;
    name: string;
    user: string;
    value: number;
    isPercent: boolean;
    category: string;
    active: boolean;
}