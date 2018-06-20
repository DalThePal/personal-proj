delete from favorites
where id=$1
returning id;