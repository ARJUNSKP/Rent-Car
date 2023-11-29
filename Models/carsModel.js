const mongoose=require('mongoose')

const carsSchema=mongoose.Schema({
    carBrant:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    carName:{
        type:String,
        required:true
    },
    dayRent:{
        type:String,
        required:true
    },
    km:{
        type:String,
        required:true 
    },
    gearSystem:{
        type:String,
        required:true
    },
    seat:{
        type:String,
        required:true
    },
    fuelPump:{
        type:String,
        required:true
    },
    carPreview:{
        type:String,
        required:true
    }
    // ,
    // car:{
    //     type:String,
    //     required:true
    // }
})

const cars=mongoose.model("cars",carsSchema)

module.exports=cars