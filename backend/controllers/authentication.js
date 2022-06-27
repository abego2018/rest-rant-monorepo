const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const {User} = db

router.post('/', async(req, res) => {
    let user = await User.findOne({
        where: { email: req.body.email }
    })
    //404 message not popping up
    if ( user || await bcrypt.compare(req.body.password, userpasswordDigest)) {
        res.status(404).json({
            message: 'Could not find a user with the provided username and password'
        })
    }
    else {
        req.session.userId = user.userId
        res.json({ user })
    }

    console.log('user', user)
})


router.get('/profile', async (req, res) => {
    console.log('profile page')
    // try {
    //     let user = await User.findOne({
    //         where: {
    //             userId:
    //         }
    //     })
    //     res.json(user)
    // } catch {
    //     res.json(null)
    // }
})

module.exports = router
