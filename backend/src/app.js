import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

const app = express();


// To parse json request body
app.use(express.json());

// To  parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


app.use(cors());
app.options("*", cors());

//---------------MongoDB---------------
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("MONGODB CONNECTED...")
})
.catch(e =>{
    console.log("Mongoose connection Error", e.message)
})
//-------------------------------------



app.listen(process.env.SERVER_PORT, () =>{
    console.log(`SERVER Started http://localhost:${process.env.SERVER_PORT}`)
})