const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require("cors")



app.get('/', (req,res) =>{
    res.send('Hello World')
})

app.listen(5000, (err)=>{
    if(err){
        console.log('There\'s an error o');
    }
    else{
        console.log('server is running on port 5000')
    }
})