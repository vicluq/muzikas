import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import env from "../config/env.js";

import { ErrorType } from "../types/error";
import { User } from "../types/user";

const router = Router();

router.post("user/login", (req, res) => {
  const { email, password } = req.body; // password comes base64 encrypted

  let decryptedPass = Buffer.from(password, "base64").toString('ascii');
  
  // Get password from BD -> decrypt and compare
  // if equal -> Generate token, validity and return 200
  // if not equal -> return 403 code
});

router.post("user/register", (req, res) => {
  const { email, name, password, confirmPassword } = req.body; // password comes base64 encrypted
  let error: ErrorType = null;

  const user: Partial<User> = {
    email,
    name,
  };

  let decryptedPass = Buffer.from(password, "base64").toString('ascii');
  let decryptedConfirmPass = Buffer.from(confirmPassword, "base64").toString('ascii');

  // * Encrypt Password
  if (decryptedPass !== decryptedConfirmPass) {
    return res.status(402).json({
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
      };
    });

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }

  // * Generate token + validity
  const userData: any = {
    email,
    name,
    tokenCreation: new Date(),
  };

  const token = jwt.sign(userData, env.JWT_SECRET, { expiresIn: "7d" });
  const expDateMS = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

  user.token = token;
  user.tokenExpiration = expDateMS;

  // TODO Save user to DB
  // ...

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.status(200).json({
    name: user.name,
    email: user.email,
    token: user.token,
    tokenExpiration: user.tokenExpiration,
  });
});

// ! Supplier
router.post("supplier/login", (req, res) => {
  const { email, password } = req.body;

  // Get password from BD -> decrypt and compare
  // if equal -> Generate token, validity and return 200
  // if not equal -> return 403 code
});

router.post("supplier/register", (req, res) => {
  const { email, name, password, confirmPassword } = req.body;

  // Get password from BD -> decrypt and compare
  // if equal -> Generate token, validity and return 200
  // if not equal -> return 403 code
});

export default router;
