import { Request, Response } from "express"
export class PromotionsController {
  public static getPromotion(req: Request, res: Response) {
    try {
      const promotionName: string = req.params.name
      if (promotionName.length > 0 && promotionName !== undefined) {
        res.send({ "message": "promotions info" })
        return
      }
      throw Error('Invalid promotion name')
    }
    catch (err) {
      res.sendStatus(400) //send bad request 
    }
  }
  public static getPromotions(req: Request, res: Response) {
    res.sendStatus(200)
  }
  public static savePromotion(req: Request, res: Response) {
    res.sendStatus(201)
  }
  public static updatePromotion(req: Request, res: Response) {
    res.sendStatus(204)
  }
  public static deletePromotion(req: Request, res: Response) {
    res.sendStatus(204)
  }
}