import axios from 'axios';
import { WeatherReport, WeatherModel, getWeatherByCity, createWeatherReport} from 'entities/weather';


interface APIResponse{
    location: {
        name:string
    },
    current: {
        temp_c: number;
        humidity: number;
        condition: {
            text: string
        }
    }
}

export class WeatherService {
    private apiKey: string;
    private baseUrl: string = 'https://api.weatherapi.com/v1';

    constructor(apiKey: string){
        this.apiKey = apiKey;
    }


    private formatWeatherResponse(response: APIResponse): Partial<WeatherReport> {
        const {location, current} = response;

        return {
            city: location.name,
            temperature: current.temp_c,
            humidity: current.humidity,
            condition: current.condition.text
        }
    }
    async fetchWeatherOnly(city: string): Promise<Partial<WeatherReport>> {
    try {
      const response = await axios.get<APIResponse>(
        `${this.baseUrl}/current.json`,
        {
          params: {
            key: this.apiKey,
            q: city,
            aqi: 'no'
          }
        }
      );
      
      return this.formatWeatherResponse(response.data);
      
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Failed to fetch weather data');
    }
  }
}