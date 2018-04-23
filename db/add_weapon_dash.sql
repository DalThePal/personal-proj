insert into weaponDash (userid, name, url)
values ($1, $2, $3);
select * from weaponDash
where userid = $1;