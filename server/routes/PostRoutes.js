const express = require("express")
const router = express.Router()
const { request_post } = require("../controllers/request_functions")

router.route("/api/v1/dalle").post(request_post).get(request_post)
router.route("/api/get").get(request_post)

module.exports = router