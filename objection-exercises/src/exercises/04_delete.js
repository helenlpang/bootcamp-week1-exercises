const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const cats = await Pet.query().delete().where('type', 'CAT')
  console.log(cats)
  // -----
  cleanup()
}

run()
