import envs from "../config/env"
import DatabaseClient from "../db/client";
import { Promotion } from "../types/promotions";

export default class PromotionsService {
  private dbClient: DatabaseClient;
  constructor() {
    this.dbClient = new DatabaseClient(envs.DB_URL)
  }
  public insert(promotion: Promotion) {
    this.dbClient.connect()

  }
  public get(promotionId: number) { }
  public getAll() { }
  public update(promotion: Promotion) { }
  public delete(promotionName: string) { }
}