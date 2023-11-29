const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`images-${Date.now()}-${file.originalname}`)
    }
})

const fileFilter=(req,file,callback)=>{
    if(file.mimetype=='image/jpg' || file.mimetype=='image/png' || file.mimetype=='image/jpeg'){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error('only accept png/jpg/jpeg format files'))
    }
}

const upload=multer({storage,fileFilter})
module.exports=upload