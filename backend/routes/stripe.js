const express = require('express')
const app = express()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

app.post("/", (req, res) => {
    // creation du payment Stripe
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        // on change la devise de payment en euro
        currency: "eur"
    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }
    })
})

module.exports = app