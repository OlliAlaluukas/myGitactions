const request = require('supertest');
const express = require('express');
const router = require('../routes/user'); 
const user = require('../models/user_model'); 

jest.mock('../models/user_model'); 

const app = express();
app.use('/', router);

describe('GET /', () => {
  it('should return a list of users', async () => {
    
    const mockUsers = [{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }];
    user.getAllUsers.mockImplementation((callback) => {
      callback(mockUsers);
    });

    
    const response = await request(app).get('/');

    
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUsers);
  });
});
