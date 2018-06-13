INSERT INTO userarmor(name, category, cost, armorClass, strength, stealth, weight, userid)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
SELECT * FROM userarmor
WHERE userid = $8;