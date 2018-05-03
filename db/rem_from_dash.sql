delete from favorites
where name=$1;
select * from favorites
where userid = $2;