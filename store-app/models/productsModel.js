const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'product name must be provided']
    },
    price:{
        type: Number,
        required: [true, 'product price must be provided']
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 4.5,

    },
    description:{
        type: String,
        required: [true, 'product description must be provided']
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum: {
            values: ['Shen', 'Fourt', 'DaskRoart', 'Alaz', 'Era'],
            message: '{VALUE} is not supported'
        }
    },
})

module.exports = mongoose.model('Product', productSchema)