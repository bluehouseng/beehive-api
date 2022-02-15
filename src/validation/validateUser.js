const Joi = require("joi");

const validateUser = Joi.object({
  name: Joi.string().alphanum().required(),

  username: Joi.string().alphanum().min(3).max(30).required(),

  password: [Joi.string(),Joi.number()].pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  confirmPassword: Joi.ref("password"),

  accessToken: [Joi.string(), Joi.number()],

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phoneNo:Joi.number().min(3).max(15),
})
  .with("name", "email")
  .xor("password", "access_token")
  .with("password", "confirmPassword");

const User = {
 name:'john doe',
 userName:'doeski',
 password:[''],
 confirmPassword:[''],
 email:'doey@gmail.com',
 phoneNo:0903455677,
}

try {
  const validUser = validateUser.validate(User,{
   success: true,
   msg: `user Validation successful`
  });
} catch (err) {
 return(
  console.log(`${err}`)
 );
}


module.exports ={
 validUser
}