const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')


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

        const result = await jwt.ecnode(process.env.JWT_SECRET, { id: user.userId })
        res.json({ user: user, token: result.value })
    }

    console.log('user', user)
})

router.get('/profile', async (req, res) => {
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
