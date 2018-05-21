INSERT INTO usermount(name, cost, speed, capacity, description, userid)
VALUES ($1, $2, $3, $4, $5, $6);
SELECT * FROM usermount
WHERE userid = $6;
