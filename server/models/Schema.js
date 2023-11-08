
//Import Section
const mongoose=require("mongoose")




const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    prompts:{type:String,required:true},
    Images:{type:String,required:true}
},{timestamps:true})
const model=new mongoose.model("Prompt",userSchema)



//Export Section
module.exports=model