exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
        table.increments('id');
        table.string('username').unique();
        table.string('email');
        table.integer('age');
        table.date('birthday'); 
        table.time('created_at');
        table.timestamp('created_at_timestamp').defaultTo(knex.fn.now());
        table.string('password');
    })
    .createTable('addresses', (table) => {
      table.increments('id');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.string('address_line_1');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('addresses')
    .dropTableIfExists('users');
};
