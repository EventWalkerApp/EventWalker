const User = require("../models/userSchema")
const bcrypt = require("bcryptjs");




const addUser = async(req, res)=>{
 
     //complexity level and hashing using bcrypt
     const salt =await bcrypt.genSalt(10)
     const hashedPassword=await bcrypt.hash(req.body.password, salt)

    //find user from db
const userFound = await User.findOne({email:req.body.email});
if (userFound) return res.status(403).send("email already exist");

const newUser = new User({
   email: req.body.email,
   password: hashedPassword,
});
await newUser.save();
res.status(201).json({
    _id: newUser._id,
    email:newUser.email,
    password:newUser.password
});
}

const userLogin = async (req, res)=>{

    //user verification
    const user = await User.findOne({email:req.body.email});
     if (!user) return res.status(404).send("account not found");

     //password verification
     const verifiedPassword = await bcrypt.compare(req.body.password, user.password)
     if(!verifiedPassword) return res.status(404).send("invalid email or password");

     //res.header("authorization", token_id).send(token_id);
     res.status(202).json({
            _id: user._id,
            email:user.email,
           
        
     })
} 



module.exports ={ addUser};