insert into mountDash (userid, name, url)
values ($1, $2, $3);
select * from mountDash
where userid = $1;