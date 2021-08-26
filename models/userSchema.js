const mongoose = require("mongoose")

const userSchema =new mongoose.Schema({
    role:{
    type: String,
        required: true,
        enum:[
"EVENT-MANAGER" , "EVENT-ATTENDEE"
        ],
    default: "EVENT-ATTENDEE"
},
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}
);


const User = mongoose.model("User", userSchema);

module.exports = User;