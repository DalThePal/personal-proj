DELETE FROM userarmor
WHERE name=$1 AND userid=$2;
SELECT * FROM userArmor
WHERE userid = $2;