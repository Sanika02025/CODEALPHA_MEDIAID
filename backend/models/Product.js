const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    image:{
        type:String,
        default:""
    },

    buyPrice:{
        type:Number,
        required:true
    },

    rentPricePerDay:{
        type:Number,
        required:true
    },

    stock:{
        type:Number,
        required:true
    },

    availableForRent:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
});


module.exports = mongoose.model("Product", productSchema);