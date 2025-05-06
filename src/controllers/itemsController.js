// src/controllers/itemsController.js

const getItems = (req, res) => {
  res.status(200).json({ message: 'Todos los items' });
};

const createItem = (req, res) => {
  res.status(201).json({ message: 'Item creado' });
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Item con id ${id} eliminado` });
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
};
