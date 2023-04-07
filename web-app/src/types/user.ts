export interface User {
      name: string;
      email: string;
      token: string;
      picture?: any;
}

export interface UserPayload {
      name: string;
      email: string;
      token: string;
      picture?: any;
      password: string;
      confirmPassword: string;
}

export interface Supplier {}

export interface SupplierPayload {}