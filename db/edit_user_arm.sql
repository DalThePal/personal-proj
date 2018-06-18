UPDATE userarmor
SET name=$1, category=$2, cost=$3, armorclass=$4, strength=$5, stealth=$6, weight=$7
WHERE userid=$8 AND id=$9
RETURNING *;