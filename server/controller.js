
module.exports = {

    // MONSTER DASH

    getMonstDash: (req, res) => {
        console.log('got t0 getMonstDash')
        const userId = req.params.userId;
        const dbInstance = req.app.get('db');
        dbInstance.get_monst_dash().then((monsters) => res.status(200).send(monsters))
            .catch(() => res.status(500).send('didnt get monster'))

    },

    addToMonstDash: (req, res) => {
        console.log('got t0 addMonstDash')
        const dbInstance = req.app.get('db');
        dbInstance.add_monst_dash([
            req.session.passport.user.id,
            req.body.name,
            req.body.url
        ]).then((monsters) => res.status(200).send(monsters))
            .catch(() => res.status(500).send('didnt add monster'))

    },

    remFromMonstDash: (req, res) => {
        console.log('got to remMonstDash')
        const dbInstance = req.app.get('db');
        dbInstance.rem_monst_dash([
            req.body.name,
        ]).then((monsters) => res.status(200).send(monsters))
            .catch(() => res.status(500).send('didnt delete monster'))

    },

    // SPELL DASH

    getSpellDash: (req, res) => {
        console.log('got t0 getSpellDash')
        const dbInstance = req.app.get('db');
        dbInstance.get_spell_dash().then((spells) => res.status(200).send(spells))
            .catch(() => res.status(500).send('didnt get spells'))

    },

    addToSpellDash: (req, res) => {
        console.log('got to addSpellDash')
        const dbInstance = req.app.get('db');
        dbInstance.add_spell_dash([
            req.session.passport.user.id,
            req.body.name,
            req.body.url
        ]).then((spells) => res.status(200).send(spells))
            .catch(() => res.status(500).send('didnt add spell'))
    },

    remFromSpellDash: (req, res) => {
        console.log('got to remSpellDash')
        const dbInstance = req.app.get('db');
        dbInstance.rem_spell_dash([
            req.body.name,
        ]).then((spells) => res.status(200).send(spells))
            .catch(() => res.status(500).send('didnt delete spell'))
    },

    // ARMOR DASH

    getArmorDash: (req, res) => {
        console.log('got t0 getArmorDash')
        const dbInstance = req.app.get('db');
        dbInstance.get_armor_dash().then((armor) => res.status(200).send(armor))
            .catch(() => res.status(500).send('didnt get armor'))

    },

    addToArmorDash: (req, res) => {
        console.log('got to addArmorDash')
        const dbInstance = req.app.get('db');
        dbInstance.add_armor_dash([
            req.session.passport.user.id,
            req.body.name,
            req.body.url
        ]).then((armor) => res.status(200).send(armor))
            .catch(() => res.status(500).send('didnt add armor'))
    },

    remFromArmorDash: (req, res) => {
        console.log('got to remArmorDash')
        const dbInstance = req.app.get('db');
        dbInstance.rem_armor_dash([
            req.body.name,
        ]).then((armor) => res.status(200).send(armor))
            .catch(() => res.status(500).send('didnt delete armor'))
    },

    // WEAPON DASH

    getWeaponDash: (req, res) => {
        console.log('got t0 getWeaponDash')
        const dbInstance = req.app.get('db');
        dbInstance.get_weapon_dash().then((weapon) => res.status(200).send(weapon))
            .catch(() => res.status(500).send('didnt get weapon'))

    },

    addToWeaponDash: (req, res) => {
        console.log('got to addWeaponDash')
        const dbInstance = req.app.get('db');
        dbInstance.add_weapon_dash([
            req.session.passport.user.id,
            req.body.name,
            req.body.url
        ]).then((weapon) => res.status(200).send(weapon))
            .catch(() => res.status(500).send('didnt add weapon'))
    },

    remFromWeaponDash: (req, res) => {
        console.log('got to remWeaponDash')
        const dbInstance = req.app.get('db');
        dbInstance.rem_weapon_dash([
            req.body.name,
        ]).then((weapon) => res.status(200).send(weapon))
            .catch(() => res.status(500).send('didnt delete weapon'))
    },

    // EQUIP DASH

    getEquipDash: (req, res) => {
        console.log('got t0 getEquipDash')
        const dbInstance = req.app.get('db');
        dbInstance.get_equip_dash().then((equip) => res.status(200).send(equip))
            .catch(() => res.status(500).send('didnt get equip'))

    },

    addToEquipDash: (req, res) => {
        console.log('got to addEquipDash')
        const dbInstance = req.app.get('db');
        dbInstance.add_equip_dash([
            req.session.passport.user.id,
            req.body.name,
            req.body.url
        ]).then((equip) => res.status(200).send(equip))
            .catch(() => res.status(500).send('didnt add equip'))
    },

    remFromEquipDash: (req, res) => {
        console.log('got to remEquipDash')
        const dbInstance = req.app.get('db');
        dbInstance.rem_equip_dash([
            req.body.name,
        ]).then((equip) => res.status(200).send(equip))
            .catch(() => res.status(500).send('didnt delete equip'))
    },

    // MOUNT DASH

    getMountDash: (req, res) => {
        console.log('got t0 getMountDash')
        const dbInstance = req.app.get('db');
        dbInstance.get_mount_dash().then((mount) => res.status(200).send(mount))
            .catch(() => res.status(500).send('didnt get mount'))

    },

    addToMountDash: (req, res) => {
        console.log('got to addMountDash')
        const dbInstance = req.app.get('db');
        dbInstance.add_mount_dash([
            req.session.passport.user.id,
            req.body.name,
            req.body.url
        ]).then((mount) => res.status(200).send(mount))
            .catch(() => res.status(500).send('didnt add mount'))
    },

    remFromMountDash: (req, res) => {
        console.log('got to remMountDash')
        const dbInstance = req.app.get('db');
        dbInstance.rem_mount_dash([
            req.body.name,
        ]).then((mount) => res.status(200).send(mount))
            .catch(() => res.status(500).send('didnt delete mount'))
    },
}