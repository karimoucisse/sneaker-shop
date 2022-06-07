const express = require('express')
const app = express()
const Cart = require('../models/Cart')
const { isAdmin } = require('../middlewares/isAdmin')

//CREATE CART
app.post('/', async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }catch (err) {
        res.status(500).json(err)
    }
})

//MODIFY CART
app.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const modifyCart = await Cart.findOneAndUpdate(
            {_id: id},
            {...req.body},
            {new: true}
        )
            // .exec()
        res.json(modifyCart)
        console.log(req.body);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//DELETE CART
app.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await Cart.findByIdAndDelete( id )
        res.status(200).json("Cart has been deleted !")
    }catch (err) {
        res.status(500).json(err)
    }
})

// GET USER CART
app.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const cart = await Cart.findById(id)
        // .exec()
        res.json(cart)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



// GET ALL CART
app.get('/', async (rec, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = app