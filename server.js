const express = require("express");
const dotenv =require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB= require("./config/connectDB");
const usersRoute =require("./routes/usersRoute");
const eventRoute =require("./routes/eventRoute");


dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/event", eventRoute)
app.use("/api/users", usersRoute)

//home route
app.get("/", function(req, res){
    res.render("WELCOME")
});


//start server
app.listen(5003, function(){
    console.log("server started on port 5003");
});