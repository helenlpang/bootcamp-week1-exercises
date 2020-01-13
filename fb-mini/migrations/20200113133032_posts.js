exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('ownerId')
    .notNullable()
    .references('users.id')

  
  table.text('text').notNullable
  
  table
    .integer('likes')
    .defaultTo(0)

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
