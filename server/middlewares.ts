import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import envs from './config/env.js';
import SupplierService from './models/Supplier.js';
import { AuthMiddlewareReq } from './types/auth.js';

export const requireJsonContent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isWriting = req.method === "POST" || req.method === "PUT";

  if (req.headers["content-type"] !== "application/json" && isWriting) {
    res.send({
      status: 400,
      message: "Server requires application/json",
      errorType: "content not allowed",
    });
  } else {
    next();
  }
};

// Supplier Auth
export const authMiddleware = async (
  req: AuthMiddlewareReq,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body)
  const authorizationHeader = req.get('Authorization'); // Bearer token

  const notAllowedResp = {
    message: "You do not have permission to do that!",
    errorType: "not allowed",
  }

  if(!authorizationHeader) {
    return res.status(403).send(notAllowedResp);
  }

  const token = authorizationHeader.split(' ')[1];

  const decoded = <any>jwt.verify(token, envs.JWT_SECRET);

  if(!decoded || !decoded.cnpj) {
    return res.status(403).send(notAllowedResp);
  }

  const supplier = await new SupplierService().getSupplier(decoded.email);

  req.supplierId = <number>supplier.id;

  next();
};
