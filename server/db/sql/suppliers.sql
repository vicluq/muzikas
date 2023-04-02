-- Active: 1680199316163@@127.0.0.1@3306
CREATE TABLE suppliers(  
    username VARCHAR PRIMARY KEY, 
    name VARCHAR, 
    email VARCHAR UNIQUE,
    password VARCHAR, 
    cnpj VARCHAR, 
    picture BLOB,
    description TEXT,
    token TEXT
);