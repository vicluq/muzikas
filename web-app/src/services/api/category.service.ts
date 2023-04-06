import { Category } from "../../types/category";

type APIResponse = Category[] | {
      message: string,
      errorType?: string
}

class CategoryService {
  private url = process.env.REACT_APP_API_URL + "/category";

  async getCategories(token: string): Promise<APIResponse> {
    try {
      const resp: APIResponse = await fetch(this.url + '/getCategories', {
        headers: { Authorization: `Bearer ${token}` },
      }).then(res => res.json());

      return resp;
    } catch (e) {
      console.log(e);
      return { message: 'Something went wrong!' };
    }
  }

  async getCategory(token: string, id: number): Promise<APIResponse> {
      try {
        const resp: APIResponse = await fetch(this.url + `/getCategory/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json());
  
        return resp;
      } catch (e) {
        console.log(e);
        return { message: 'Something went wrong!' };
      }
    }
}
