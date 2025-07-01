import {Router} from "express";
import { WeatherController } from "controller/weatherController";

const router = Router();

router.get("/weather/weatherapi/:city", WeatherController.getWeatherAPIReport);


















export default router