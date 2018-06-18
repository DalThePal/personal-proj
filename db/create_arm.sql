INSERT INTO userarmor(name, category, cost, armorclass, strength, stealth, weight, userid)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;