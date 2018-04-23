delete from mountDash
where name=$1;
select * from mountDash
where userid = $2;