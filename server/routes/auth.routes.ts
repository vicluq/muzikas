import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import envs from "../config/env.js";

import { ErrorType } from "../types/error";
import { User } from "../types/user";

const router = Router();

// ! User
router.post("user/login", (req, res) => {
  const { email, password } = req.body; // password comes base64 encrypted

  let decryptedPass = Buffer.from(password, "base64").toString("ascii");

  // Get password from BD -> decrypt and compare
  // if equal -> Generate token, validity and return 200
  // if not equal -> return 403 code
});

router.post("user/create", (req, res) => {
  const { email, name, password, confirmPassword } = req.body; // password comes base64 encrypted
  let error: ErrorType = null;

  const user: Partial<User> = {
    email,
    name,
  };

  let decryptedPass = Buffer.from(password, "base64").toString("ascii");
  let decryptedConfirmPass = Buffer.from(confirmPassword, "base64").toString(
    "ascii"
  );

  // ? (1) Encrypt Password
  if (decryptedPass !== decryptedConfirmPass) {
    return res.status(402).json({
      errorType: "validation",
      message: "Passwords don't match.",
    });
  }

  bcrypt
    .hash(decryptedPass, 12)
    .then((enc) => {
      user.password = enc;
    })
    .catch((err) => {
      error = {
        status: 500,
        message: "Internal problems.",
        errorType: 'internal'
      };
    });

  if (error) {
    return res
      .status(error.status)
      .json({ message: error.message, errorType: error.errorType });
  }

  // ? (2) Generate token + validity
  const expDateMS = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
  const tokenExpiration = expDateMS;
  
  const userTokenData: any = {
    email,
    name,
    validity: expDateMS,
  };

  const token = jwt.sign(userTokenData, envs.JWT_SECRET, { expiresIn: "7d" });
  user.token = token;

  // TODO (3) Save user to DB
  // ...

  if (error) {
    return res
      .status(error.status)
      .json({ message: error.message, errorType: error.errorType });
  }

  return res.status(200).json({
    name: user.name,
    email: user.email,
    token: user.token,
    tokenExpiration,
  });
});

router.delete("user/delete", (req, res) => {});

// ! Supplier
router.post("supplier/login", (req, res) => {
  const { email, password } = req.body;
  
  // Get password from BD -> decrypt and compare
  // if equal -> Generate token, validity and return 200
  // if not equal -> return 403 code
});

router.post("supplier/create", (req, res) => {
  const { email, name, password, confirmPassword } = req.body;
  
  // Get password from BD -> decrypt and compare
  // if equal -> Generate token, validity and return 200
  // if not equal -> return 403 code
});

router.delete("supplier/delete", (req, res) => {});

export default router;
