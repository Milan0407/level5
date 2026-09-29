import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port=process.env.PORT || 5000

const app=express()

app.get('/health',(req,res)=>{
    return res.status(200).json({message:"all is good My health is 100% 👍"})
})
app.get('/',(req,res)=>{
    return res.status(200).json({message:"Hello Milan chauhan level5 from the index.js"})
})

app.listen(port,()=>{
    console.log("server started on ${port}")
})