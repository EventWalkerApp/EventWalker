const express = require ("express");
const {createEvent, getAllEvents, getSingleEvent, deleteEvent, updateEvent} = require("../controllers/eventController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router()

router.route("/")
.post(protect, createEvent)
.get(protect,getAllEvents)


router.route("/:_id")
.get(protect,getSingleEvent)
.delete(protect,deleteEvent)
.put(protect,updateEvent)
module.exports = router;