const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  firstName: casual.first_name,
  lastName: casual.last_name,
  bio: casual.sentences(),
  dob: casual.date(),
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const usersData = []

for (let i = 0; i < 20; ++i) {
  usersData.push(casual.user)
}

module.exports = usersData
