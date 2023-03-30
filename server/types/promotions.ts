export interface Promotion {
  id?: number,
  name: string,
  userEmail: string,
  value: number,
  isPercent: boolean,
  category: string
}