const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const peter = await User.query().where('firstName', 'Peter')
  console.log(peter[0].fullName)
  console.log(peter[0].isAdult)

  // -----
  cleanup()
}

run()
