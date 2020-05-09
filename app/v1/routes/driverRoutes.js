import { Router } from "express";
import DriverController from "../controllers/driverController";
import errorHandler from "../middlewares/errorHandler";

const driver = Router();

driver.get("/drivers", errorHandler(DriverController.getAllDrivers));
driver.get(
  "/drivers/available",
  errorHandler(DriverController.getAvailableDrivers)
);

export default driver;
