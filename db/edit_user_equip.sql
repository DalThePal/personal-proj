UPDATE userEquipment
SET name=$1, cost=$2, weight=$3, description=$4
WHERE userid=$5 AND id=$6
RETURNING *;