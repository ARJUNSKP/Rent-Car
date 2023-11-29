const express=require('express')
const upload=require('../midleware/muilterMiddleware.js')
const logicPath=require('../Controler/logic')
const userLogic=require('../Controler/userLogic')
const carsLogic=require('../Controler/carsadingLogic')
const rentLogic=require('../Controler/rentsLogic')
// const BrantLogic=require('../Controler/BrantLogic')

const router=new express.Router()
router.post('/express/admin/login',logicPath.adminLogin)
router.post('/express/new/user',userLogic.newUserApi)
router.post('/express/login/user',userLogic.userLogin)

router.post('/express/otp/send',userLogic.otpSend)

router.post('/express/car/adding',upload.single('car-profile'),carsLogic.carAdd)
router.get('/express/car/Brant',carsLogic.getCar)
router.get('/express/Brant/cars',carsLogic.BrantCardInfo)
router.get('/express/all/cars/:carBrant',carsLogic.getAllcars)
router.get('/express/single/car/:carId',carsLogic.getSingleCar)
// ***
router.get('/express/car/search',carsLogic.getDataSearch)

router.post('/express/rent/user',rentLogic.rentApi)
router.get('/express/all/rent',rentLogic.getAllRent)

// router.post('/express/new/brant',BrantLogic.NewBrant)


module.exports=router