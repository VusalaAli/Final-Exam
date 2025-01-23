const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const port = 3000
app.use(express.json())
app.use(cors())



const sofaSchema = new mongoose.Schema({
    image:String,
    name:String,
    price:Number
})

const sofaModel = mongoose.model("sofa", sofaSchema)

// getData

app.get("/sofas", async (req,res)=>{
    const getData = await sofaModel.find()
    res.send(getData) 
})

// getById

app.get("/sofas/:id", async (req,res)=>{
const id = req.params.id
const getById = await sofaModel.findById(id)
res.send(getById)
})

// deleteData

app.delete("/sofas/:id", async (req,res)=>{
    const id = req.params.id
     await sofaModel.findByIdAndDelete(id)
     res.send("success delete...")
})

// createData

app.post("/sofas", async (req,res)=>{
const post = new sofaModel(req.body)
await post.save()
res.send("success post...")
})





app.listen(port, ()=>{
    console.log("dinlenilir...");
    
})

mongoose.connect("mongodb+srv://vusalavabp109:vusala2067@cluster1.hnuw6.mongodb.net/")
.then(()=>{
    console.log("connected...");
    
})
.catch((err)=>{
    console.log("not connected...", err);
    
})
