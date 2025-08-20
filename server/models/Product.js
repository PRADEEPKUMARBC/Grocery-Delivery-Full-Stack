import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: Array, 
        required: true, 
    },
    price: { 
        type: Number, 
        required: true 
    },
    offerPrice: { 
        type: Number, 
        required: true 
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    cartItems: {
        type: Array,
        default: {}
    },
    inStock: {
        type: Boolean, 
        default: true
    }
}, {timestamps: true} );

const Product = mongoose.models.product || mongoose.model('product', productSchema)

export default Product;
