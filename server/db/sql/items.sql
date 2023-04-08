CREATE TABLE IF NOT EXISTS Item(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      picture BLOB,
      name VARCHAR(128) NOT NULL,
      desc TEXT,
      price REAL NOT NULL,
      inStock INTEGER NOT NULL,
      FOREIGN KEY KEY(id) REFERENCES Supplier(id)
);