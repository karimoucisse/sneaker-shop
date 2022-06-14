const express = require('express')
const app = express()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('../config/passport')
const {isSameEmail} = require('../middlewares/sameEmail')


// ALLOW USER TO LOGIN

// sur la route POST `/login`, on utilise la stratégie locale en stratégie qui va nous permettre
// de stocker un user en session sur le serveur

app.post("/login", passport.authenticate("local"), (req, res) => {
    
    // si le user existe (il est maintenant dans `req.user`,
	// on utilise `req.logIn`, qui nous vient de passport pour stocker la session
	// du user. Et je renvoie le user au client (postman ou mon navigateur).
    if(req.user) {
        req.logIn(req.user, async err => {
            if(err) {
                console.log(err);
            }else {
                const user = await User.findOne({_id: req.user._id})
                    .lean()
                    .exec()
                res.json(user)
            }
        })
    }
})




app.post("/signup", isSameEmail, (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                ...req.body,
                password: hash
            })
            user.save()
                .then(() => {
                    res.status(201).json({ message: 'user is created' })
                    console.log(user);
                })
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
})


app.get('/me', async (req, res) => {
    if (req.user) {
        try {
            const user = await User.findById(req.user[0]._id)
            res.json(user)
            console.log(user);
        } catch(err) {
            console.log(err)
        }
    } else {
        res.status(401).json({ error: "Unauthorized"})
    }
})

// AllOW USER TO LOGOUT
app.delete("/logout", async (req, res) => {
    req.session.destroy()
    req.logout()
    res.status(200).json({ message: "success, user is logout" })
})


module.exports = app