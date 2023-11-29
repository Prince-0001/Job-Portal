const express = require("express")

const app = express();
const path = require('path')
const cors = require('cors')
const jobRoutes = require("./jobroutes/jobroutes")
const applicantRoutes = require("./jobroutes/aaplicantroutes")


const db = require("./db");

app.use(express.json());
app.use(cors())
app.use('/api/jobs/',jobRoutes)
app.use("/api/applicant/",applicantRoutes)




const port =  5000 ;
app.get("/",(req,res)=>{res.send("working");})
app.listen(port,()=> console.log("everything is  okk"));