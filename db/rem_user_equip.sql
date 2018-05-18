DELETE FROM userEquipment
WHERE NAME=$1;
SELECT * FROM userEquipment
WHERE userid = $2;