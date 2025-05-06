// src/controllers/itemsController.js

const items = [];
let nextId = 1;

const getItems = (req, res) => {
  res.status(200).json(items);
};

const createItem = (req, res) => {
  const { title } = req.body;
  const newItem = {
    id: nextId,
    title,
    createdAt: new Date(),
  };
  nextId += 1;
  items.push(newItem);
  res.status(201).json(newItem);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === parseInt(id, 10));
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Item no encontrado' });
  }
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
};
