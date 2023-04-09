CREATE TABLE IF NOT EXISTS ItemCategory(
      itemId INTEGER,
      categoryId INTEGER,
      PRIMARY KEY(itemId, categoryId)
      FOREIGN KEY(itemId) REFERENCES Item(id),
      FOREIGN KEY(categoryId) REFERENCES Category(id)
);