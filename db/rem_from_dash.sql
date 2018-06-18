delete from favorites
where name=$1
returning id;