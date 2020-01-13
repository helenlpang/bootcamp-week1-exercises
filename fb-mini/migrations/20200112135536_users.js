exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()
  
  table
    .string('firstName')
    .notNullable()

  table
    .string('lastName')
    .notNullable()
  
  table
    .text('bio')
    .notNullable()
  
  table
  .date('dob')
  .notNullable()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
