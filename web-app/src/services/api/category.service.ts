import { Category, AddCategory } from "../../types/category";
import { DataResponse, OperationResponse } from "../../types/api";

class CategoryService {
  private token: string;
  private url = process.env.REACT_APP_API_URL + "/category";
  private headers: any = {}

  constructor(token: string) {
    this.token = token;
    this.headers['Authorization'] = `Bearer ${this.token}`
  }

  async getAll(): Promise<DataResponse<Category[]>> {
    try {
      const resp: DataResponse<Category[]> = await fetch(this.url + "/getCategories", {
        headers: this.headers,
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async get(id: number): Promise<DataResponse<Category>> {
    try {
      const resp: DataResponse<Category> = await fetch(this.url + `/getCategory/${id}`, {
        headers: this.headers,
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async add(data: AddCategory) {
    try {
      const resp: OperationResponse = await fetch(this.url + `/create`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: this.headers,
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    }
  }

  async update(id: number, data: Partial<AddCategory>) {
    try {
      const resp: OperationResponse = await fetch(this.url + `/update/${id}`, {
        method: 'PUT',
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
        method: 'delete',
        headers: this.headers,
      }).then((res) => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: "Something went wrong!" };
    } 
  }
}

export default CategoryService; // instanciar no componente
