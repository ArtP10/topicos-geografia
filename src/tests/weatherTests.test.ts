import supertest from 'supertest';
import app from '../index';
import  request  from 'supertest';

describe("Get /weatherapi", () => {

    describe("dado un nombre invalido de ciudad", () =>{


        test("deberia responder con un 201", async ()=> {
            const response = await request(app).get("/api/weather/weatherapi/London")
            expect (response.statusCode).toBe(201)
        })
    }) 

})