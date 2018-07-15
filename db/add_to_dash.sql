insert into favorites (userid, name, url, type, index)
values ($1, $2, $3, $4, $5)
returning *;