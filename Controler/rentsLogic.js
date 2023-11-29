const rents = require('../Models/Rents')

const rentApi = async (req,res)=>{
    const {uId,uname,email,date,todate,carId,carBrant,carName,carImage} = req.body
    if(!uId || !uname || !email || !date || !todate || !carId || !carBrant || !carName || !carImage){
        res.status(400).json("all field are required")
    }else{
        const rent = await rents.findOne({date,carId})
        if(rent){
            res.status(400).json(`Car is note available in this ${date}`)
        }else{
            const newRent =new rents({
                uId,
                uname,
                email,
                date,
                todate,
                carId,
                carBrant,
                carName,
                carImage
            })
            await newRent.save()
            res.status(200).json(newRent)
        }
    }
}
const getAllRent = async (req,res)=>{
    const Rent =  await rents.find()
    if(Rent){
        res.status(200).json(Rent)
    }else{
        res.status(400).json("No Data Present")
    }
}

module.exports={
    rentApi,
    getAllRent
}