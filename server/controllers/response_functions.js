
//Import Section
const mongomodel = require("../models/Schema")
const dotenv = require("dotenv")
const { v2: cloudinary } = require("cloudinary")
const { Configuration, OpenAIApi } = require("openai")




//ENV VARAIBLES SECTION
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
})







//CODE SECTION: 
//GET ALL POST 
const response_get = async (req, res) => {
    try {
        const get_images = await mongomodel.find({})
        res.status(200).json({success:true,data:get_images})
    } catch (error) {
        res.status(500).json({ success: false, status: error.message })


    }
}


//CREATE POST:
const response_create = async (req, res) => {
    try {
        const { name, prompts, Images, } = req.body;
        // console.log(name+" "+" "+prompts+" "+Images)
        const Image_URL = await cloudinary.uploader.upload(Images)
        // console.log("URL"+" "+Image_URL.secure_url)
        const post_images = await mongomodel.create({ name: name, prompts: prompts, Images: Image_URL.secure_url })
        res.status(201).json({ success: true, data: post_images,URL:Image_URL })
    } catch (error) {
        return res.status(500).json({ success: false, status: error.message })

    }
}





//Export Section
module.exports = { response_get, response_create }
