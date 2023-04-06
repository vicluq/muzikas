CREATE TABLE IF NOT EXISTS User (
      email VARCHAR(100) PRIMARY KEY,
      picture BLOB,
      name VARCHAR(100) NOT NULL,
      password TEXT NOT NULL,
      token TEXT,
      type CHAR(1)
);