insert into favorites (userid, name, url, type)
values ($1, $2, $3, $4)
returning *;