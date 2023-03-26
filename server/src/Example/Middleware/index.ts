import { Request, Response, NextFunction } from "express";
import { Example } from "../typings";

export function validateInsert(example: Example) {
  if (example.content.length === 0) {
    throw new Error("Invalid Content")
  }
}
