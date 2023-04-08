import { UserPayload, SupplierPayload } from "../../types/user";
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

  async get(
    data: { email?: string; password: string; username?: string },
    isSupplier: boolean
  ) {
    const url = isSupplier ? this.supplierURL : this.userURL;

    try {
      const resp: OperationResponse = await fetch(url + `/create`, {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async add(
    data: Partial<UserPayload> | Partial<SupplierPayload>,
    isSupplier: boolean
  ) {
    const url = isSupplier ? this.supplierURL : this.userURL;

    try {
      const resp: OperationResponse = await fetch(url + `/create`, {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async delete(id: number, isSupplier: boolean) {
    const url = isSupplier ? this.supplierURL : this.userURL;

    try {
      const resp: OperationResponse = await fetch(url + `/delete/${id}`, {
        method: "delete",
        headers: this.headers,
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }
}

export default AuthService;
