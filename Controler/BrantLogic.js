// const brants=require('../Models/CarBrantModel')

// const NewBrant=async(req,res)=>{
//     const {carBrant,carBrantLogo}=req.body
//     if(!carBrant || !carBrantLogo){
//         res.status(400).json("All are required")
//     }else{
//         try{
//             const brant = await brants.findOne({carBrant})
//             if(brant){
//                 res.status("car exist")
//             }else{
//                 const newBrant=new brants({
//                     carBrant,
//                     carBrantLogo
//                 })
//                 await newBrant.save()
//                 res.status('new Brant Add')
//             }
//         }catch{
//             res.status(400).json("Connection error")
//         }
//     }
// }


// module.exports={NewBrant}