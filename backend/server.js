import express from "express";
import cors from "cors"
import  {connectDB}  from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json()) //this is mainly used to convert the reqs from the frontend to json!
app.use(cors()) //this is used to connect the backend with any frontend!

//db connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/" , (req, res)=>{
    res.send("Hello Backend!<hr>API Working!!")
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
    
})

// mongodb+srv://harshithmongo:HARSHAMDB1234@cluster0.kkwkg.mongodb.net/?