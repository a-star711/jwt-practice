// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup auth so only the request with JWT can access the dashboard


const customAPIError = require('../errors/custom-error')

const login = async (req,res) => {
  const { username, password } = req.body;
  // Multiple options for error handling:
  // mongooose validations
  // Joi package
  // Check in the controller and throw error there
  if(!username || !password) {
   throw new customAPIError('Please provide email and password', 400)
  }
  console.log(username, password);

  res.send('Fake login/Register/Signup Route')
}

const dashboard = async (req,res) => {
  const  luckyNumber = Math.floor(Math.random()*100)
  res.status(200).json({msg: `Hello, Ivo`, secret:`Here is your authorized data ${luckyNumber}`})
}

module.exports = {
  login,
  dashboard
}