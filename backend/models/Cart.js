const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
    userId: {type: String},
    products: [
        {
            product: { 
                type: Array
            },
            quantity: {
                type: Number, default: 1
            }
        }
    ],
},{
    timestamps: true
}) 


const Cart = mongoose.model('Cart', CartSchema)
module.exports = Cart