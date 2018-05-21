DELETE FROM userEquipment
WHERE NAME=$1 AND userid=$2;
SELECT * FROM userEquipment
WHERE userid = $2;