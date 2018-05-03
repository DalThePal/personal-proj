
module.exports = {
 
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
   
}