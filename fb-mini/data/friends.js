
const casual = require('casual')
const usersData = require('./users')

casual.define('friend', (requestorId, receiverId) => ({
  id: casual.uuid,
  requestorId,
  receiverId,
  status: casual.random_element(['requested', 'denied', 'accepted']),
  created_at: casual.moment,
  updated_at: casual.moment,

}))


const friends = []

for (let i = 0; i < 20; ++i) {
  const requestorId = casual.random_element(usersData).id
  let receiverId = requestorId;
  while (receiverId === requestorId) {
    receiverId = casual.random_element(usersData).id
  }

  friends.push(casual.friend(requestorId, receiverId))
}

module.exports = friends
