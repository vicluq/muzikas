import { Router } from "express";
import { PromotionsController } from "../controllers/PromotionsController.js";



const promotionsRouter = Router()
promotionsRouter.get('/:name', PromotionsController.getPromotion)
promotionsRouter.post('/', PromotionsController.savePromotion)
promotionsRouter.get('/', PromotionsController.getPromotions)
promotionsRouter.put('/', PromotionsController.updatePromotion)
promotionsRouter.delete('/:name', PromotionsController.deletePromotion)

export { promotionsRouter }