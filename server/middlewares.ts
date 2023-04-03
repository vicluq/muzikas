import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import envs from './config/env.js';

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
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const authorizationHeader = req.get('Authorization'); // Bearer token

  // const notAllowedResp = {
  //   message: "You do not have permission to do that!",
  //   errorType: "not allowed",
  // }

  // if(!authorizationHeader) {
  //   return res.status(403).send(notAllowedResp);
  // }

  // const token = authorizationHeader.split(' ')[1];

  // const decoded = jwt.verify(token, envs.JWT_SECRET);

  // if(!decoded || (<any>decoded)?.type !== 'supplier') {
  //   return res.status(403).send(notAllowedResp);
  // }

  next();
};
