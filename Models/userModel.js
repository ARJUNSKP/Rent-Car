const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
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
const users=mongoose.model("users",userSchema)

module.exports=users
