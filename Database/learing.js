// MVC 

// M = model => database 
// V = view = > react js => UI/UX , EJS 
// C = controller => req  , res => main logic for the entire projcet 

// CORS => backend with the frontend , 


// mongoose => mongodb -- nodejs 
// npm i mongoose

// model--> schema-->   + collection  (CRUD) vs schema--> blueprint 

// JSON like data --> mongodb ---> B(Binary)SON 

// {
//     name : ayush---> mongodb-- {_id
        
//     _v:
//     }
// }

// MVC =>

// we have to craete 4 folder
// 1) create a folder named  config and inside it create a file named db.js

// const mongoose = require("mongoose")

// const connectDB = async()=>{
//     await mongoose.connect("mongodb://127.0.0.1:27017/your_db_name")
//     console.log("DATABSE connected")
// }
// module.exports = connectDB

// 2) create a folder named model and inside that u can make a file named usermodel.js

// const mongoose = require("mongoose")

// const userSchema = new mongoose.schema({
//     name :{
//         type : string ,
//         required : true 
//     } ,
//     gmail : {
//         type : string ,
//         required : true,
//         unique : true 

//     } ,
//     password :{
//         type : string ,
//         required : true,
//     }
// })

// userSchema.pre("save" , function(){
//     console.log("ye hae mera pre hooks jo mongodb main store hone se pahle console pe dikhaega" , this)
// })


// userSchema.pre("save" , function(){
//     console.log("ye hae mera pre hooks jo mongodb main store hone se pahle console pe dikhaega" , this)
// })
// module.exports = mongoose.model("User" ,userSchema )


// 3)create a folder named controler and make a file named usercontrollers.js

// const User = require("./models/usermodel.js")

// exports.createUser = async(req , res) =>{
//     const user = await User.create(req.body)
//     res.json(user)
// }



// exports.Getuser = async(req , res) =>{
//     const users = await User.find()
//     res.json(users)
// }


// 4) make a folder named routes and make a file named userroutes.js

// const express = require("express")
// const usercontroler = require("./controlers/usercontrolers.js")
// const router = express.Router()

// router.post("/add" ,usercontroler.createUser )
// router.get("/" ,usercontroler.getUser )

// module.exports = router 

// 5) app.js 

// const express = require("express")
// const app = express()
// app.use(express.json())
// const connectDB = require("./config/db.js")
// const router = require("./routes/userroutes.js")

// app.use("/user" , router)
// app.listen(3000 , ()=>{
//     console.log("mera server run kr rha hae port no 3000 pe ")
// })