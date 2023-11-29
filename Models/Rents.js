const mongoose = require('mongoose')

const rentSchema = mongoose.Schema({
    uId:{
        type:String,
        required:true
    },
    uname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    todate:{
        type:String,
        required:true
    },
    carId:{
        type:String,
        required:true
    },
    carBrant:{
        type:String,
        required:true
    },
    carName:{
        type:String,
        required:true
    },
    carImage:{
        type:String,
        required:true
    }
})

const rents = mongoose.model("rents",rentSchema)

module.exports=rents