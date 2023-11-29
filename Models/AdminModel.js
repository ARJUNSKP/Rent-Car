const mongoose=require('mongoose')

const adminSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        undefined:true
    },
    psw:{
        type:String,
        required:true
    }
})
const admins=mongoose.model("admins",adminSchema)

module.exports=admins