import express, { Request, Response } from "express";
var app = express();
const { resolve } = require("path");

app.get("/", (req: Request, res: Response) => {
  enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;
  console.log(c);
});

app.listen(3000);
