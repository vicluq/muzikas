import { UserPayload, SupplierPayload, User } from "../../types/user";
import { DataResponse, OperationResponse } from "../../types/api";

class AuthService {
  private userURL = "http://localhost:8080" + "/auth";
  private supplierURL = "http://localhost:8080" + "/supplier";

  async get(
    data: { email?: string; password: string; username?: string },
    isSupplier: boolean
  ) {
    const url = isSupplier ? this.supplierURL + '/login' : this.userURL;

    try {
      const resp: DataResponse<Partial<User>> = await fetch("http://localhost:8080"+url, {
        method: "POST",
        body: JSON.stringify(data),headers:{"Content-Type": "application/json"}
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
      const resp: DataResponse<Partial<User>> = await fetch(url + `/create`, {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async delete(id: number, token: string, isSupplier: boolean) {
    const url = isSupplier ? this.supplierURL : this.userURL;

    try {
      const resp: OperationResponse = await fetch(url + `/delete/${id}`, {
        method: "delete",
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }
}

export default AuthService;
