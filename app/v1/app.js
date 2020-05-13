import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
import constants from "./helpers/constants";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1", (req, res) =>
  res.json({ message: "Welcome to taxi 24 Web API v1" })
);
app.use("/api/v1", routes);

export default app;
