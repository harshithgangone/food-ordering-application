import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://harshithmongo:HARSHAMDB1234@cluster0.kkwkg.mongodb.net/food-order').then(()=>console.log('DB Connected'));
}