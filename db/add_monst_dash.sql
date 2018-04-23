insert into monstDash (userid, name, url)
values ($1, $2, $3);
select * from monstDash
where userId = $1;