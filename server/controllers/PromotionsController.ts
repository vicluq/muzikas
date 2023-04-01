import { Request, Response } from "express"
import PromotionsService from "../models/Promotions.js"
import { Promotion } from "../types/promotions.js"
class InvalidParameterError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidParameterError'
  }
}
export class PromotionsController {
  private static validatePromotionIdParameter(req: Request) {

    const promotionId = Number(req.params.id)
    if (promotionId === undefined || Number.isNaN(promotionId)) {
      throw new InvalidParameterError("PromotionId is invalid")
    }
    return promotionId
  }

  private static validatePromotionBody(req: Request) {
    const promotion: Promotion = req.body
    if (promotion === undefined) {
      throw new TypeError("Promotion cannot be undefined")
    }
    return promotion
  }

  public static async getPromotion(req: Request, res: Response) {
    try {
      const promotionId = PromotionsController.validatePromotionIdParameter(req)
      const promotion = await new PromotionsService().get(promotionId)
      if (promotion) {
        res.send(promotion)
        return
      }
      else {
        res.statusCode = 404
        res.send({ message: "Promotion not found" })
        return
      }
    }
    catch (err) {
      if (err instanceof InvalidParameterError) {
        res.statusCode = 400
        res.send({ exception: err.name, message: err.message })
        return
      }
      res.send(err).status(500)
    }
  }
  public static async getPromotions(req: Request, res: Response) {
    try {
      const promotions = await new PromotionsService().getAll()
      console.info(promotions)
      if (promotions === undefined) {
        res.sendStatus(404)
        return;
      }
      res.send(promotions)
    } catch (err) {
      res.send(err).status(500)
    }
  }
  public static async savePromotion(req: Request, res: Response) {
    const promotion: Promotion = (req.body as Promotion)
    try {
      await new PromotionsService().insert(promotion)
      res.sendStatus(201)
    } catch (err) {
      console.error(err)
      res.send(err).status(500)
    }

  }
  public static async updatePromotion(req: Request, res: Response) {

    try {
      const promotion = PromotionsController.validatePromotionBody(req)
      const updated = await new PromotionsService().update(promotion)
      if (updated) {
        res.sendStatus(204)
        return
      }
      else {
        res.statusCode = 404
        res.send({ message: "Promotion not found" })
        return
      }
    }
    catch (err) {
      if (err instanceof InvalidParameterError) {
        res.statusCode = 400
        res.send({ exception: err.name, message: err.message })
        return
      }
      res.send(err).status(500)
    }
  }
  public static async deletePromotion(req: Request, res: Response) {
    try {
      const promotionId = PromotionsController.validatePromotionIdParameter(req)
      const deleted = await new PromotionsService().delete(promotionId)
      if (deleted) {
        res.sendStatus(204)
        return
      }
      else {
        res.statusCode = 404
        res.send({ message: "Promotion not found" })
        return
      }
    }
    catch (err) {
      if (err instanceof InvalidParameterError) {
        res.statusCode = 400
        res.send({ exception: err.name, message: err.message })
        return
      }
      res.send(err).status(500)
    }
  }
}