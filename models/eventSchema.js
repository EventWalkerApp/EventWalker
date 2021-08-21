const mongoose = require ("mongoose")

const eventSchema = mongoose.Schema({
  
    eventname:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    eventdate:{
        type: String,
        required: true
    },
    eventtime:{
        type: String,
        required: true
    },
    eventcategory:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    direction:{
        type: String,
        required: true
    }
},{
    timestamp:true
})

const Event = mongoose.model("Event", eventSchema)
module.exports = Event;