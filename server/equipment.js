module.exports = (req, res) => {
    console.log('got to getUserEquip')
    const dbInstance = req.app.get('db')
    dbInstance.get_user_equip(req.session.passport.user.id).then((userEquipment) => {
        res.status(200).send(userEquipment)
    }).catch(() => res.status(500).send('didnt get userEquipment'))
}