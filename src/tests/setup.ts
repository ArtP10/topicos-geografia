import dotenv from 'dotenv';

// Load environment variables for testing
dotenv.config();

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/weather_test';
process.env.WEATHER_API_KEY = process.env.WEATHER_API_KEY || 'test_api_key';

// Global test timeout
jest.setTimeout(10000);