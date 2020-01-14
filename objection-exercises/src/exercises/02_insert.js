const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const addMe = await User.query().insert({
    email: 'helen2@outlook.com',
    firstName: 'Helen2',
    lastName: 'Pang',
    age: 5
  }).returning("*")
  console.log(addMe)
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const addPet = await Pet.query().insert({
    ownerId: '70814448-eb27-46de-a750-1657958b29f2',
    type: 'DOG',
    name: 'doggo'
  }).returning("*")
  console.log(addPet)
  // -----
  cleanup()
}

run()
