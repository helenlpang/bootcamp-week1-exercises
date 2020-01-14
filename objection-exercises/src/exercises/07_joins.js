const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')
const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const users_pets = await User.query().withGraphFetched('pets')
  // console.log(users_pets)

  // Get all users, their pets, AND their children
  // const users_pets_kids = await User.query().withGraphFetched('[pets, children]')
  // console.log(users_pets_kids)

  // Get all users, their parents, and their grandparents
  const users_parents_grands = await User.query().findOne('id', '0cf65108-8659-4428-8341-c630e252233b').withGraphFetched('parents.parents')
  // console.log(users_parents_grands.parents[0].parents)

  // Get all users, their pets, their chilren, and their childrens' pets
  const users_pets_kids_kidspets = await User.query().withGraphFetched('[pets,children.pets]')
  console.log(users_pets_kids_kidspets)

  // -----
  cleanup()
}

run()
