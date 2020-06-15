CREATE TABLE users_review (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password TEXT
);

CREATE TABLE posts_review (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    content VARCHAR(250),
    created_at DATE
);