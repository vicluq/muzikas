export interface User {
      name: string;
      email: string;
      token: string;
      picture?: string;
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
      email: string;
      name: string;
      username: string;
      cnpj: string;
      picture: string;
      description: string;
      address: string;
      complement: string;
      token: string;
}

export type SupplierPayload = Supplier & {
      password: string;
      confirmPassword: string;
}