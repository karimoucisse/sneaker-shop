let User = require('../models/User')

const isSamaEmail = async (req, res, next) => {
    const {email} = await req.body
    console.log(req.body);

    const checkEmail = await User.findOne({email: email})
    if (checkEmail) {
        res.status(401).json("email deja utilisé")
    }else {
        next()
    }
}
module.exports = {
    isSamaEmail
}