const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

  const cat = await User.transaction(async trx => {
    const Jovi = await User.query(trx).insert({email: 'jovi4@dev.com', firstName: 'Jovi4', lastName: 'Tan', age:'93'}).returning("*")
    const cat = await Jovi.$relatedQuery('pets', trx).insert({ type: 'CAT', name: 'CATCAT'}).returning("*")
    const totalPets = await Pet.query().resultSize()
    if (totalPets > 15) {
      const byebirds = await Pet.query().delete().where('type', 'BIRD').returning("*")
      console.log(byebirds)
    }

    
    return cat;
  })

  console.log(cat)
  // -----
  cleanup()
}

run()
