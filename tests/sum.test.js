const request = require('supertest'); 
const express = require('express');    
const router = require('../routes/sum'); 


const app = express();
app.use('/', router);

describe('GET /:a?/:b?', () => {
    it('should return the sum of two numbers when both are provided', async () => {
        const res = await request(app).get('/3/4'); // Call with /3/4
        expect(res.statusCode).toEqual(200); // Expect success status code
        expect(res.body).toEqual(7); // 3 + 4 = 7
    });
    it('should return the sum of two numbers when both are provided', async () => {
        const res = await request(app).get('/-7/5'); // Call with /3/4
        expect(res.statusCode).toEqual(200); // Expect success status code
        expect(res.body).toEqual(-2); // -7 + 5 = -2
    });
    it('should return the default message when one or both parameters are missing', async () => {
        const res = await request(app).get('/'); // Call with no parameters
        expect(res.statusCode).toEqual(200); // Expect success status code
        expect(res.body).toEqual("Give two variables"); // Expect the default message
    });

    it('should handle missing one parameter', async () => {
        const res = await request(app).get('/5'); // Call with only one parameter
        expect(res.statusCode).toEqual(200); // Expect success status code
        expect(res.body).toEqual("Give two variables"); // Expect the default message
    });

   it('should handle non-numeric parameters', async () => {
        const res = await request(app).get('/a/b'); // Non-numeric parameters
        expect(res.statusCode).toEqual(200); // Expect success status code
        expect(res.body).toEqual("Both variables should be numerical"); 
    });
});