import { Item, AddItem } from "../../types/item";
import { DataResponse, OperationResponse } from "../../types/api";

class ItemService {
  private token: string | undefined;
  private url = process.env.REACT_APP_API_URL + "/item";
  private headers: any = {};

  constructor(token?: string) {
    this.token = token;
    this.headers["Authorization"] = `Bearer ${this.token}`;
  }

  async getAll(query?: string, supplierId?: number): Promise<DataResponse<Item[]>> {
    let filters = query ? `query=${query}` : "";
    filters += supplierId
    ? `${filters ? "&" : ""}supplierId=${supplierId}`
    : "";
    
    try {
      const resp: DataResponse<Item[]> = await fetch(
        this.url + "/getItems" + (filters ? `?${filters}` : "")
      ).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async get(id: number): Promise<DataResponse<Item>> {
    try {
      const resp: DataResponse<Item> = await fetch(
        this.url + `/getItem/${id}`
      ).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async add(data: AddItem) {
    try {
      const resp: OperationResponse = await fetch(this.url + `/create`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: this.headers,
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async update(id: number, data: Partial<AddItem>) {
    try {
      const resp: OperationResponse = await fetch(this.url + `/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: this.headers,
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async delete(id: number) {
    try {
      const resp: OperationResponse = await fetch(this.url + `/delete/${id}`, {
        method: "DELETE",
        headers: this.headers,
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }
}

export default ItemService; // instanciar no componente
