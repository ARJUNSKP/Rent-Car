const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(Response=>{
    console.log(`mongodb is connected`)
}).catch(Response=>{
    console.log(`mongodb is not connected`)
})