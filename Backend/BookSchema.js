const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://cmadhavan521:madhavan@cluster0.mjccy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((err)=>{
    console.log(err)
})
 
const cgpaSchema = mongoose.Schema({  
    name: String,  
    rollno: Number,  
    semester1: Number,  
    semester2: Number,  
    semester3: Number,  
    semester4: Number,  
    semester5: Number,  
    semester6: Number,  
    total: Number,  
});
const mark=mongoose.model('Mark', cgpaSchema)
module.exports=mark