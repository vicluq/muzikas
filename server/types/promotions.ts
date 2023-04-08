export interface Promotion {
  id?: number,
  name: string,
  user?: string,
  value: number,
  isPercent: boolean,
  categoryId: number,
  category?: string,
  active: boolean
}