const passport = require('passport')
const passportLocal = require('passport-local')
let User = require('../models/User')
const bcrypt = require('bcrypt')
const localStrategy = passportLocal.Strategy


// On ajoute la strategie 'local' a passport.
// fonction callback qui nous permet d'acceder au username et password
// du user, ainsi qu'a la fonction done qui nous permettra de renvoyer une erreur
// si le user n'existe pas, ou bien de le stocker en session s'il existe
// On spécifie que le usernameField (le champs username par défault), correspondra a la clé
// `email` sur mon user

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (username, password, done) => {
    // on cherche le user dont le username correspond
	// a ceux entrés par l'utilisateur
    // ici le username correspond à à l'email   
        const user = await User.findOne({email: username})
            .lean()
            .exec()
    // si on trouve pas de user correspondant, on renvoie une erreur en utilisant false en
    // deuxieme parametre de la fonction 'done'
        if(!user) {
            return done(null, false)
        }

        const passwordValid = await bcrypt.compare(password, user.password)
        if(!passwordValid) {
            return done(null, false)
        }

    // si on trouve un user correspondant, on renvoie un succes en mettant le user en parametre
	// de la fonction 'done'
        return done(null, user)
    }
))


// le navigateur et le serveur communique grace à un cookis
// quand je vais me login, passport va créer un session dans le backend
// et un cooki qui est lié à cette session
// ce cooki sera stocker dans le front end
// toute les requete fit pr le front end seront signés du cooki

// ces 2 fonctions permettent à partir du cooki de récuperer l'id de l'utilisateur

// A partir de là, chaque requêtes aura accès au user connecté dans `req.user`

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