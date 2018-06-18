
module.exports = {

    // DASHBOARD

    addToDash: (req, res) => {
        console.log('got to addToDash')
        const dbInstance = req.app.get('db');
        dbInstance.add_to_dash([
            req.session.passport.user.id,
            req.body.name,
            req.body.url,
            req.body.type
        ]).then((favorites) => res.status(200).send(favorites))
            .catch(() => res.status(500).send('didnt add favorite'))

    },

    addToUserDash: (req, res) => {
        console.log('got to addToUserDash')
        const dbInstance = req.app.get('db');
        dbInstance.add_to_user_dash([
            req.session.passport.uesr.id,
            req.body.name,
            req.body.type
        ]).then((userDash) => res.status(200).send(userDash))
            .catch(() => res.status(500).send('didnt add to UserDash'))
    },

    getDash: (req, res) => {
        console.log('got to getDash');
        const userId = req.session.passport.user.id;
        const dbInstance = req.app.get('db');
        dbInstance.get_dash(userId).then((favorites) => {
            res.status(200).send(favorites)
        })
            .catch(() => res.status(500).send('didnt get dash'))

    },

    remFromDash: (req, res) => {
        console.log('got to remFromDash')
        const dbInstance = req.app.get('db');
        dbInstance.rem_from_dash([
            req.params.name,
            req.session.passport.user.id
        ]).then((favorites) => res.status(200).send(favorites))
            .catch(() => res.status(500).send('didnt delete favorite'))

    },

    // EQUIPMENT

    createEquip: (req, res) => {
        console.log('got to createEquip')
        const dbInstance = req.app.get('db');
        dbInstance.create_equip([
            req.body.name,
            req.body.cost,
            req.body.weight,
            req.body.desc,
            req.session.passport.user.id
        ]).then((userEquipment) => res.status(200).send(userEquipment))
            .catch(() => res.status(500).send('didnt create equip'))
    },

    getUserEquip: (req, res) => {
        console.log('got to getUserEquip')
        const dbInstance = req.app.get('db')
        dbInstance.get_user_equip(req.session.passport.user.id).then((userEquipment) => {
            res.status(200).send(userEquipment)
        }).catch(() => res.status(500).send('didnt get userEquipment'))
    },

    remUserEquip: (req, res) => {
        console.log('got to remUserEquip')
        const dbInstance = req.app.get('db')
        dbInstance.rem_user_equip([
            req.params.name,
            req.session.passport.user.id
        ]).then((userEquipment) => res.status(200).send(userEquipment))
            .catch(() => res.status(500).send('didnt remove userEquip'))
    },

    editUserEquip: (req, res) => {
        console.log('got to editUserEquip')
        const dbInstance = req.app.get('db')
        dbInstance.edit_user_equip([
            req.body.name,
            req.body.cost,
            req.body.weight,
            req.body.description,
            req.session.passport.user.id,
            req.body.id
        ]).then((userEquipment) => res.status(200).send(userEquipment))
            .catch(() => res.status(500).send('didnt edit userEquip'))
    },

    // MOUNTS

    getUserMount: (req, res) => {
        console.log('got to getUserMount')
        const dbInstance = req.app.get('db')
        dbInstance.get_user_mount([req.session.passport.user.id]).then(userMount => {
            res.status(200).send(userMount)
        }).catch(() => res.status(500).send('didnt get userMount'));
    },

    createMount: (req, res) => {
        console.log('got to createMount')
        const dbInstance = req.app.get('db')
        dbInstance.create_mount([
            req.body.name,
            req.body.cost,
            req.body.speed,
            req.body.capacity,
            req.body.description,
            req.session.passport.user.id
        ]).then(userMount => res.status(200).send(userMount))
            .catch(() => res.status(500).send('didnt get userMount'));
    },

    remUserMount: (req, res) => {
        console.log('got to remUserMount')
        const dbInstance = req.app.get('db')
        dbInstance.rem_user_mount([
            req.params.name,
            req.session.passport.user.id
        ]).then(userMount => res.status(200).send(userMount))
            .catch(() => res.status(500).send('didnt remove userMount'));
    },

    editUserMount: (req, res) => {
        console.log('got to editUserMount')
        const dbInstance = req.app.get('db')
        dbInstance.edit_user_mount([
            req.body.name,
            req.body.cost,
            req.body.speed,
            req.body.capacity,
            req.body.description,
            req.session.passport.user.id,
            req.body.id
        ]).then(userMount => res.status(200).send(userMount))
            .catch(() => res.status(500).send('didnt edit userMount'));
    },

    // ARMOR

    getUserArmor: (req, res) => {
        console.log('got to getUserArmor')
        const dbInstance = req.app.get('db')
        dbInstance.get_user_armor([req.session.passport.user.id]).then(userArmor => {
            res.status(200).send(userArmor)
        }).catch(() => res.status(500).send('didnt get userArmor'))
    },

    createArm: (req, res) => {
        console.log('got to createArm')
        const dbInstance = req.app.get('db')
        dbInstance.create_arm([
            req.body.name,
            req.body.category,
            req.body.cost,
            req.body.armorClass,
            req.body.strength,
            req.body.stealth,
            req.body.weight,
            req.session.passport.user.id
        ]).then(userArmor => res.status(200).send(userArmor))
            .catch(() => res.status(500).send('didnt create arm'))
    },

    remUserArm: (req, res) => {
        console.log('got to remUserArm')
        const dbInstance = req.app.get('db')
        dbInstance.rem_user_arm([
            req.params.name,
            req.session.passport.user.id
        ]).then(userArmor => res.status(200).send(userArmor))
            .catch(() => res.status(500).send('didnt remove userArm'))
    },

    editUserArm: (req, res) => {
        console.log('got to editUserArm')
        const dbInstance = req.app.get('db')
        dbInstance.edit_user_arm([
            req.body.name,
            req.body.category,
            req.body.cost,
            req.body.armorClass,
            req.body.strength,
            req.body.stealth,
            req.body.weight,
            req.session.passport.user.id,
            req.body.id
        ]).then(userArmor => res.status(200).send(userArmor))
            .catch(() => res.status(500).send('didnt edit userArm'))
    }

}