
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("companies", function (table) {
      table.increments(); // integer id
      table.timestamp("createdAt").defaultTo(knex.raw('now()')).notNullable();
      table.timestamp("updatedAt").defaultTo(knex.raw('now()')).notNullable();
      table.string("edrpou");
      table.string("status");
      table.string("officialName");
      table.string("name");
      table.string("mainPerson");
      table.string("occupation");
      table.string("address");
    })
  ]);  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("companies")
  ]); 
};
