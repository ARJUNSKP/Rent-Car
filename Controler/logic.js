const admins=require('../Models/AdminModel')

const adminLogin=async(req,res)=>{
    const {email,psw}=req.body
    if(!email || !psw){
        res.status(400).json("all field are required")
    }else{
        try{
            const admin = await admins.findOne({email,psw})
            if(admin){
                res.status(200).json({
                    aid:admin._id
                })
            }else{
                res.status(400).json("Invalid userName and Password")
            }
        }catch{
            res.status(400).json("connection error")
        }
    }
}

module.exports={
    adminLogin
}