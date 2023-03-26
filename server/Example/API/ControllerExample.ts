import { NextFunction, Request, Response } from "express";
import { DatabaseClient } from "../Data/DataExample";
import { validateInsert } from "../Middleware";
import { Example } from "../typings";

export class ExampleController {
  public static async getExample(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id) // garantir que se trata de um número
      const example = await DatabaseClient.getExample(id)
      if (example) {
        res.status(200)
        res.send(example)
      }
    } catch (err) {
      res.status(400)
      res.send({
        message: err.message
      })
    }
  }

  public static async insertExample(req: Request, res: Response) {
    try {
      console.info(req.body);
      const newExample: Example = req.body;
      validateInsert(newExample);
      await DatabaseClient.insertExample(newExample.content);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(400);
      res.send({
        status: 400,
        message: err.message
      });
    }
  }
}
