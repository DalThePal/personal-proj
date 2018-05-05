insert into userEquipment (name, cost, weight, description, userId)
values ($1, $2, $3, $4, $5);
select * from userEquipment
where userId = $5;