const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()
const userRouter = require('./routes/manageUser.route')


const app = express()
const port = 5000


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/account', userRouter)

app.get('/', (req,res) =>{
    res.send('Hello World')
})


const URI = process.env.MONGO_DB_URI
mongoose.connect(URI)
.then(() => {
    console.log('MongoDb connected');
})
.catch((err) => {
    console.log(err.message);
})
    


app.listen(5000, (err)=>{
    if(err){
        console.log('There\'s an error o');
    }
    else{
        console.log('server is running on port 5000')
    }
})