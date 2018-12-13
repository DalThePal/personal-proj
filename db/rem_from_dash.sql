delete from favorites
where name=$1 AND type=$2 AND userid=$3
returning id;