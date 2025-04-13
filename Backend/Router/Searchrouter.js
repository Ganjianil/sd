const controller=require("../Controller/SearchController")
const express=require("express")
const router=express.Router()
router.post("/signup",controller.signup)
module.exports=router
