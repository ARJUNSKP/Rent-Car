const cars=require('../Models/carsModel')

const carAdd=async(req,res)=>{
    const {carBrant,category,carName,dayRent,km,gearSystem,seat,fuelPump}=req.body
    const carPreview=req.file.filename
    if(!carBrant || !category || !carName || !dayRent || !km || !gearSystem || !seat || !fuelPump || !carPreview){
        res.status(400).json("All field are required")
    }else{
        try{
            const car = await cars.findOne({carName})
            if(car){
                res.status(400).json("car is already registered")
            }else{
                
                const newCar = new cars({
                    carBrant,
                    category,
                    carName,
                    dayRent,
                    km,
                    gearSystem,
                    seat,
                    fuelPump,
                    carPreview
                })
                await newCar.save()
                res.status(200).json("car added")
            }

        }catch{
            res.status(400).json("connection error")
        }
    }
}

const getCar = async (req,res)=>{
    const car = await cars.find()
    const DataBrant=[]
    const DataB=[]
    for(let i of car){
        DataBrant.push(i.carBrant)
    }
    DataB.push(DataBrant[0])
    for(let j=1;j<DataBrant.length;j++){
        if(DataB[DataB.length-1]!=DataBrant[j]){
            DataB.push(DataBrant[j])
        }
    }
    res.status(200).json(DataB)
}

const BrantCardInfo = async (req,res)=>{
    const {carBrant,category} = req.query;
   
    if(!carBrant){
        res.status(400).json("Car Brant required")
    }else{
        try{
            const car = await cars.find({carBrant:carBrant,category: category})
            if (car.length > 0) {
                res.status(200).json(car);
            } else {
                res.status(404).json("No cars found for the specified brand");
            }
        } catch (error) {
            console.error("Error fetching cars:", error);
            res.status(500).json("Internal server error");
        }
    }
}
const getAllcars=async(req,res)=>{
    const {carBrant}=req.params
    if(!carBrant){
        res.status(400).json("car Brant not present")
    }else{
        try{
            const car = await cars.find({carBrant})
            if(car){
                res.status(200).json(car)
            }else{
                res.status(400).json("car not present")
            }
        }catch{
            res.status(400).json("connection error")
        }
    }
}

const getSingleCar=async(req,res)=>{
    const {carId} = req.params
    if(!carId){
        res.status(400).json("carId is required")
    }else{
        try{
            const car = await cars.findOne({_id:carId})
            if(car){
                res.status(200).json(car)
            }else{
                res.status(400).json("car not present")
            }
        }catch{
            res.status(400).json("connection error")
        }
    }
}


// *******************************************************************************************************
const getDataSearch =async (req,res)=>{
    const {carBrant,category}=req.query
    const query={
        carBrant:{$regex:carBrant,$options:'i'},
        category:{$regex:category,$options:'i'}
    }
    const car=await cars.find(query)
    res.status(200).json(car)
}

module.exports={
    carAdd,
    getCar,
    BrantCardInfo,
    getAllcars,
    getSingleCar,
    getDataSearch
}