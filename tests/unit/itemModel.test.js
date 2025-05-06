const Item = require('../../src/models/item');

describe('Item Model', () => {
  test('should create an item with correct properties', () => {
    const item = new Item(1, 'Test Item', 'Description');
    expect(item.id).toBe(1);
    expect(item.title).toBe('Test Item');
    expect(item.createdAt).toBeInstanceOf(Date);
  });
});
