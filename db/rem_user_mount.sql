DELETE FROM userMount
WHERE NAME=$1 AND userid=$2;
SELECT * FROM userMount
WHERE userid = $2;