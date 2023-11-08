
//Import Section
const mongoose=require("mongoose");


const mongodb_url=async(url)=>{
    try {
        // return mongoose.set({"strictQuery":"true"}).connect(url).then(()=>{console.log(`MONGODB is connected at URL:${url}`)}).catch((error)=>{console.log(`MONGODB connection Failure!`+ error)})
        await  mongoose.set({"strictQuery":"true"}).connect(url)
        return console.log(`MONGODB is connected at URL:${url}`)
  
    } catch (error) {
        console.log(`MONGODB connection Failure!`+ error)
    }
    //   .connect(url)
}
//Export Section
module.exports={mongodb_url}