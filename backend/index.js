require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const passport = require('./config/passport')
const cors = require('cors')
const expressSession = require('express-session')

// require('./routes/auth')
// require('./routes/cart')
// require('./routes/order')
// require('./routes/products')
// require('./routes/user')

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




app.listen(port, () => {
    console.log(`Serveur is running on port ${port}`);
})