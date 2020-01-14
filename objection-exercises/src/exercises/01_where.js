const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  

  // Get all users with a specific name (pick it from your database)
  const specName = await User.query().select().where('firstName', 'Kylie')
  console.log(specName)
  // Do the same with object notation
  const specName2 = await User.query().select().where({firstName: 'Kylie'})
  console.log(specName2)
  // Get all DOGS and BIRDS
  const dog_bird = await Pet.query().select().whereIn('type',['DOG',BIRD])
  console.log(dog_bird)


  // -----
  cleanup()
}

run()
