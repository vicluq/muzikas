import { NextFunction, Request, Response } from "express";
import { DatabaseClient } from "../Data/DataExample";
import { validateInsert } from "../Middleware";
import { Example } from "../typings";

export class ExampleController {
  public static getExample(req: Request, res: Response) {
    res.send({
      stauts: 200,
      message: "HEY YOU",
    });
  }

  public static async insertExample(req: Request, res: Response) {
    try {
      console.info(req.body);
      const newExample: Example = req.body;
      let response = validateInsert(newExample);
      if (response.status === 200)
        response = await DatabaseClient.insertExample(newExample.content);
      res.status(response.status);
      res.send(response);
    } catch (err) {
      console.error(err);
      res.status(400);
      res.send({
        stauts: 400,
        message: "Bad request: Payload format is not correct",
      });
    }
  }
}
