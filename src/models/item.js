// src/models/item.js
class Item {
    constructor(id, title, description) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.createdAt = new Date();
    }
  }
  
  module.exports = Item;
  