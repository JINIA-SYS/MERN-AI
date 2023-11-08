
//Import Section
const mongomodel = require("../models/Schema")
const dotenv = require("dotenv")
const { v2: cloudinary } = require("cloudinary");
const { OpenAI } = require("openai")



//ENV VARIABLE SECTION: 
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
})


//OPENAI Configuration

// const configuration = new Configuration({
//     organization: "org-OtT3zoMnVOSf1u4tQFjk1N3D",
//     apiKey: process.env.OPENAI_API_KEY,
// });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
//CODE SECTION
const request_post = async (req, res) => {
    try {
        const {prompts} = req.body

        // console.log(prompts)
        const aiResponse = await openai.images.generate({ model: "dall-e-3", prompt: JSON.stringify(prompts), size: "1024x1024", quality:"standard", n:1,response_format:"b64_json"  })
        // aiResponse.then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
        const image =await aiResponse.data
        // image.then((res)=>{console.log(res.data.Images[0].b64_json)}).catch((err)=>{console.log(err)}) .data.Images[0].b64_json

        // console.log(image)
        // image.then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
        res.status(200).json({ Images: image })


    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)

    }
}



//Export Section
module.exports = { request_post }