// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup auth so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req,res) => {
  const { username, password } = req.body;
  // Multiple options for error handling:
  // mongooose validations
  // Joi package
  // Check in the controller and throw error there
  if(!username || !password) {
   throw new BadRequestError('Please provide email and password')
  }

 // ID for practice
  const id = new Date().getDate()

  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'} )

   res.status(200).json({msg:'user created', token})
}

const dashboard = async (req,res) => {
  console.log(req.user)
 
  const  luckyNumber = Math.floor(Math.random()*100)
  res.status(200).json({msg: `Hello, ${req.user.username}`, secret:`Here is your authorized data ${luckyNumber}`,
  })
 
 
}

module.exports = {
  login,
  dashboard
}