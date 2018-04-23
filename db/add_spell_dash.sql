insert into spellDash (userid, name, url)
values ($1, $2, $3);
select * from spellDash
where userid = $1;