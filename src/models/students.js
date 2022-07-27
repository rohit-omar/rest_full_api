const mongoose = require("mongoose");
const validator = require('validator');

const studentsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
        email:{
            type:String,
            required:true,
            // unique:[true,"Email id already present"],
            // validate(value){
            //     if(validator.isEmail(value)){
            //         throw new Error("Invalid Email")
            //     }
            // } 
        },
        phone:{
            type:Number,
            // min:10,
            // max:11,
            required:true,
            unique:true
        },
        address:{
            type:String,
            required:true,
        }
    }
)

//we will create new collection using model

const Student = new mongoose.model('Student',studentsSchema);

module.exports=Student;