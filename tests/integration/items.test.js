const request = require('supertest');
const app = require('../../src/app');

describe('Items API', () => {
  let createdItemId;

  test('POST /api/items - should create a new item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ title: 'Test Item' });    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    createdItemId = res.body.id;
  });

  test('DELETE /api/items/:id - should delete an item', async () => {
    const res = await request(app)
      .delete(`/api/items/${createdItemId}`);
    expect(res.statusCode).toBe(204);
  });
});