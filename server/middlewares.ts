import { Request, Response, NextFunction } from "express";
export const requireJsonContent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isWriting = req.method === 'POST' || req.method === 'PUT';

  if (req.headers["content-type"] !== "application/json" && isWriting) {
    res.send({
      status: 400,
      message: "Server requires application/json",
    });
  } else {
    next();
  }
};
