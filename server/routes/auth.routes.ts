import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import envs from "../config/env.js";

import { ErrorType } from "../types/error";
import { User } from "../types/user";

import UserService from "../models/User.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body; // password comes base64 encrypted

  let decryptedPass = Buffer.from(password, "base64").toString("ascii");

  try {
    // ? Get password from BD: decrypt and compare
    const user: Partial<User> = await UserService.getUser(email);

    if (!user) {
      return res.status(404).json({
        message: "There is no user with that email.",
        errorType: "not found",
      });
    }

    const isEq = bcrypt.compare(decryptedPass, user.password);

    if (!isEq) {
      return res.status(403).json({
        message: "Wrong password for email.",
        errorType: "validation",
      });
    }

    // ? Generate Token
    const expDateMS = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const tokenExpiration = expDateMS;

    const userTokenData: any = {
      email: user.email,
      name: user.name,
      type: user.type,
      validity: expDateMS,
    };

    const token = jwt.sign(userTokenData, envs.JWT_SECRET, { expiresIn: "7d" });

    await UserService.updateUser({ email, token });

    return res.status(200).json({
      email,
      name: user.name,
      type: user.type,
      token,
      tokenExpiration,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal problems.",
      errorType: "internal",
    });
  }
});

router.post("/create", async (req, res) => {
  const { email, name, password, confirmPassword, type } = req.body; // password comes base64 encrypted

  const user: Partial<User> = {
    email,
    name,
    type
  };

  let decryptedPass = Buffer.from(password, "base64").toString("ascii");
  let decryptedConfirmPass = Buffer.from(confirmPassword, "base64").toString(
    "ascii"
  );

  if (decryptedPass !== decryptedConfirmPass) {
    return res.status(402).json({
      errorType: "validation",
      message: "Passwords don't match.",
    });
  }

  try {
    // ? (1) Encrypt Password
    const encPass = await bcrypt.hash(decryptedPass, 12);
    user.password = encPass;

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

    // ? (3) Save user to DB
    await UserService.insertUser(user);

    return res.status(200).json({
      name: user.name,
      email: user.email,
      token: user.token,
      tokenExpiration,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal problems.",
      errorType: "internal",
    });
  }
});

router.delete("/delete", async (req, res) => {
  const { email } = req.body;

  try {
    await UserService.deleteUser(email);
    return res.status(200).json({
      message: "User deleted with success.",
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal problems.",
      errorType: "internal",
    });
  }
});

export default router;
