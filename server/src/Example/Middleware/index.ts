import { Request, Response, NextFunction } from "express";
import { Example } from "../typings";

export function validateInsert(example: Example) {
  if (example.content.length === 0) {
    return {
      status: 400,
      message: "Bad request: Content string is empty",
    };
  }
  return {
    status: 200,
  };
}
