const Database = require('../db/config')

module.exports = {
    async index(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password

        /* Check if the password is correct */
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        if(verifyRoom.pass == password){
            if(action == "delete"){

                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            }else if(action == "check"){

                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)

            }
            res.redirect(`/room/${roomId}`)
        } else{
            res.render('passincorrect', {roomId: roomId})
        }


    },

    async create(req, res){
        const db = await Database()
        let name = "Joseph Lin";
        let email = "lin.jose@gmail.com";
        let balance = 240;

        await db.run(`INSERT INTO customers(
            name,
            email,
            balance
        )VALUES(
            "${name}",
            ${email},
            240
        )`)

        res.redirect(`/`)
    }
}