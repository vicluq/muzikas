import { Request, Response, NextFunction } from "express";
export const requireJsonContent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers["content-type"] !== "application/json") {
    res.send({
      status: 400,
      message: "Server requires application/json",
    });
  } else {
    next();
  }
};
