const { Router } = require("express");
const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express(); 
// const studentRouter = require('./router/student')
const port = process.env.PORT || 8000;

app.use(express.json());
// app.use(studentRouter);

app.get("/", (req, res) => {
  res.send("hello from the home side.");
}); 

//create a new student

// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   console.log(user)
//   user
//     .save()
//     .then(() => res.status(201).send(user))
//     .catch((e) => res.status(401).send(e));
// //   res.send("hello form the rsetful api side.");
// });

//using async

app.post("/students",async(req,res)=>{
    try{
      const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    } catch(e){
      res.status(401).send(e);
      console.log(e)
    }
})

app.get('/students',async (req,res)=>{
  try{
      const studentsData = await Student.find();
      res.send(studentsData);
  }catch(e){
    res.send(e);
  }
})

app.get('/students/:id',async (req,res)=>{
  try{
      const _id=req.params.id;
      const studentData = await Student.findById({_id});
      // console.log(req.params.id)
      res.status(201).send(studentData);
  } catch(e){
    res.status(401).send(e);
  }
})

//delete thw student data 

app.delete('/students/:id', async (req,res)=>{
  try{
    const _id= req.params.id;
    const deleteStudent = await Student.findByIdAndDelete({_id});
    console.log(req.params.id);
    res.status(201).send(deleteStudent);
  }catch(e){
    res.status(401).send(e);
  }
})

//Update student data using patch

app.patch('/students/:id',async (req,res)=>{
  try{
    const _id=req.params.id;
    const updateData = await Student.findByIdAndUpdate(_id, req.body);
    res.status(201).send(updateData);
  }
  catch(e){
    res.status(401).send(e);
  }
})

// app.get("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     console.log(user)
//     user
//       .save()
//       .then(() => res.status(201).send(user))
//       .catch((e) => res.status(401).send(e));
//   //   res.send("hello form the rsetful api side.");
//   });

app.listen(port, () => {
  console.log(`listening to the server ${port}...`);
});