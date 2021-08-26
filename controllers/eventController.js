const Event = require("../models/eventSchema");

//create an event
const createEvent = async (req, res)=>{
    const newEvent = new Event(
        {
            eventname:req.body.eventname,
            description:req.body.description,
            image:req.body.image,
            eventdate: req.body.eventdate,
            eventtime:req.body.eventtime,
            eventcategory:req.body.eventcategory,
            duration:req.body.duration,
            direction:req.body.direction,
            location:req.body.location,
            venue:req.body.venue,
        
        })
        await newEvent.save()
        res.status(201).json(newEvent);
}

//view all events
const getAllEvents =async(req, res)=>{
    const events = await Event.find();
    res.json(events);
}

//view single event
const getSingleEvent = async (req, res)=>{
    const event =await Event.findById(req.params._id)
    res.json(event);

};

//delete event
const deleteEvent = async (req, res)=>{
    const foundEvent = await Event.findById(req.params._id)
    if(foundEvent){
       foundEvent.remove()
       res.json({msg:`${foundEvent.eventname} removed`})
       
    } 
    else {
           res.status(404).json({error:"Event not found"})
       }
}


//update an event
const updateEvent = async (req, res)=>{
    const foundEvent =await Event.findById(req.params._id)
    const {eventname, description, image, eventdate, eventtime, 
        eventcategory, duration, direction, location,venue}=req.body
    if (foundEvent){
        foundEvent.eventname = eventname ?eventname: foundEvent.eventname,
        foundEvent.description = description ? description:foundEvent.description,
        foundEvent.image = image ? image: foundEvent.image,
        foundEvent.eventdate = eventdate ? eventdate: foundEvent.eventdate,
        foundEvent.eventtime = eventtime ? eventtime: foundEvent.eventtime,
        foundEvent.eventcategory = eventcategory ? eventcategory: foundEvent.eventcategory,
        foundEvent.duration = duration ? duration: foundEvent.duration,
        foundEvent.direction = direction ? direction: foundEvent.direction,
        foundEvent.location = location ? location: foundEvent.location,
        foundEvent.venue = venue ? venue: foundEvent.venue

        const updatedEvent = await foundEvent.save();
        res.json({updatedEvent})
    }else{
        res.json({error:"event not found"})
    }
}


module.exports={createEvent, getAllEvents, getSingleEvent, deleteEvent, updateEvent}