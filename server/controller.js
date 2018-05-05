
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
    }

}