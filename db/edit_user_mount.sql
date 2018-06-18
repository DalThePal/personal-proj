UPDATE userMount
SET name=$1, cost=$2, speed=$3, capacity=$4, description=$5
WHERE userid=$6 AND id=$7
RETURNING *;