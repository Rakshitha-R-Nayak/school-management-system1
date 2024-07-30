
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const route=require('./src/route/route')
const port=2501

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://rakshitha:rakshitha123@cluster0.eckz0ul.mongodb.net/')
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log(err.message);
})

app.use('/',route)
app.listen(port,()=>{
    console.log(`server running at port: ${port}`)
})