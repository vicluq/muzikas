CREATE TABLE
    promotions(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        is_percent BOOLEAN,
        active BOOLEAN,
        value FLOAT
    );