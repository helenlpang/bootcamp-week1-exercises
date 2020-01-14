const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const newPeter = await User.query().insertGraph({
      email: 'peter@outlook.com',
      firstName: 'Peter',
      lastName: 'Bynum',
      age: 90,
      pets: [
        {
          ownerId: this.id,
          type: 'DOG',
          name: 'Rocco'
        },

        {
          ownerId: this.id,
          type: 'DOG',
          name: 'Rosey'
        }
      ]

      
    })
    console.log(newPeter)
  // -----
  cleanup()
}

run()
