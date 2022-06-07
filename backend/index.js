require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const passport = require('./config/passport')
const cors = require('cors')
const expressSession = require('express-session')



const authRoute = require('./routes/auth')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const productsRoute = require('./routes/products')
const userRoute = require('./routes/user')
const stripeRoute = require('./routes/stripe')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connection to MongoDB successful !'))
  .catch(() => console.log('Connection to MongoDB failed !'))

app.use(express.json())
app.use(cors({
    origin: process.env.ALLOWED_DOMAIN,
    credentials: true
}))
app.use(express.static('public'))
app.use(expressSession({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoute)
app.use('/cart', cartRoute)
app.use('/order', orderRoute)
app.use('/products', productsRoute)
app.use('/user', userRoute)
app.use('/payment', stripeRoute)

// TELLING TO HERUKU WHICH FOLDER WE WILL FOR AUR STATIC WEB SITE
app.use(express.static(path.join(__dirname, "/frontend/build")));
//tELLING HEROKU WHICH FILES  TO CREATE AND DISPLAY
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Serveur is running on port ${port}`);
})