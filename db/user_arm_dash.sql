UPDATE userarmor
SET dashItem=$1
WHERE userid=$2 AND id=$3
RETURNING *;