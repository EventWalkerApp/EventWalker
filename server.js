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
app.use("/api/events", eventRoute)
app.use("/api/users", usersRoute)

//home route
app.get("/", function(req, res){
    res.send("<h1>WELCOME</h1>")
});

const PORT= process.env.PORT || 5003

//start server
app.listen(PORT, function(){
    console.log("server started on port 5003");
});