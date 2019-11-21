exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('addresses').del()
      .then(function () {
        // Inserts seed entries
        return knex('addresses').insert([
          {userId: 1, addressLine_1: 'Some street'},
          {userId: 1, addressLine_1: 'Some road'}
        ]);
      });
  };