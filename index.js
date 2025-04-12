const express = require("express") ; 
const dotenv = require("dotenv") ; 
const dbConnect = require("./db/db.js")
const mainRouter = require("./routes/index.js") ; 
const cors = require("cors") ;
dotenv.config("./.env") ; 
const app = express() ; 


//connecting database 
dbConnect() ; 
// middlewares 
app.use(express.urlencoded({extended : true})) ;
app.use(express.json()) ;
// cors middleware 
app.use(cors()) ;

// testing route 
app.get("/" , (req , res)=> {
  return   res.status(200).json({
        "message" :"server is working fine"
    }) ; 
})

// routes 
app.use('/api' , mainRouter)

const PORT  = process.env.PORT || 4000 ; 
app.listen(PORT , ()=> {
    console.log(`server is listening on port : ${PORT}`)
})