const passport = require('passport')
const passportLocal = require('passport-local')
let User = require('../models/User')
const bcrypt = require('bcrypt')

const localStrategy = passportLocal.Strategy

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (username, password, done) => {
        
        const user = await User.findOne({email: username})
            .lean()
            .exec()
        if(!user) {
            return done(null, false)
        }

        const passwordValid = await bcrypt.compare(password, user.password)
        if(!passwordValid) {
            return done(null, false)
        }

        return done(null, user)
    }
))

// le navigateur et le serveur communique grace à un cookis
// quand je vais me login, passport va créer un session dans le backend
// et un cooki qui est lié à cette session
// ce cooki sera stocker dans le front end
// toute les requete fit pr le front end seront signés du cooki

// ces 2 fonctions permettent à partir du cooki de récuperer l'id de l'utilisateur

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.find({_id: id})
        .lean()
        .exec()
    done(null, user)
})

module.exports = passport