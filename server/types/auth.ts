import { Request, Response, NextFunction } from "express";

type SupplierId = { supplierId: number };
export type AuthMiddlewareReq = Request & SupplierId