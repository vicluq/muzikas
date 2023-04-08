CREATE TABLE
    Promotions(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        category_id INTEGER,
        user_email VARCHAR(255) NOT NULL,
        is_percent BOOLEAN,
        active BOOLEAN,
        value FLOAT,
        Foreign Key (category_id) REFERENCES category(id)
    );