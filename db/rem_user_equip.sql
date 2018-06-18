DELETE FROM userEquipment
WHERE NAME=$1 AND userid=$2
RETURNING name;