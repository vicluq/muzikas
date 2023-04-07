import { User, UserPayload, Supplier, SupplierPayload } from "../../types/user";
import { DataResponse, OperationResponse } from "../../types/api";

class AuthService {
  private token: string;
  private userURL = process.env.REACT_APP_API_URL + "/auth";
  private supplierURL = process.env.REACT_APP_API_URL + "/supplier";
  private headers: any = {};

  constructor(token: string) {
    this.token = token;
    this.headers["Authorization"] = `Bearer ${this.token}`;
  }

  get(
    data: { email?: string; password: string; username?: string },
    isSupplier: boolean
  ) {}

  add(
    data: Partial<UserPayload> | Partial<SupplierPayload>,
    isSupplier: boolean
  ) {}

  update(
    data: Partial<UserPayload> | Partial<SupplierPayload>,
    isSupplier: boolean
  ) {}

  delete(isSupplier: boolean) {}
}

export default AuthService;
