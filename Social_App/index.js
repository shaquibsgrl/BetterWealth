const express=require("express");

const app=express();

const mongoose=require("mongoose");
const helmet=require("helmet");
const morgan=require("morgan");
const dotenv=require("dotenv");

const userRouter=require("./routes/users");
const authRouter=require("./routes/auth");
const postRouter=require("./routes/posts")

dotenv.config()
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("connected to mongodb")
});

//middlemare

app.use(express.json())
// app.use(helmet())
// app.use(morgan("common"));

app.use("/api/users",userRouter)
app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter);

app.listen(8080,()=>{
    console.log("listening on port 8080")
})