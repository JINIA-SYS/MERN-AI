const express = require("express")
const router = express.Router()
const { response_get,response_create } = require("../controllers/response_functions")

router.route("/api/v1/cloudinary").get(response_get).post(response_create)


module.exports = router 