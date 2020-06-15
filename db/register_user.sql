INSERT INTO users_review (email, password)
VALUES ($1, $2);

SELECT * FROM users_review
WHERE email = $1;