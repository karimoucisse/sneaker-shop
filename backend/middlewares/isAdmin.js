const isAdmin = (req, res, next) =>{
    
    if (req.user && req.user.isAdmin) {  
        next()
    } else {
        res.status(404).json({error: "Unauthorized"})
    }
}

module.exports = {
    isAdmin
}