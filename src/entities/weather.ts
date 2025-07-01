import mongoose, { Document, Schema } from 'mongoose';

export interface WeatherReport extends Document {
  city: string;
  temperature: number;
  humidity: number;
  condition: string;
  created_at: Date;
}

const WeatherSchema = new Schema<WeatherReport>({
  city: { type: String, required: true, index: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  condition: { type: String, required: true }
}, {
  timestamps: true,
  collection: 'weather_reports'
});

export const WeatherModel = mongoose.model<WeatherReport>('Weather', WeatherSchema);


export const getWeatherByCity = (city: string) => WeatherModel.find({city});
export const createWeatherReport = (values: WeatherReport) => new WeatherModel(values)
.save().then((weather)=> weather.toObject()) 