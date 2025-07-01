import {Request, Response} from "express";
import dotenv from 'dotenv';
import { WeatherService } from "services/weatherService";

dotenv.config()

const weatherService = new WeatherService(process.env.WEATHER_API_KEY||'');

export class WeatherController {
    static async getWeatherAPIReport(req: Request, res: Response): Promise<void> {
        try {
            const report = await weatherService.fetchWeatherOnly(req.params.city);
            console.log('controller called')
            res.status(201).json(report)
        } catch( error: any){
            res.status(400).json({message: error.message})
        }
    }
}