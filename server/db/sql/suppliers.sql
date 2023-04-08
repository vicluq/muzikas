-- Active: 1680905457554@@127.0.0.1@3306
CREATE TABLE IF NOT EXISTS Suppliers (  
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR UNIQUE, 
    name VARCHAR, 
    email VARCHAR UNIQUE,
    password VARCHAR, 
    cnpj VARCHAR, 
    picture BLOB,
    address TEXT,
    complement TEXT,
    description TEXT,
    token TEXT
);