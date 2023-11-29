const users=require('../Models/userModel')
const axios = require('axios');

const newUserApi=async(req,res)=>{
    const {email,psw}=req.body
    if(!email || !psw){
        res.status(400).json("all field are required")
    }else{
        try{
            const user= await users.findOne({email,psw})
            if(user){
                res.status(400).json("user already exist")
            }else{
                const newUser=new users({
                    email,
                    psw
                })
                await newUser.save()
                res.status(200).json("user is created")
            }
        }catch{
            res.status(400).json("connection error")
        }
    }
}
const userLogin=async(req,res)=>{
    const {email,psw}=req.body
    if(!email || !psw){
        res.status(400).json("all field are required")
    }else{
        try{
            const user=await users.findOne({email,psw})
            if(user){
                res.status(200).json({uId:user._id})
            }else{
                res.status(400).json("email or password invalid")
            }
        }catch{
            res.status(400).json("connection error")
        }
    }
}

const otpSend = async (req,res)=>{
    try {
        const mobileNumber = req.body.mobileNumber;
        const otp = Math.floor(100000 + Math.random() * 900000);
        const response = await axios.get('https://www.fast2sms.com/dev/bulk', {
          params: {
            authorization: process.env.FAST2SMS_API_KEY,
            variables_values: `Your OTP is ${otp}`,
            route: 'otp',
            numbers: mobileNumber
          }
        });
        res.json({ success: true, message: 'OTP sent successfully!' });
      } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ success: false, message: 'Failed to send OTP.' });
      }
}



module.exports={newUserApi,userLogin,otpSend}