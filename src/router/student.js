const express = require('express');
const router = new express.Router();

//2: we need to define the router

router.get("/rohit",(req,res)=>{
    res.send("Hello WatsUp guys");
}); 

module.exports=router;