DELETE FROM userMount
WHERE name=$1 AND userid=$2
RETURNING name;