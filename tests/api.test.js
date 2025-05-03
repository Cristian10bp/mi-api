const request = require('supertest');
const app = require('../src/index');

describe('API tests', () => {
  it('should create a new item', async () => {
    const res = await request(app).post('/items').send({ name: 'Test item' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should return all items', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
