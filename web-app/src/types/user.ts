export interface User {
      id: number;
      name: string;
      email: string;
      token: string;
      picture?: string;
      tokenExpiration: number;
}

export interface UserPayload {
      name: string;
      email: string;
      token: string;
      picture?: any;
      password: string;
      confirmPassword: string;
}

export interface Supplier {
      id: number;
      email: string;
      name: string;
      username: string;
      cnpj: string;
      picture: string;
      description: string;
      address: string;
      complement: string;
      token: string;
      tokenExpiration: number;
}

export type SupplierPayload = Supplier & {
      password: string;
      confirmPassword: string;
}