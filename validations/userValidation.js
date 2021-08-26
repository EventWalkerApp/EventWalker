const Joi = require("joi");

//register user validation
const validateAddUser = new Joi.object({

email: Joi.string().min(10).max(200).email().required(),
password: Joi.string().min(8).max(50).required(),
})


module.exports={ validateAddUser }; 