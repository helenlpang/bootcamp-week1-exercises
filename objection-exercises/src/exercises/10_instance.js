const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const carey = await User.query().findOne({id:'0cf65108-8659-4428-8341-c630e252233b'})
  // console.log(carey)
  // Use that instance to create a new pet related that user
  // const newpet = await carey.$relatedQuery('pets').insert({type: 'DOG', name: 'BAOBAO'}).returning("*")
  // console.log(newpet)

  // Use that instance to get all of the user's pets and children
  const pets_kids = await carey.$fetchGraph('[pets, children]')
  console.log(pets_kids)

  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  // -----
  cleanup()
}

run()
