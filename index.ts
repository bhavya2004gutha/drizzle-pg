import dotenv from "dotenv";
import express from "express";
import userroutes from "./routes/userroutes";
 
const app = express();
app.use(express.json());
 

app.use("/user",userroutes);
const port = 9000;
app.listen(9000, () => {
  console.log("Server running on port 9000");
});
 